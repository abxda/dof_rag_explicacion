
import React from 'react';
import { CloseIcon } from './icons';
import { marked } from 'marked'; // Import marked

interface ConceptModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  content: string; // Changed from children to content, expects raw Markdown string
}

const ConceptModal: React.FC<ConceptModalProps> = ({ isOpen, onClose, title, content }) => {
  if (!isOpen) return null;

  // Parse Markdown content to HTML
  // Marked's parse function is synchronous by default.
  // For async behavior (e.g., with extensions), you'd use marked.parse(content, callback) or await marked.parse(content)
  const htmlContent = marked.parse(content) as string; // Type assertion to string

  return (
    <div 
      className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 z-50 transition-opacity duration-300 animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="bg-slate-800 p-6 md:p-8 rounded-xl shadow-2xl w-full max-w-3xl max-h-[90vh] overflow-y-auto relative transform transition-all duration-300 animate-scaleUp"
        onClick={(e) => e.stopPropagation()} // Prevent click inside modal from closing it
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-sky-400 transition-colors p-1 rounded-full hover:bg-slate-700"
          aria-label="Cerrar modal"
        >
          <CloseIcon className="w-6 h-6" />
        </button>
        <h3 className="text-2xl font-semibold text-sky-400 mb-6 pr-8">{title}</h3>
        {/* Using prose for Tailwind's typography styling, and markdown-content for more specific styles if needed */}
        <div 
          className="prose prose-sm prose-invert max-w-none markdown-content"
          dangerouslySetInnerHTML={{ __html: htmlContent }} 
        />
         <button
            onClick={onClose}
            className="mt-8 bg-sky-500 hover:bg-sky-600 text-white font-medium py-2 px-4 rounded-md transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-opacity-75"
          >
            Entendido
          </button>
      </div>
    </div>
  );
};

export default ConceptModal;