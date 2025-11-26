import React from 'react';
import { SPRINT_PLAN } from '../constants';
import { CheckCircle2, Calendar } from 'lucide-react';

export const SprintMap: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-xl p-8 text-white shadow-lg">
        <div className="flex items-center gap-3 mb-4">
          <Calendar className="text-red-500" size={32} />
          <h2 className="text-3xl font-bold">The 14-Day Sprint</h2>
        </div>
        <p className="text-slate-300 max-w-2xl">
          Don't just read the plan. Execute it. This is your battle rhythm for the next two weeks. 
          If you don't see a 20% increase in postpaid sales, you are doing it wrong.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
        {SPRINT_PLAN.map((day, idx) => (
          <div key={idx} className="bg-white rounded-lg border border-slate-200 overflow-hidden flex flex-col shadow-sm hover:shadow-md transition-all">
            <div className="bg-slate-50 p-4 border-b border-slate-200">
              <span className="text-xs font-bold text-red-600 uppercase tracking-wider block mb-1">{day.day}</span>
              <h3 className="font-bold text-slate-800 leading-tight">{day.title}</h3>
            </div>
            <div className="p-4 flex-1">
              <ul className="space-y-3">
                {day.tasks.map((task, taskIdx) => (
                  <li key={taskIdx} className="flex items-start gap-2 text-sm text-slate-600">
                    <CheckCircle2 size={16} className="text-green-500 shrink-0 mt-0.5" />
                    <span>{task}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
