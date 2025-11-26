import React, { useState } from 'react';
import { Calculator } from './components/Calculator';
import { TacticsDeck } from './components/TacticsDeck';
import { ScriptSimulator } from './components/ScriptSimulator';
import { SprintMap } from './components/SprintMap';
import { LayoutDashboard, Target, MessageSquare, CalendarClock, TrendingUp, Menu, X } from 'lucide-react';

// Define views
type View = 'dashboard' | 'tactics' | 'scripts' | 'sprint';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<View>('dashboard');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const NavItem = ({ view, icon: Icon, label }: { view: View; icon: any; label: string }) => (
    <button
      onClick={() => {
        setCurrentView(view);
        setMobileMenuOpen(false);
      }}
      className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all font-medium ${
        currentView === view
          ? 'bg-red-600 text-white shadow-lg shadow-red-900/20'
          : 'text-slate-400 hover:text-white hover:bg-slate-800'
      }`}
    >
      <Icon size={20} />
      <span>{label}</span>
    </button>
  );

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col md:flex-row font-sans">
      
      {/* Sidebar Navigation */}
      <aside className={`fixed inset-y-0 left-0 z-50 w-64 bg-slate-900 text-white transform transition-transform duration-300 ease-in-out md:relative md:translate-x-0 ${mobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="p-6 border-b border-slate-800 flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-black tracking-tighter text-white">Vi <span className="text-red-500">DOMINATION</span></h1>
            <p className="text-xs text-slate-500 uppercase tracking-widest mt-1">Ahmedabad Unit</p>
          </div>
          <button onClick={() => setMobileMenuOpen(false)} className="md:hidden text-slate-400">
            <X size={24} />
          </button>
        </div>
        <nav className="p-4 space-y-2">
          <NavItem view="dashboard" icon={LayoutDashboard} label="War Room" />
          <NavItem view="tactics" icon={Target} label="Tactical Arsenal" />
          <NavItem view="scripts" icon={MessageSquare} label="Combat Scripts" />
          <NavItem view="sprint" icon={CalendarClock} label="14-Day Sprint" />
        </nav>
        <div className="absolute bottom-0 w-full p-6 bg-slate-800/50 backdrop-blur-sm border-t border-slate-800">
          <div className="flex items-center gap-3">
            <div className="bg-red-600 rounded-full p-2">
              <TrendingUp size={16} />
            </div>
            <div>
              <p className="text-xs text-slate-400">Target ARPU</p>
              <p className="font-bold text-white">₹450+</p>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 h-screen overflow-y-auto">
        {/* Mobile Header */}
        <header className="md:hidden bg-white border-b border-slate-200 p-4 flex justify-between items-center sticky top-0 z-40">
          <h2 className="font-bold text-slate-800">Vi Domination</h2>
          <button onClick={() => setMobileMenuOpen(true)} className="text-slate-600">
            <Menu size={24} />
          </button>
        </header>

        <div className="p-4 md:p-8 max-w-7xl mx-auto space-y-8 pb-20">
          
          {/* View: Dashboard */}
          {currentView === 'dashboard' && (
            <div className="space-y-8 animate-in fade-in duration-500">
              <div className="prose max-w-none">
                <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight">The Ruthless Battle Plan</h1>
                <p className="text-xl text-slate-600 max-w-3xl">
                  Ahmedabad is the capital of "Value for Money". You cannot win with generic features. 
                  You must sell financial logic, status, and reliability. This tool synthesizes the strategy 
                  to flip prepaid users to profitable postpaid subscribers.
                </p>
              </div>
              
              <Calculator />
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                  <h3 className="font-bold text-slate-800 mb-2">The Reality</h3>
                  <p className="text-sm text-slate-600">Prepaid dominates because Indians hate commitment. But postpaid users are <span className="font-bold text-red-600">3x more profitable</span> and have 60% lower churn.</p>
                </div>
                <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                  <h3 className="font-bold text-slate-800 mb-2">The Goal</h3>
                  <p className="text-sm text-slate-600">Stop being a shop owner. Become a <span className="font-bold text-red-600">Financial Consultant</span>. Show them the math, not the SIM card.</p>
                </div>
                <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                  <h3 className="font-bold text-slate-800 mb-2">The Strategy</h3>
                  <p className="text-sm text-slate-600">Attack on three fronts: <span className="font-bold text-slate-900">Psychology</span> (Control Paradox), <span className="font-bold text-slate-900">Digital</span> (Local SEO), and <span className="font-bold text-slate-900">Partnerships</span> (CAs/SMEs).</p>
                </div>
              </div>
            </div>
          )}

          {/* View: Tactics */}
          {currentView === 'tactics' && (
            <div className="animate-in slide-in-from-right-8 duration-500">
               <TacticsDeck />
            </div>
          )}

          {/* View: Scripts */}
          {currentView === 'scripts' && (
            <div className="animate-in slide-in-from-right-8 duration-500">
               <h2 className="text-3xl font-bold text-slate-900 mb-6">Combat Scripts (Dojo)</h2>
               <ScriptSimulator />
            </div>
          )}

          {/* View: Sprint */}
          {currentView === 'sprint' && (
            <div className="animate-in slide-in-from-right-8 duration-500">
               <SprintMap />
            </div>
          )}

        </div>
      </main>
    </div>
  );
};

export default App;
