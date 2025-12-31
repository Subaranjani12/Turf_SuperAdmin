import { useState } from "react";

type Vendor = {
  id: number;
  name: string;
  since: string;
  location: string;
};

const vendors: Vendor[] = Array(10)
  .fill(null)
  .map((_, i) => ({
    id: i + 1,
    name: `Vendor ${i + 1}`,
    since: "Since 12 Mar, 2024",
    location: "Erode, Thindal",
  }));

export default function VendorList() {
  const [selectedVendorId, setSelectedVendorId] = useState<number>(1);

  const selectedVendor = vendors.find((v) => v.id === selectedVendorId);

  return (
    <div className="flex gap-8 bg-gray-100 p-4 min-h-[600px] rounded-lg">
      {/* LEFT - Vendor List */}
      <div className="w-1/4 flex flex-col gap-4 -mt-9 -ml-4">
        <h2 className="font-bold mb-2">Vendor List</h2>

        {vendors.map((vendor) => {
          const isActive = vendor.id === selectedVendorId;

          return (
            <button
              key={vendor.id}
              onClick={() => setSelectedVendorId(vendor.id)}
              className={`flex items-center gap-3 p-3 rounded-md border ${
                isActive
                  ? "border-gray-700 bg-white shadow"
                  : "border-transparent bg-white hover:bg-gray-50"
              }`}
            >
              <div className="w-10 h-10 rounded-full bg-gray-200" />
              <div className="flex flex-col text-sm text-left">
                <span className="font-semibold">{vendor.name}</span>
                <span className="text-gray-500 text-xs">{vendor.since}</span>
              </div>
              <span className="ml-auto text-xs text-gray-400">{vendor.location}</span>
            </button>
          );
        })}
      </div>

      {/* RIGHT - Vendor Details */}
      <div className="flex-1 bg-white rounded-lg p-6 shadow">
        {selectedVendor ? (
          <>
            <h3 className="text-xl font-semibold mb-2">{selectedVendor.name}</h3>
            <p className="text-gray-600 mb-1">{selectedVendor.since}</p>
            <p className="text-gray-600">{selectedVendor.location}</p>
            {/* Add more details here if needed */}
          </>
        ) : (
          <p>Select a vendor to see details</p>
        )}
      </div>
    </div>
  );
}
