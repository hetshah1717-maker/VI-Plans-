import React, { useState } from 'react';
import { TACTICS } from '../constants';
import { Category, Tactic } from '../types';
import { Brain, Map, Briefcase, Zap, Filter, Users, MessageCircle, ShieldAlert, FileText, Moon } from 'lucide-react';

const iconMap: Record<string, any> = {
  brain: Brain,
  map: Map,
  briefcase: Briefcase,
  zap: Zap,
  users: Users,
  'message-circle': MessageCircle,
  'shield-alert': ShieldAlert,
  'file-text': FileText,
  moon: Moon,
  calculator: Filter // Fallback
};

export const TacticsDeck: React.FC = () => {
  const [filter, setFilter] = useState<Category | 'All'>('All');

  const filteredTactics = filter === 'All' 
    ? TACTICS 
    : TACTICS.filter(t => t.category === filter);

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <h2 className="text-2xl font-bold text-slate-800">Operational Tactics</h2>
        <div className="flex flex-wrap gap-2">
          {['All', ...Object.values(Category)].map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat as Category | 'All')}
              className={`px-3 py-1.5 text-sm rounded-full transition-colors ${
                filter === cat 
                  ? 'bg-red-600 text-white shadow-md' 
                  : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredTactics.map((tactic) => {
          const Icon = iconMap[tactic.icon] || Zap;
          return (
            <div key={tactic.id} className="bg-white rounded-xl shadow-sm border border-slate-200 hover:shadow-md transition-shadow flex flex-col h-full overflow-hidden">
              <div className="p-5 flex-1">
                <div className="flex justify-between items-start mb-4">
                  <div className={`p-3 rounded-lg ${
                    tactic.category === Category.PSYCHOLOGY ? 'bg-purple-100 text-purple-600' :
                    tactic.category === Category.DIGITAL ? 'bg-blue-100 text-blue-600' :
                    'bg-red-100 text-red-600'
                  }`}>
                    <Icon size={24} />
                  </div>
                  <span className="text-[10px] uppercase font-bold tracking-wider text-slate-400 border border-slate-100 px-2 py-1 rounded-md">
                    {tactic.category}
                  </span>
                </div>
                
                <h3 className="font-bold text-lg text-slate-900 mb-2">{tactic.title}</h3>
                <p className="text-sm text-slate-600 mb-4 leading-relaxed">{tactic.description}</p>
                
                <div className="bg-slate-50 rounded-lg p-3">
                  <h4 className="text-xs font-bold text-slate-500 uppercase mb-2">Execution Steps</h4>
                  <ul className="space-y-2">
                    {tactic.actionPoints.map((point, idx) => (
                      <li key={idx} className="text-xs text-slate-700 flex items-start">
                        <span className="mr-2 text-red-500">•</span>
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
