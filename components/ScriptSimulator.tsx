import React, { useState } from 'react';
import { SCRIPTS } from '../constants';
import { MessageSquare, ThumbsUp, ChevronRight, RefreshCcw, Zap } from 'lucide-react';

export const ScriptSimulator: React.FC = () => {
  const [activeScript, setActiveScript] = useState<string | null>(null);
  const [revealed, setRevealed] = useState(false);

  const handleSelect = (id: string) => {
    setActiveScript(id);
    setRevealed(false);
  };

  const currentScenario = SCRIPTS.find(s => s.id === activeScript);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-[600px]">
      {/* List of Scenarios */}
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden flex flex-col">
        <div className="p-4 bg-slate-50 border-b border-slate-200">
          <h3 className="font-bold text-slate-800">Combat Scenarios</h3>
          <p className="text-xs text-slate-500">Select an objection to practice</p>
        </div>
        <div className="overflow-y-auto flex-1 p-2 space-y-2">
          {SCRIPTS.map((script) => (
            <button
              key={script.id}
              onClick={() => handleSelect(script.id)}
              className={`w-full text-left p-3 rounded-lg text-sm transition-all flex justify-between items-center ${
                activeScript === script.id 
                  ? 'bg-red-50 text-red-700 border border-red-200' 
                  : 'hover:bg-slate-50 text-slate-600 border border-transparent'
              }`}
            >
              <span>{script.title}</span>
              <ChevronRight size={16} className={activeScript === script.id ? 'opacity-100' : 'opacity-0'} />
            </button>
          ))}
        </div>
      </div>

      {/* Roleplay Area */}
      <div className="lg:col-span-2 bg-slate-900 rounded-xl shadow-xl flex flex-col relative overflow-hidden">
        {!currentScenario ? (
          <div className="flex-1 flex flex-col items-center justify-center text-slate-500 p-8 text-center">
            <MessageSquare size={48} className="mb-4 opacity-50" />
            <p className="text-lg">Select a scenario to enter the dojo.</p>
            <p className="text-sm opacity-60">Practice your rebuttals before the customer walks in.</p>
          </div>
        ) : (
          <div className="flex-1 flex flex-col p-6 sm:p-8 overflow-y-auto">
            <div className="mb-8">
              <span className="text-xs font-bold text-red-400 uppercase tracking-widest mb-2 block">Customer Says</span>
              <div className="bg-slate-800 text-white p-6 rounded-2xl rounded-tl-none inline-block max-w-[90%] shadow-lg border border-slate-700">
                <p className="text-lg md:text-xl font-medium">"{currentScenario.customerSay}"</p>
              </div>
            </div>

            <div className="flex-1 flex flex-col items-end">
              <span className="text-xs font-bold text-green-400 uppercase tracking-widest mb-2 block text-right">You Say (The Ruthless Rebuttal)</span>
              
              {!revealed ? (
                <button 
                  onClick={() => setRevealed(true)}
                  className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-xl font-bold shadow-lg shadow-red-900/50 transition-transform active:scale-95 flex items-center gap-2"
                >
                  <ThumbsUp size={20} />
                  Reveal Winning Script
                </button>
              ) : (
                <div className="bg-gradient-to-br from-green-900 to-slate-800 text-green-50 p-6 rounded-2xl rounded-tr-none max-w-[90%] shadow-lg border border-green-800 animate-in fade-in slide-in-from-bottom-4 duration-300">
                  <p className="text-lg md:text-xl font-medium leading-relaxed">"{currentScenario.yourRebuttal}"</p>
                  <div className="mt-4 pt-4 border-t border-green-800/50 flex items-center gap-2 text-sm text-green-300 font-mono">
                    <Zap size={14} />
                    Technique: {currentScenario.technique}
                  </div>
                </div>
              )}
            </div>
            
            {revealed && (
              <div className="mt-8 flex justify-center">
                <button 
                  onClick={() => { setRevealed(false); }}
                  className="text-slate-400 hover:text-white flex items-center gap-2 text-sm transition-colors"
                >
                  <RefreshCcw size={14} />
                  Reset Scenario
                </button>
              </div>
            )}
          </div>
        )}
        
        {/* Decorative Grid Background */}
        <div className="absolute inset-0 pointer-events-none opacity-5 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
      </div>
    </div>
  );
};