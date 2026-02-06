import { useState } from "react";
import { MapPin, Send, Locate, User, Phone, Users } from "lucide-react";

export default function RescueForm() {
  const [form, setForm] = useState({ name: "", phone: "", people: "1", lat: "", lng: "" });
  const [loading, setLoading] = useState(false);

  const getGPS = () => {
    setLoading(true);
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition((pos) => {
        setForm({ 
          ...form, 
          lat: pos.coords.latitude.toFixed(6), 
          lng: pos.coords.longitude.toFixed(6) 
        });
        setLoading(false);
      }, (error) => {
        alert("Error getting location. Please allow GPS access.");
        setLoading(false);
      });
    }
  };

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.lat) {
      alert("Please attach your GPS location so rescuers can find you.");
      return;
    }
    const existing = JSON.parse(localStorage.getItem("requests") || "[]");
    localStorage.setItem("requests", JSON.stringify([...existing, { ...form, id: Date.now() }]));
    alert("SOS Request Sent. Please stay where you are and keep your phone charged.");
  };

  return (
    <div className="max-w-md mx-auto py-4">
      <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
        <h1 className="text-2xl font-bold text-red-600 flex items-center gap-2 mb-2">
          <MapPin className="animate-bounce" /> Request Rescue
        </h1>
        <p className="text-slate-500 text-sm mb-6">Your information will be shared with official emergency response teams only.</p>
        
        <form onSubmit={submit} className="space-y-4">
          <div className="space-y-1">
            <label className="text-xs font-bold text-slate-700 uppercase ml-1">Full Name</label>
            <div className="relative">
              <User className="absolute left-3 top-3 h-5 w-5 text-slate-400" />
              <input placeholder="Enter your name" required className="w-full pl-10 p-3 border rounded-xl bg-slate-50 focus:ring-2 focus:ring-red-500 outline-none transition-all" onChange={e => setForm({...form, name: e.target.value})} />
            </div>
          </div>

          <div className="space-y-1">
            <label className="text-xs font-bold text-slate-700 uppercase ml-1">Phone Number</label>
            <div className="relative">
              <Phone className="absolute left-3 top-3 h-5 w-5 text-slate-400" />
              <input placeholder="Primary contact number" required type="tel" className="w-full pl-10 p-3 border rounded-xl bg-slate-50 focus:ring-2 focus:ring-red-500 outline-none" onChange={e => setForm({...form, phone: e.target.value})} />
            </div>
          </div>

          <div className="bg-red-50 p-4 rounded-xl border border-dashed border-red-200">
            <p className="text-xs font-bold text-red-700 mb-2 uppercase text-center">Location Data Required</p>
            <button type="button" onClick={getGPS} className="w-full flex items-center justify-center gap-2 bg-white text-red-600 border border-red-200 p-3 rounded-lg font-bold hover:bg-red-600 hover:text-white transition-all">
              <Locate size={18}/> {loading ? "Finding Satellites..." : "Attach My GPS Coordinates"}
            </button>
            {form.lat && (
              <div className="mt-3 text-center">
                <span className="text-[10px] bg-green-100 text-green-700 px-2 py-1 rounded-full font-mono">
                  LAT: {form.lat} | LNG: {form.lng}
                </span>
              </div>
            )}
          </div>

          <button type="submit" className="w-full bg-red-600 text-white p-4 rounded-xl font-bold shadow-lg shadow-red-200 flex items-center justify-center gap-2 hover:bg-red-700 active:scale-95 transition-all">
            <Send size={18}/> Send SOS Signal
          </button>
        </form>
      </div>
    </div>
  );
}
