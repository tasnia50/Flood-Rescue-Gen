import { Mail, Facebook, Instagram, ShieldCheck, Github, Globe } from "lucide-react";

export default function About() {
  return (
    <div className="max-w-md mx-auto py-4 space-y-8">
      <div className="text-center animate-in fade-in duration-700">
        <div className="inline-block p-4 bg-blue-100 rounded-full mb-4">
          <ShieldCheck className="h-12 w-12 text-blue-600" />
        </div>
        <h1 className="text-3xl font-bold text-slate-900">Flood Rescue Gen</h1>
        <p className="text-slate-500 font-medium">Empowering Communities Through Tech</p>
      </div>

      <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm space-y-4">
        <h2 className="font-bold text-lg text-slate-800">Our Mission</h2>
        <p className="text-slate-600 leading-relaxed text-sm">
          Flood Rescue Gen was developed to address the critical need for coordinated 
          emergency communication during natural disasters. By integrating 
          <strong> real-time GPS tracking</strong> and <strong>AI-structured safety protocols</strong>, 
          this platform serves as a bridge between victims and first responders.
        </p>
        <p className="text-slate-600 leading-relaxed text-sm">
          This project is a demonstration of how modern web frameworks like <strong>React</strong> and 
          <strong> TypeScript</strong> can be applied to solve urgent humanitarian challenges.
        </p>
      </div>

      <div className="space-y-3">
        <h2 className="font-bold text-sm text-slate-400 uppercase tracking-widest ml-1">Connect with the Project</h2>
        
        <div className="grid grid-cols-1 gap-3">
          <a href="mailto:tasnia.tanha50@gmail.com" className="flex items-center justify-between p-4 bg-white rounded-xl border border-slate-100 hover:border-blue-500 transition-all group">
            <div className="flex items-center gap-3">
              <Mail className="text-red-500" size={20} />
              <span className="text-sm font-semibold text-slate-700">Email Developer</span>
            </div>
            <span className="text-xs text-slate-400 group-hover:text-blue-500 font-bold">SEND →</span>
          </a>

          <div className="flex items-center gap-3 p-4 bg-white rounded-xl border border-slate-100">
            <Globe className="text-blue-600" size={20} />
            <span className="text-sm font-semibold text-slate-700">Version 1.0.0 (2026)</span>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="flex items-center gap-2 p-3 bg-slate-50 rounded-xl border border-slate-100">
              <Facebook className="text-blue-700" size={16} />
              <span className="text-xs font-bold text-slate-600">Facebook</span>
            </div>
            <div className="flex items-center gap-2 p-3 bg-slate-50 rounded-xl border border-slate-100">
              <Instagram className="text-pink-500" size={16} />
              <span className="text-xs font-bold text-slate-600">Instagram</span>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center pt-4">
        <p className="text-[10px] text-slate-400 font-bold uppercase tracking-tighter">
          Designed & Coded by Tasnia Tanha
        </p>
      </div>
    </div>
  );
}
