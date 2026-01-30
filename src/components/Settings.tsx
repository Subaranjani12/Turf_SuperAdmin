import { useState } from "react";
import { Check, X, LogOut } from "lucide-react";
import { pendingTurfs } from "../data/dashboardData";

export default function Settings() {
  const [selectedTurf, setSelectedTurf] = useState<typeof pendingTurfs[0] | null>(null);

  return (
    <div className="bg-gray-100 p-1 min-h-screen rounded-xl -mt-3">
      <h1 className="font-semibold text-lg mb-4">Settings</h1>

      <div className="flex gap-6">
        {/* ================= LEFT PANEL ================= */}
        <div className="w-[360px] bg-white rounded-2xl p-4 flex flex-col justify-between" style={{ minHeight: "calc(100vh - 155px)" }}>
          <div>
            <h2 className="font-semibold mb-4">Approval Pending List</h2>

            <div className="space-y-3">
              {pendingTurfs.map((turf) => (
                <div
                  key={turf.id}
                  onClick={() => setSelectedTurf(turf)}
                  className={`flex items-center gap-3 p-3 rounded-xl border cursor-pointer
                  ${
                    selectedTurf?.id === turf.id
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
        <div className="flex-1 bg-white rounded-2xl p-8" style={{ minHeight: "calc(100vh - 155px)" }}>
          {!selectedTurf ? (
            <div className="h-full flex items-center justify-center text-gray-400 text-lg">
              Select a turf to see details
            </div>
          ) : (
            <>
              {/* Header */}
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-4">
                  <div className="w-23 h-23 rounded-full bg-gray-100" />

                  <div>
                    <div className="flex items-center gap-2">
                      <h2 className="text-lg font-semibold">
                        {selectedTurf.name}
                      </h2>
                      <Check className="text-green-500" size={20} />
                    </div>
                    <p className="text-sm text-gray-500">
                      {selectedTurf.date}
                    </p>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-10">
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
            <div className="border border-gray-200 rounded-2xl p-6 bg-white">
              <h3 className="font-semibold mb-6 text-gray-600">
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
            <div className="border border-gray-200 rounded-2xl p-6 bg-white">
              <h3 className="font-semibold mb-6 text-gray-600">Turf Photo</h3>

              <div className="grid grid-cols-3 gap-3 mb-8">
                {selectedTurf.photos.map((_, i) => (
                  <div
                    key={i}
                    className="h-24 rounded-xl bg-gray-200"
                  />
                ))}
              </div>

              <h4 className="font-semibold mb-3 text-gray-600">
                Secondary documents
              </h4>

              <div className="border border-gray-300 border-dashed rounded-xl p-4 flex items-center text-sm text-gray-400">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                </svg>
                Click To view
              </div>
            </div>
          </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

/* ================= DETAIL ================= */
function Detail({ label, value }: { label: string; value: string }) {
  return (
    <div className="mb-6">
      <p className="text-sm text-gray-500 mb-2">{label}</p>
      <p className="text-base text-gray-600 font-medium whitespace-pre-line">
        {value}
      </p>
    </div>
  );
}
