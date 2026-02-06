import { useState } from "react";
import { Shield, Lock, MapPin, Phone, User, CheckCircle } from "lucide-react";

export default function AdminView() {
  const [auth, setAuth] = useState(false);
  const [pin, setPin] = useState("");
  const requests = JSON.parse(localStorage.getItem("requests") || "[]");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (pin === "1234") {
      setAuth(true);
    } else {
      alert("Unauthorized Access: Incorrect PIN");
    }
  };

  if (!auth) {
    return (
      <div className="max-w-xs mx-auto py-20 text-center">
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
          <Lock className="h-12 w-12 text-slate-300 mx-auto mb-4" />
          <h1 className="font-bold text-xl mb-4 text-slate-800">Rescuer Login</h1>
          <form onSubmit={handleLogin} className="space-y-4">
            <input 
              type="password" 
              placeholder="Enter Access PIN" 
              className="w-full p-3 border rounded-xl text-center font-mono tracking-widest outline-none focus:ring-2 focus:ring-blue-500"
              onChange={(e) => setPin(e.target.value)}
            />
            <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded-xl font-bold shadow-lg shadow-blue-200">
              Access Dashboard
            </button>
          </form>
          <p className="text-[10px] text-slate-400 mt-6 uppercase tracking-widest font-bold">Demo PIN: 1234</p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6 py-4">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold flex items-center gap-2">
          <Shield className="text-blue-600" /> Active Rescue Queue
        </h1>
        <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-bold">
          {requests.length} Requests
        </span>
      </div>

      {requests.length === 0 ? (
        <div className="text-center py-20 bg-white rounded-2xl border border-dashed">
          <CheckCircle className="h-12 w-12 text-green-200 mx-auto mb-2" />
          <p className="text-slate-400 font-medium">No active SOS signals at this time.</p>
        </div>
      ) : (
        <div className="grid gap-4">
          {requests.reverse().map((r: any) => (
            <div key={r.id} className="p-5 bg-white border border-slate-100 rounded-2xl shadow-sm hover:border-blue-300 transition-colors">
              <div className="flex justify-between items-start mb-3">
                <div className="flex items-center gap-2">
                  <User className="h-4 w-4 text-slate-400" />
                  <span className="font-bold text-slate-900">{r.name}</span>
                </div>
                <span className="text-[10px] bg-slate-100 text-slate-500 px-2 py-1 rounded font-mono italic">
                  ID: {String(r.id).slice(-4)}
                </span>
              </div>
              
              <div className="grid grid-cols-1 gap-2 mb-4">
                <div className="flex items-center gap-2 text-sm text-blue-600 bg-blue-50 p-2 rounded-lg font-mono">
                  <MapPin size={14} /> {r.lat}, {r.lng}
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-600 p-2">
                  <Phone size={14} /> {r.phone}
                </div>
              </div>
              
              <button className="w-full py-2 bg-slate-900 text-white text-xs font-bold rounded-lg hover:bg-blue-600 transition-all">
                Mark as Rescued
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
