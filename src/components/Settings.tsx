import { useState } from "react";
import { Check, X, LogOut } from "lucide-react";
import { pendingTurfs } from "../data/dashboardData";

export default function Settings() {
  const [selectedTurf, setSelectedTurf] = useState(pendingTurfs[0]);

  return (
    <div className="bg-[#F5F6FA] min-h-screen p-1 -mt-2">
      <h1 className="font-semibold text-lg mb-3">Settings</h1>

      <div className="flex gap-6">
        {/* ================= LEFT PANEL ================= */}
        <div className="w-[360px] bg-white rounded-2xl p-4 flex flex-col justify-between">
          <div>
            <h2 className="font-semibold mb-4">Approval Pending List</h2>

            <div className="space-y-3">
              {pendingTurfs.map((turf) => (
                <div
                  key={turf.id}
                  onClick={() => setSelectedTurf(turf)}
                  className={`flex items-center gap-3 p-3 rounded-xl border cursor-pointer
                  ${
                    selectedTurf.id === turf.id
                      ? "border-gray-700"
                      : "border-gray-200"
                  }`}
                >
                  <div className="w-10 h-10 rounded-full bg-gray-100" />

                  <div className="flex-1">
                    <p className="font-semibold text-sm">{turf.name}</p>
                    <p className="text-xs text-gray-500">{turf.since}</p>
                  </div>

                  <p className="text-xs text-gray-500">{turf.location}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Logout */}
          <button className="flex items-center gap-2 text-red-500 text-sm mt-6">
            <LogOut size={16} />
            Log Out
          </button>
        </div>

        {/* ================= RIGHT PANEL ================= */}
        <div className="flex-1 bg-white rounded-2xl p-8">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-full bg-gray-100" />

              <div>
                <div className="flex items-center gap-2">
                  <h2 className="text-lg font-semibold">
                    {selectedTurf.name}
                  </h2>
                  <Check className="text-green-500" size={18} />
                </div>
                <p className="text-sm text-gray-500">
                  {selectedTurf.date}
                </p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3">
              <button className="w-10 h-10 rounded-lg bg-red-500 text-white flex items-center justify-center">
                <X size={18} />
              </button>
              <button className="w-10 h-10 rounded-lg bg-green-500 text-white flex items-center justify-center">
                <Check size={18} />
              </button>
            </div>
          </div>

          {/* ================= DETAILS ================= */}
          <div className="grid grid-cols-2 gap-6">
            {/* Business Details */}
            <div className="border rounded-xl p-6">
              <h3 className="font-semibold mb-4 text-sm">
                Business Details
              </h3>

              <Detail label="Owner Name" value={selectedTurf.ownerName} />
              <Detail label="Mobile Number" value={selectedTurf.mobile} />
              <Detail label="Location" value={selectedTurf.mapLink} />
              <Detail label="Business Mail" value={selectedTurf.email} />
              <Detail
                label="Business Address"
                value={selectedTurf.address}
              />
            </div>

            {/* Turf Photos */}
            <div className="border rounded-xl p-6">
              <h3 className="font-semibold mb-4 text-sm">Turf Photo</h3>

              <div className="grid grid-cols-3 gap-3 mb-4">
                {selectedTurf.photos.map((_, i) => (
                  <div
                    key={i}
                    className="h-24 rounded-lg bg-gray-100"
                  />
                ))}
              </div>

              <h4 className="text-sm font-semibold mb-2">
                Secondary documents
              </h4>

              <div className="border border-dashed rounded-lg p-4 text-xs text-gray-400">
                Click to view
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ================= DETAIL ================= */
function Detail({ label, value }: { label: string; value: string }) {
  return (
    <div className="mb-4">
      <p className="text-xs text-gray-500 mb-1">{label}</p>
      <p className="text-sm text-gray-900 whitespace-pre-line">
        {value}
      </p>
    </div>
  );
}
