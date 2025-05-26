
import React, { useState, useMemo } from 'react';
import { SCRIPTS_DATA } from './constants';
import { ProcessedScriptData, ScriptConcept, InteractiveCodeSegment } from './types';
import Sidebar from './components/Sidebar';
import ScriptDetailView from './components/ScriptDetailView';
import ConceptModal from './components/ConceptModal';

interface ModalContent {
  title: string;
  explanation: string; 
}

const App: React.FC = () => {
  const [selectedScriptId, setSelectedScriptId] = useState<string | null>(SCRIPTS_DATA[0]?.id || null);
  const [modalContent, setModalContent] = useState<ModalContent | null>(null);
  const [interactiveSegmentsEnabled, setInteractiveSegmentsEnabled] = useState<boolean>(true);

  const processedScripts: ProcessedScriptData[] = useMemo(() => SCRIPTS_DATA, []);

  const handleSelectScript = (id: string) => {
    setSelectedScriptId(id);
  };

  const handleSelectConcept = (concept: ScriptConcept) => {
    setModalContent({ title: concept.name, explanation: concept.explanation });
  };

  const handleSelectCodeSegment = (segment: InteractiveCodeSegment) => {
    if (interactiveSegmentsEnabled) {
      setModalContent({ title: segment.label, explanation: segment.explanation });
    }
  };

  const handleCloseModal = () => {
    setModalContent(null);
  };

  const toggleInteractiveSegments = () => {
    setInteractiveSegmentsEnabled(prev => !prev);
  };

  const currentScript = processedScripts.find(script => script.id === selectedScriptId);

  return (
    <div className="flex flex-col h-screen font-sans bg-slate-900 text-slate-100">
      <div className="flex flex-1 overflow-hidden">
        <Sidebar
          scripts={processedScripts}
          selectedScriptId={selectedScriptId}
          onSelectScript={handleSelectScript}
        />
        <main className="flex-1 p-6 md:p-10 overflow-y-auto bg-slate-800/50 shadow-lg">
          {currentScript ? (
            <ScriptDetailView 
              script={currentScript} 
              onSelectConcept={handleSelectConcept}
              onSelectCodeSegment={handleSelectCodeSegment}
              interactiveSegmentsEnabled={interactiveSegmentsEnabled}
              onToggleInteractiveSegments={toggleInteractiveSegments}
            />
          ) : (
            <div className="flex items-center justify-center h-full">
              <div className="text-center p-8 bg-slate-800 rounded-lg shadow-xl">
                <h1 className="text-3xl font-bold text-sky-400 mb-4">Bienvenido al Explicador de Scripts DOF</h1>
                <p className="text-slate-300 text-lg">
                  Selecciona un script de la barra lateral para ver su explicación detallada, conceptos clave y código fuente.
                </p>
                <p className="mt-6 text-sm text-slate-400">
                  Esta herramienta interactiva está diseñada para ayudarte a comprender cada paso del proyecto DOF Scraper y RAG.
                </p>
              </div>
            </div>
          )}
        </main>
      </div>
      {modalContent && (
        <ConceptModal
          isOpen={!!modalContent}
          onClose={handleCloseModal}
          title={modalContent.title}
          content={modalContent.explanation}
        />
      )}
      <footer className="bg-slate-950 text-center py-3 border-t border-slate-700 text-xs text-slate-400">
        <a href="https://abxda.medium.com/" target="_blank" rel="noopener noreferrer" className="hover:text-sky-400 transition-colors">
          @abxda
        </a>
        <span className="mx-1">x</span>
        <span>@gemini</span>
      </footer>
    </div>
  );
};

export default App;
