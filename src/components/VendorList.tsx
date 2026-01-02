import { useState } from "react";
import { Search } from "lucide-react";

type Vendor = {
  id: number;
  name: string;
  since: string;
  phone: string;
};

const vendors: Vendor[] = Array(8)
  .fill(null)
  .map((_, i) => ({
    id: i + 1,
    name: `John Doe ${i + 1}`,
    since: "Since 12 Mar, 2024",
    phone: "+91 9845762545",
  }));

export default function VendorList() {
  const [selectedVendorId, setSelectedVendorId] = useState<number>(1);
  const [search, setSearch] = useState("");

  const filteredVendors = vendors.filter((vendor) =>
    vendor.name.toLowerCase().includes(search.toLowerCase())
  );

  const selectedVendor = vendors.find(
    (vendor) => vendor.id === selectedVendorId
  );

  return (
    <div className="flex gap-8 bg-gray-100 p-4 min-h-[600px] rounded-lg">
      {/* LEFT */}
      <div className="w-1/4 flex flex-col gap-4 -mt-9 -ml-3">

        {/* HEADER */}
        <div className="flex items-center justify-between">
          <h2 className="font-bold text-lg">Vendor List</h2>

          {/* SEARCH BAR (SMALL) */}
          <div className="relative w-[220px] mt-4">
            <Search
              size={16}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
            />
            <input
              type="text"
              placeholder="Search for a Vendor"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="
                w-full
                h-9
                pl-9
                pr-3
                rounded-md
                bg-[#f2f4f7]
                border
                border-gray-300
                text-sm
                text-gray-700
                placeholder-gray-500
                outline-none
                focus:border-gray-400
              "
            />
          </div>
        </div>

        {/* VENDOR LIST */}
        <div className="flex flex-col gap-3 mt-2">
          {filteredVendors.map((vendor) => {
            const isActive = vendor.id === selectedVendorId;

            return (
              <button
                key={vendor.id}
                onClick={() => setSelectedVendorId(vendor.id)}
                className={`flex items-center gap-3 p-4 rounded-xl border ${
                  isActive
                    ? "border-gray-700 bg-white shadow"
                    : "border-transparent bg-white hover:bg-gray-50"
                }`}
              >
                {/* Avatar */}
                <div className="w-10 h-10 rounded-full bg-gray-200" />

                {/* Name */}
                <div className="flex flex-col text-left">
                  <span className="font-semibold text-sm">
                    {vendor.name}
                  </span>
                  <span className="text-xs text-gray-500">
                    {vendor.since}
                  </span>
                </div>

                {/* Phone */}
                <span className="ml-auto text-xs text-gray-400">
                  {vendor.phone}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* RIGHT */}
      <div className="flex-1 bg-white rounded-lg p-6 shadow">
        {selectedVendor ? (
          <>
            <h3 className="text-xl font-semibold mb-2">
              {selectedVendor.name}
            </h3>
            <p className="text-gray-600 mb-1">
              {selectedVendor.since}
            </p>
            <p className="text-gray-600">
              {selectedVendor.phone}
            </p>
          </>
        ) : (
          <p className="text-gray-500">
            Select a vendor to see details
          </p>
        )}
      </div>
    </div>
  );
}
