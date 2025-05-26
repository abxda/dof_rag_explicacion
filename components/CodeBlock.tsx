
import React, { useRef, useEffect, useState, useCallback } from 'react';
import { InteractiveCodeSegment } from '../types';

interface CodeBlockProps {
  code: string;
  language: string;
  interactiveSegments?: InteractiveCodeSegment[];
  onSelectCodeSegment?: (segment: InteractiveCodeSegment) => void;
  interactiveSegmentsEnabled: boolean;
}

const pythonKeywords = [
  'def', 'class', 'if', 'else', 'elif', 'for', 'while', 'return', 'import', 'from',
  'with', 'as', 'try', 'except', 'finally', 'print', 'True', 'False', 'None', 'in',
  'is', 'not', 'and', 'or', 'lambda', 'yield', 'global', 'nonlocal', 'pass', 'break',
  'continue', 'assert', 'async', 'await', 'del', 'raise', 'self'
];

const highlightPythonCode = (line: string): string => {
  let highlightedLine = line;
  highlightedLine = highlightedLine.replace(/</g, '&lt;').replace(/>/g, '&gt;');

  highlightedLine = highlightedLine.replace(/(#.*$)/gm, '<span class="text-green-400">$1</span>');
  
  highlightedLine = highlightedLine.replace(/(""".*?"""|'''.*?''')/gs, (match) => {
    if (match.includes('<span class="text-green-400">')) return match; // Already a comment
    return `<span class="text-amber-400">${match}</span>`;
  });
  highlightedLine = highlightedLine.replace(/(".*?"|'.*?')/g, (match) => {
    if (match.includes('<span class="text-green-400">')) return match;
    if (match.includes('<span class="text-amber-400">')) return match; 
    return `<span class="text-amber-400">${match}</span>`;
  });

  pythonKeywords.forEach(keyword => {
    const regex = new RegExp(`\\b${keyword}\\b`, 'g');
    highlightedLine = highlightedLine.replace(regex, (match, offset, originalString) => {
      const partBefore = originalString.substring(0, offset);
      if ((partBefore.match(/<span/g)?.length || 0) > (partBefore.match(/<\/span>/g)?.length || 0) ) {
        return match;
      }
      if (keyword === 'self') return `<span class="text-red-400 font-medium">${match}</span>`;
      return `<span class="text-sky-400 font-semibold">${match}</span>`;
    });
  });
  
  highlightedLine = highlightedLine.replace(/\b(\d+\.?\d*)\b/g, (match, _p1, offset, originalString) => {
    const partBefore = originalString.substring(0, offset);
    if ((partBefore.match(/<span/g)?.length || 0) > (partBefore.match(/<\/span>/g)?.length || 0) ) {
        return match; 
      }
    return `<span class="text-purple-400">${match}</span>`;
  });

  highlightedLine = highlightedLine.replace(/\b(def|class)\s+([a-zA-Z_][\w_]*)/g, 
    (match, p1_keyword, p2_name, offset, originalString) => {
      const partBefore = originalString.substring(0, offset);
      if ((partBefore.match(/<span/g)?.length || 0) > (partBefore.match(/<\/span>/g)?.length || 0) ) {
        return match; 
      }
      return `<span class="text-sky-400 font-semibold">${p1_keyword}</span> <span class="text-emerald-400 font-semibold">${p2_name}</span>`;
  });
  return highlightedLine;
};

interface DrawingPath {
  points: { x: number; y: number }[];
  color: string;
  lineWidth: number;
}

const DrawingControls: React.FC<{
  selectedColor: string;
  onColorChange: (color: string) => void;
  onClear: () => void;
}> = ({ selectedColor, onColorChange, onClear }) => {
  const colors = [
    { name: 'Amarillo', value: '#FACC15' }, // yellow-400
    { name: 'Rojo', value: '#F87171' },     // red-400
    { name: 'Azul', value: '#60A5FA' },      // blue-400
    { name: 'Blanco', value: '#FFFFFF' },
  ];

  return (
    <div className="flex items-center space-x-2 p-2 bg-slate-800/70 rounded-md mb-2">
      <span className="text-xs text-slate-300 mr-2">Color:</span>
      {colors.map(color => (
        <button
          key={color.value}
          title={color.name}
          onClick={() => onColorChange(color.value)}
          className={`w-6 h-6 rounded-full border-2 transition-all ${
            selectedColor === color.value ? 'border-white ring-2 ring-offset-1 ring-offset-slate-800 ring-white' : 'border-transparent hover:border-slate-400'
          }`}
          style={{ backgroundColor: color.value }}
        />
      ))}
      <button
        onClick={onClear}
        className="ml-auto bg-slate-600 hover:bg-red-500 text-white text-xs px-3 py-1 rounded-md transition-colors"
      >
        Borrar Dibujo
      </button>
    </div>
  );
};

const CodeBlock: React.FC<CodeBlockProps> = ({ 
  code, 
  language, 
  interactiveSegments, 
  onSelectCodeSegment,
  interactiveSegmentsEnabled 
}) => {
  const trimmedCode = code.trimEnd();
  const lines = trimmedCode.split('\\n');
  
  const preRef = useRef<HTMLPreElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [drawingColor, setDrawingColor] = useState<string>('#FACC15'); 
  const [paths, setPaths] = useState<DrawingPath[]>([]);
  const currentPathRef = useRef<DrawingPath | null>(null);


  const redrawAllPaths = useCallback((ctx: CanvasRenderingContext2D) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    paths.forEach(path => {
      ctx.beginPath();
      ctx.strokeStyle = path.color;
      ctx.lineWidth = path.lineWidth;
      ctx.lineCap = 'round';
      ctx.lineJoin = 'round';
      if (path.points.length > 0) {
        ctx.moveTo(path.points[0].x, path.points[0].y);
        for (let i = 1; i < path.points.length; i++) {
          ctx.lineTo(path.points[i].x, path.points[i].y);
        }
        ctx.stroke();
      }
    });
  }, [paths]);

  const resizeCanvas = useCallback(() => {
    if (canvasRef.current && preRef.current) {
      const canvas = canvasRef.current;
      canvas.width = preRef.current.scrollWidth;
      canvas.height = preRef.current.scrollHeight;
      const ctx = canvas.getContext('2d');
      if (ctx) {
        redrawAllPaths(ctx);
      }
    }
  }, [redrawAllPaths]);

  useEffect(() => {
    resizeCanvas();
    // Consider using ResizeObserver for more robust resizing if needed
    window.addEventListener('resize', resizeCanvas);
    return () => window.removeEventListener('resize', resizeCanvas);
  }, [code, resizeCanvas]);


  const getCorrectedCoords = (event: React.MouseEvent<HTMLCanvasElement>): { x: number, y: number } | null => {
    const canvas = canvasRef.current;
    const pre = preRef.current;
    if (!canvas || !pre) return null;

    const rect = canvas.getBoundingClientRect();
    return {
      x: event.clientX - rect.left + pre.scrollLeft,
      y: event.clientY - rect.top + pre.scrollTop
    };
  };
  
  const startDrawing = useCallback((event: React.MouseEvent<HTMLCanvasElement>) => {
    if (interactiveSegmentsEnabled) return;
    const coords = getCorrectedCoords(event);
    if (!coords) return;

    setIsDrawing(true);
    currentPathRef.current = { points: [coords], color: drawingColor, lineWidth: 2 };
    setPaths(prevPaths => [...prevPaths, currentPathRef.current!]);

  }, [interactiveSegmentsEnabled, drawingColor, getCorrectedCoords]);

  const draw = useCallback((event: React.MouseEvent<HTMLCanvasElement>) => {
    if (!isDrawing || interactiveSegmentsEnabled || !currentPathRef.current) return;
    const canvas = canvasRef.current;
     if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const coords = getCorrectedCoords(event);
    if (!coords) return;

    currentPathRef.current.points.push(coords);
    
    // For smoother drawing, redraw only the last segment or just append
    ctx.beginPath();
    ctx.strokeStyle = currentPathRef.current.color;
    ctx.lineWidth = currentPathRef.current.lineWidth;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    
    const points = currentPathRef.current.points;
    if (points.length > 1) {
        ctx.moveTo(points[points.length - 2].x, points[points.length - 2].y);
        ctx.lineTo(points[points.length - 1].x, points[points.length - 1].y);
        ctx.stroke();
    } else if (points.length === 1) { // Draw a dot for a single click
        ctx.fillStyle = currentPathRef.current.color;
        ctx.arc(points[0].x, points[0].y, currentPathRef.current.lineWidth / 2, 0, Math.PI * 2);
        ctx.fill();
    }

  }, [isDrawing, interactiveSegmentsEnabled, getCorrectedCoords]);

  const stopDrawing = useCallback(() => {
    if (isDrawing) {
        setIsDrawing(false);
        currentPathRef.current = null;
        // Optional: Could optimize by not calling full redraw if not necessary, but for consistency:
        const canvas = canvasRef.current;
        if (canvas) {
            const ctx = canvas.getContext('2d');
            if (ctx) redrawAllPaths(ctx);
        }
    }
  }, [isDrawing, redrawAllPaths]);

  const handleClearCanvas = useCallback(() => {
    setPaths([]); 
    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext('2d');
      if (ctx) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
      }
    }
  }, []);


  const renderLine = (line: string, lineIndex: number) => {
    const matchedSegment = interactiveSegmentsEnabled && interactiveSegments?.find(segment => segment.matcher.test(line));
    const highlightedLineHtml = highlightPythonCode(line);

    const lineStyle: React.CSSProperties = {};
    let lineClassName = "py-0.5 px-2 -mx-2 transition-colors duration-150"; // Base styling for padding

    if (!interactiveSegmentsEnabled) { // Drawing mode
      lineStyle.pointerEvents = 'none';
      // No zIndex needed for line if canvas is higher
    } else { // Interactive or text selection mode
      if (matchedSegment && onSelectCodeSegment) {
        lineClassName += " cursor-pointer hover:bg-sky-700/30 rounded relative z-10";
      }
      // Default: text is selectable
    }
    
    return (
      <div
        key={lineIndex}
        className={lineClassName}
        style={lineStyle}
        onClick={matchedSegment && onSelectCodeSegment && interactiveSegmentsEnabled ? () => onSelectCodeSegment(matchedSegment) : undefined}
        title={matchedSegment && interactiveSegmentsEnabled ? `Clic para ver: ${matchedSegment.label}` : undefined}
        dangerouslySetInnerHTML={{ __html: highlightedLineHtml || '&nbsp;' }}
      />
    );
  };
  
  return (
    <div className="bg-slate-950 rounded-lg shadow-inner overflow-hidden">
      <div className="px-4 py-2 bg-slate-800/50 border-b border-slate-700 flex justify-between items-center">
        <span className="text-xs text-slate-400 font-mono uppercase">{language}</span>
        {interactiveSegmentsEnabled && interactiveSegments && interactiveSegments.length > 0 && (
           <span className="text-xs text-sky-400 font-mono">Explicaciones Interactivas: Pase el cursor y haga clic.</span>
        )}
         {!interactiveSegmentsEnabled && (
           <span className="text-xs text-yellow-400 font-mono">Modo Dibujo: ¡Garabatea sobre el código!</span>
        )}
      </div>

      {!interactiveSegmentsEnabled && (
        <DrawingControls 
          selectedColor={drawingColor}
          onColorChange={setDrawingColor}
          onClear={handleClearCanvas}
        />
      )}

      <div className="relative">
        <pre 
          ref={preRef} 
          className="p-4 text-sm text-slate-200 overflow-auto whitespace-pre font-mono" // Changed overflow-x-auto to overflow-auto
          style={{ WebkitOverflowScrolling: 'touch' }}
        >
          <code className="block min-w-max"> 
            {lines.map((line, index) => renderLine(line, index))}
          </code>
        </pre>
        <canvas
          ref={canvasRef}
          onMouseDown={startDrawing}
          onMouseMove={draw}
          onMouseUp={stopDrawing}
          onMouseOut={stopDrawing}
          className="absolute top-0 left-0 cursor-crosshair"
          style={{ 
            pointerEvents: interactiveSegmentsEnabled ? 'none' : 'auto',
            zIndex: interactiveSegmentsEnabled ? 0 : 20 
          }}
        />
      </div>
    </div>
  );
};

export default CodeBlock;
