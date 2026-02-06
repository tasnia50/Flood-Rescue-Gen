import { AlertTriangle, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";

export default function Index() {
  const alerts = [
    {
      level: "danger",
      title: "Active Flood Warning",
      location: "River Basin Low-Lying Areas",
      desc: "Flash flooding imminent. Residents in flood-prone zones should move to high ground."
    },
    {
      level: "warning",
      title: "Heavy Rainfall Forecast",
      location: "Regional Districts",
      desc: "Expected rainfall of 100mm+ in the next 12 hours. Stay alert for official updates."
    }
  ];

  return (
    <div className="space-y-6">
      <div className="bg-gradient-to-br from-blue-700 to-blue-900 rounded-2xl p-8 text-white shadow-xl">
        <h1 className="text-3xl font-bold mb-2 tracking-tight">Emergency Dashboard</h1>
        <p className="text-blue-100 mb-6 text-sm">Real-time flood monitoring and rescue coordination.</p>
        <div className="flex flex-wrap gap-4">
          <Link to="/rescue" className="bg-red-500 hover:bg-red-600 px-6 py-3 rounded-xl font-bold transition-all shadow-lg shadow-red-900/20">Request Rescue</Link>
          <Link to="/advisor" className="bg-white/10 hover:bg-white/20 px-6 py-3 rounded-xl font-bold backdrop-blur-sm transition-all">Ask AI Safety</Link>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-bold flex items-center gap-2">
          <span className="flex h-3 w-3 rounded-full bg-red-500 animate-pulse"></span>
          Live Safety Alerts
        </h2>
        {alerts.map((alert, i) => (
          <div key={i} className={`p-5 rounded-xl border-l-4 shadow-sm bg-white ${alert.level === 'danger' ? 'border-red-500' : 'border-yellow-500'}`}>
            <div className="flex justify-between items-start mb-1">
              <h3 className="font-bold text-slate-900">{alert.title}</h3>
              <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${alert.level === 'danger' ? 'bg-red-100 text-red-700' : 'bg-yellow-100 text-yellow-700'}`}>
                {alert.level.toUpperCase()}
              </span>
            </div>
            <p className="text-xs font-semibold text-slate-500 mb-2">{alert.location}</p>
            <p className="text-sm text-slate-600 leading-relaxed">{alert.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
