
import React from 'react';
import { ProcessedScriptData } from '../types';

interface SidebarProps {
  scripts: ProcessedScriptData[];
  selectedScriptId: string | null;
  onSelectScript: (id: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ scripts, selectedScriptId, onSelectScript }) => {
  return (
    <aside className="w-64 md:w-72 bg-slate-950 p-5 border-r border-slate-700 shadow-2xl overflow-y-auto">
      <h2 className="text-2xl font-semibold text-sky-400 mb-6 border-b border-sky-500/30 pb-3">
        Scripts del Proyecto
      </h2>
      <nav>
        <ul>
          {scripts.map((script) => (
            <li key={script.id} className="mb-2">
              <button
                onClick={() => onSelectScript(script.id)}
                className={`
                  w-full text-left px-4 py-3 rounded-md text-sm font-medium transition-all duration-150 ease-in-out
                  focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-opacity-75
                  ${
                    selectedScriptId === script.id
                      ? 'bg-sky-500 text-white shadow-md transform scale-105'
                      : 'text-slate-300 hover:bg-slate-700/50 hover:text-sky-300'
                  }
                `}
              >
                {script.title}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
