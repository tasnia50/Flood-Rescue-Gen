import { useState } from "react";
import { MessageCircle, ShieldCheck, LifeBuoy, Zap, Droplets } from "lucide-react";

const SAFETY_DATA = {
  general: [
    "Move to the highest floor of the building immediately.",
    "Do not walk or drive through moving water.",
    "Keep your emergency kit and documents within reach."
  ],
  water: "Assume all floodwater is contaminated. Use only bottled or boiled water for drinking and hygiene.",
  electricity: "If your home is flooding, turn off the main power breaker only if you are standing on dry ground.",
  trapped: "If you are trapped in a building, stay on the roof. Do not hide in an attic where you could be trapped by rising water."
};

export default function SafetyAdvisor() {
  const [activeTab, setActiveTab] = useState("general");

  return (
    <div className="max-w-md mx-auto py-4 space-y-6">
      <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
        <h1 className="text-2xl font-bold text-blue-600 flex items-center gap-2 mb-2">
          <MessageCircle className="text-blue-500" /> AI Safety Advisor
        </h1>
        <p className="text-slate-500 text-sm mb-6">Structured guidance based on official emergency protocols.</p>

        <div className="grid grid-cols-2 gap-2 mb-6">
          <button onClick={() => setActiveTab("general")} className={`p-3 rounded-xl border text-xs font-bold transition-all flex flex-col items-center gap-2 ${activeTab === 'general' ? 'bg-blue-600 text-white border-blue-600 shadow-md' : 'bg-slate-50 text-slate-600'}`}>
            <LifeBuoy size={18} /> Basic Safety
          </button>
          <button onClick={() => setActiveTab("electricity")} className={`p-3 rounded-xl border text-xs font-bold transition-all flex flex-col items-center gap-2 ${activeTab === 'electricity' ? 'bg-yellow-500 text-white border-yellow-500 shadow-md' : 'bg-slate-50 text-slate-600'}`}>
            <Zap size={18} /> Electrical
          </button>
          <button onClick={() => setActiveTab("water")} className={`p-3 rounded-xl border text-xs font-bold transition-all flex flex-col items-center gap-2 ${activeTab === 'water' ? 'bg-cyan-500 text-white border-cyan-500 shadow-md' : 'bg-slate-50 text-slate-600'}`}>
            <Droplets size={18} /> Clean Water
          </button>
          <button onClick={() => setActiveTab("trapped")} className={`p-3 rounded-xl border text-xs font-bold transition-all flex flex-col items-center gap-2 ${activeTab === 'trapped' ? 'bg-red-600 text-white border-red-600 shadow-md' : 'bg-slate-50 text-slate-600'}`}>
            <ShieldCheck size={18} /> If Trapped
          </button>
        </div>

        <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200 min-h-[150px] animate-in fade-in slide-in-from-bottom-2">
          <h2 className="text-xs font-black uppercase text-slate-400 mb-3 tracking-widest">Protocol Instructions</h2>
          {Array.isArray(SAFETY_DATA[activeTab as keyof typeof SAFETY_DATA]) ? (
            <ul className="space-y-3">
              {(SAFETY_DATA.general).map((item, i) => (
                <li key={i} className="flex gap-2 text-sm text-slate-700 font-medium">
                  <span className="h-5 w-5 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-[10px] shrink-0 font-bold">{i+1}</span>
                  {item}
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-sm text-slate-700 leading-relaxed font-medium">
              {SAFETY_DATA[activeTab as keyof typeof SAFETY_DATA]}
            </p>
          )}
        </div>
      </div>
      
      <div className="bg-blue-50 border border-blue-100 p-4 rounded-xl">
        <p className="text-[10px] text-blue-700 text-center font-bold uppercase">Disclaimer: Information provided is for educational purposes during simulations.</p>
      </div>
    </div>
  );
            }
