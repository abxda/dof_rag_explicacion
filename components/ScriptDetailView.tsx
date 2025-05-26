
import React from 'react';
import { ProcessedScriptData, ScriptConcept, InteractiveCodeSegment } from '../types';
import CodeBlock from './CodeBlock';
import { ToggleLeftIcon, ToggleRightIcon } from './icons'; // Assuming these icons exist

interface ScriptDetailViewProps {
  script: ProcessedScriptData;
  onSelectConcept: (concept: ScriptConcept) => void;
  onSelectCodeSegment: (segment: InteractiveCodeSegment) => void;
  interactiveSegmentsEnabled: boolean;
  onToggleInteractiveSegments: () => void;
}

const ScriptDetailSection: React.FC<{ title: string; children: React.ReactNode; actions?: React.ReactNode }> = ({ title, children, actions }) => (
  <section className="mb-8 p-6 bg-slate-800 rounded-lg shadow-lg hover:shadow-sky-500/20 transition-shadow duration-300">
    <div className="flex justify-between items-center mb-4 border-b border-sky-500/30 pb-2">
      <h3 className="text-2xl font-semibold text-sky-400">{title}</h3>
      {actions && <div className="flex items-center space-x-2">{actions}</div>}
    </div>
    <div className="text-slate-300 leading-relaxed prose prose-sm prose-invert max-w-none">{children}</div>
  </section>
);

const ScriptDetailView: React.FC<ScriptDetailViewProps> = ({ 
  script, 
  onSelectConcept, 
  onSelectCodeSegment,
  interactiveSegmentsEnabled,
  onToggleInteractiveSegments 
}) => {
  const CodeBlockActions = (
    <div className="flex items-center space-x-3">
        <span className="text-xs text-slate-400">
          {interactiveSegmentsEnabled ? "Explicaciones Interactivas:" : "Modo Dibujo:"}
        </span>
        <button
            onClick={onToggleInteractiveSegments}
            className={`p-1 rounded-full transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-800 ${
              interactiveSegmentsEnabled
                ? 'bg-sky-500 hover:bg-sky-600 focus:ring-sky-400'
                : 'bg-slate-600 hover:bg-slate-500 focus:ring-slate-400'
            }`}
            aria-label={interactiveSegmentsEnabled ? "Desactivar explicaciones interactivas y activar modo dibujo" : "Activar explicaciones interactivas y desactivar modo dibujo"}
          >
            {interactiveSegmentsEnabled ? <ToggleRightIcon className="w-8 h-4 text-white" /> : <ToggleLeftIcon className="w-8 h-4 text-white" />}
          </button>
    </div>
  );

  return (
    <div className="animate-fadeIn">
      <header className="mb-8 p-6 bg-gradient-to-r from-sky-600 to-cyan-500 rounded-lg shadow-xl">
        <h2 className="text-4xl font-bold text-white mb-2">{script.title}</h2>
      </header>

      <ScriptDetailSection title="Propósito General">
        <p className="whitespace-pre-wrap">{script.generalPurpose}</p>
      </ScriptDetailSection>

      <ScriptDetailSection title="Explicación Detallada">
        <p className="whitespace-pre-wrap">{script.detailedExplanation}</p>
      </ScriptDetailSection>

      <ScriptDetailSection title="Conceptos Clave a Desarrollar">
        <ul className="list-none p-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {script.keyConcepts.map((concept) => (
            <li key={concept.id} className="m-0 p-0">
              <button
                onClick={() => onSelectConcept(concept)}
                className="w-full text-left bg-slate-700/50 hover:bg-sky-600/70 text-sky-300 hover:text-white p-3 rounded-md transition-all duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-sky-500"
              >
                {concept.name}
              </button>
            </li>
          ))}
        </ul>
         <p className="mt-4 text-xs text-slate-400">Haz clic en un concepto para ver más detalles.</p>
      </ScriptDetailSection>

      <ScriptDetailSection title="Código Fuente" actions={CodeBlockActions}>
        <CodeBlock 
          code={script.sourceCode} 
          language="python"
          interactiveSegments={script.interactiveSegments}
          onSelectCodeSegment={onSelectCodeSegment}
          interactiveSegmentsEnabled={interactiveSegmentsEnabled}
        />
      </ScriptDetailSection>
    </div>
  );
};

export default ScriptDetailView;
