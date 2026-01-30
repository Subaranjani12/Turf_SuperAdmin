import { useState } from "react";
import { Search, IndianRupee, Users } from "lucide-react";
import { vendorList } from "../data/dashboardData";

export default function VendorList() {
  const [selectedVendorId, setSelectedVendorId] = useState<number | null>(null);
  const [search, setSearch] = useState("");

  const filteredVendors = vendorList.filter((vendor) =>
    vendor.name.toLowerCase().includes(search.toLowerCase())
  );

  const selectedVendor = vendorList.find(
    (vendor) => vendor.id === selectedVendorId
  );

  return (
    <div className="flex gap-8 bg-[#F5F6FA] p-0 min-h-screen">

      {/* ================= LEFT : VENDOR LIST ================= */}
      <div className="w-1/4 flex flex-col gap-4 overflow-y-auto">
        <div className="flex items-center justify-between -mt-4">
          <h2 className="font-bold text-lg">Vendor List</h2>

          <div className="relative w-[220px]">
            <Search
              size={16}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
            />
            <input
              type="text"
              placeholder="Search for a Vendor"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full h-9 pl-9 pr-3 rounded-md bg-[#f2f4f7] border border-gray-300 text-sm text-gray-700 placeholder-gray-500 outline-none focus:border-gray-400"
            />
          </div>
        </div>

        {filteredVendors.map((vendor) => {
          const isActive = vendor.id === selectedVendorId;

          return (
            <button
              key={vendor.id}
              onClick={() => setSelectedVendorId(vendor.id)}
              className={`flex items-center gap-3 p-3 rounded-md border text-left ${
                isActive
                  ? "bg-white border-gray-700 shadow"
                  : "bg-white border-transparent hover:bg-gray-50"
              }`}
            >
              <div className="w-10 h-10 rounded-full bg-gray-200" />

              <div className="flex flex-col">
                <span className="font-semibold text-sm">{vendor.name}</span>
                <span className="text-xs text-gray-500">{vendor.since}</span>
              </div>

              <span className="ml-auto text-xs text-gray-400">
                {vendor.phone}
              </span>
            </button>
          );
        })}
      </div>

      {/* ================= RIGHT : DETAILS ================= */}
      <div className="flex-1 bg-white rounded-2xl p-10">
        {!selectedVendor ? (
          <div className="h-full flex items-center justify-center text-gray-400 text-lg">
            Select a vendor to see details
          </div>
        ) : (
          <>
            {/* ===== PROFILE + STATS ===== */}
            <div className="flex justify-between items-start mb-12">
              <div className="flex items-center gap-5">
                <div className="w-16 h-16 rounded-full bg-gray-200" />
                <div>
                  <h3 className="text-xl font-bold">{selectedVendor.name}</h3>
                  <p className="text-gray-500 text-sm">
                    {selectedVendor.phone}
                  </p>
                </div>
              </div>

              {/* ===== STATS CARDS (MATCH IMAGE) ===== */}
              <div className="flex gap-6">
                {/* Revenue */}
                <div className="bg-[#f1f4f8] w-[260px] h-[130px] rounded-3xl p-6 flex flex-col gap-3">
                  <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                    <IndianRupee size={18} />
                  </div>
                  <p className="text-2xl font-bold">₹{selectedVendor.revenue.toLocaleString('en-IN')}</p>
                  <p className="text-sm text-gray-500">
                    Revenue by {selectedVendor.name}
                  </p>
                </div>

                {/* Active User */}
                <div className="bg-[#f1f4f8] w-[260px] h-[130px] rounded-3xl p-6 flex flex-col gap-3">
                  <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                    <Users size={18} />
                  </div>
                  <p className="text-2xl font-bold">{selectedVendor.activeUsers.toLocaleString('en-IN')}</p>
                  <p className="text-sm text-gray-500">
                    Active User
                  </p>
                </div>
              </div>
            </div>

            {/* ===== DIVIDER ===== */}
            <div className="flex items-center gap-6 mb-14">
              <div className="flex-1 border-t border-dashed" />
              <span className="font-medium text-gray-600">
                John’s Turf
              </span>
              <div className="flex-1 border-t border-dashed" />
            </div>

            {/* ===== TURF LIST ===== */}
            <div className="space-y-12">
              {[1, 2, 3].map((_, i) => (
                <div key={i} className="flex justify-between items-start">
                  <div className="flex gap-5">
                    <div className="w-16 h-16 rounded-full bg-gray-100" />

                    <div>
                      <div className="flex items-center gap-2">
                        <h4 className="font-semibold text-lg">Turf 1</h4>
                        {i < 2 ? (
                          <span className="w-5 h-5 bg-green-500 text-white rounded-full text-xs flex items-center justify-center">
                            ✓
                          </span>
                        ) : (
                          <span className="w-5 h-5 bg-orange-500 text-white rounded-full text-xs flex items-center justify-center">
                            !
                          </span>
                        )}
                      </div>

                      <p className="text-sm text-gray-500">
                        Since 12 Mar, 2024
                      </p>

                      <div className="flex gap-2 mt-3">
                        {["Football", "Cricket", "Basketball"].map((sport) => (
                          <span
                            key={sport}
                            className="px-3 py-1 text-xs rounded-full border text-gray-500"
                          >
                            {sport}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="text-right">
                    <p className="text-sm text-gray-500 mb-3">
                      Erode, Thindal
                    </p>

                    <div className="flex justify-end gap-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <span
                          key={star}
                          className={
                            i === 2
                              ? "text-gray-300 text-2xl"
                              : star <= 4
                              ? "text-yellow-400 text-2xl"
                              : "text-gray-300 text-2xl"
                          }
                        >
                          ★
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
