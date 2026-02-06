import { MapPin, Home, Navigation, Info } from "lucide-react";

const SHELTERS = [
  {
    name: "Central Community School",
    address: "123 Safety Road, North Sector",
    status: "Open",
    capacity: "85%",
    type: "Primary Shelter"
  },
  {
    name: "Red Cross High Ground",
    address: "Elevation Point, East Hills",
    status: "Limited Space",
    capacity: "98%",
    type: "Medical Support Available"
  },
  {
    name: "St. Jude’s Emergency Hall",
    address: "45 Church Square",
    status: "Full",
    capacity: "100%",
    type: "Primary Shelter"
  }
];

export default function SafeZones() {
  return (
    <div className="max-w-md mx-auto py-4 space-y-6">
      <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
        <h1 className="text-2xl font-bold text-green-600 flex items-center gap-2 mb-2">
          <Home className="text-green-500" /> Safe Zones
        </h1>
        <p className="text-slate-500 text-sm mb-6">Verified high-ground locations and emergency shelters in your region.</p>

        <div className="space-y-4">
          {SHELTERS.map((shelter, i) => (
            <div key={i} className="p-4 rounded-xl border border-slate-100 bg-slate-50 hover:border-green-300 transition-colors">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-bold text-slate-900 text-sm leading-tight">{shelter.name}</h3>
                <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                  shelter.status === 'Open' ? 'bg-green-100 text-green-700' : 
                  shelter.status === 'Full' ? 'bg-red-100 text-red-700' : 'bg-yellow-100 text-yellow-700'
                }`}>
                  {shelter.status}
                </span>
              </div>
              
              <div className="flex items-center gap-1.5 text-xs text-slate-500 mb-3">
                <MapPin size={12} />
                {shelter.address}
              </div>

              <div className="flex items-center justify-between pt-3 border-t border-slate-200">
                <div className="flex flex-col">
                  <span className="text-[10px] text-slate-400 uppercase font-bold tracking-wider">Capacity</span>
                  <div className="w-24 h-1.5 bg-slate-200 rounded-full mt-1 overflow-hidden">
                    <div 
                      className={`h-full rounded-full ${parseInt(shelter.capacity) > 90 ? 'bg-red-500' : 'bg-green-500'}`} 
                      style={{ width: shelter.capacity }}
                    ></div>
                  </div>
                </div>
                <button className="flex items-center gap-1 bg-white border border-slate-200 text-slate-700 px-3 py-1.5 rounded-lg text-xs font-bold hover:bg-slate-100 transition-all">
                  <Navigation size={12} /> Directions
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-amber-50 border border-amber-100 p-4 rounded-xl flex gap-3">
        <Info className="text-amber-600 shrink-0" size={20} />
        <p className="text-xs text-amber-800 leading-relaxed">
          <strong>Note:</strong> Always follow the instructions of local authorities while traveling. Shelter status is updated every 15 minutes.
        </p>
      </div>
    </div>
  );
            }
