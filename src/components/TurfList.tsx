import { useState } from "react";
import { Star } from "lucide-react";
import {
  turfList,
  days,
  slots,
  getPrice,
  accountDetails,
} from "../data/dashboardData";

export default function TurfList() {
  const [selectedTurfId, setSelectedTurfId] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState("Turf Details");

  const selectedTurf = turfList.find(
    (turf) => turf.id === selectedTurfId
  );

  const tabs = ["Turf Details", "Owner", "Accounts", "Gallery", "Options"];

  return (
    <div className="flex gap-10 bg-gray-100 p-4 min-h-[650px] rounded-lg">

      {/* ================= LEFT : TURF LIST ================= */}
      <div className="w-1/4 flex flex-col gap-4 -ml-3">
        <h2 className="font-bold mb-2">Turf List</h2>

        {turfList.map((turf) => {
          const isActive = turf.id === selectedTurfId;

          return (
            <button
              key={turf.id}
              onClick={() => setSelectedTurfId(turf.id)}
              className={`flex items-center gap-3 p-3 rounded-md border ${
                isActive
                  ? "border-gray-700 bg-white shadow"
                  : "border-transparent bg-white hover:bg-gray-50"
              }`}
            >
              <div className="w-10 h-10 rounded-full bg-gray-200" />

              <div className="flex flex-col text-left text-sm">
                <span className="font-semibold">{turf.name}</span>
                <span className="text-xs text-gray-500">{turf.since}</span>
              </div>

              <span className="ml-auto text-xs text-gray-400">
                {turf.location}
              </span>
            </button>
          );
        })}
      </div>

      {/* ================= RIGHT : DETAILS ================= */}
      <div className="flex-1 bg-white rounded-2xl p-8">
        {selectedTurf ? (
          <>
            {/* ================= TABS ================= */}
            <div className="flex gap-34 font-bold mb-10">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`pb-2 ${
                    activeTab === tab
                      ? "border-b-2 border-green-500"
                      : "text-gray-600"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* ================= TURF DETAILS ================= */}
            {activeTab === "Turf Details" && (
              <>
                <div className="flex justify-between mb-12">
                  <div className="flex gap-6">
                    <div className="w-24 h-24 rounded-full bg-gray-200" />
                    <div>
                      <h2 className="text-2xl font-semibold flex items-center gap-3">
                        {selectedTurf.name}
                        <span className="w-5 h-5 bg-green-500 text-white text-xs rounded-full flex items-center justify-center">
                          ✓
                        </span>
                      </h2>
                      <p className="text-sm text-gray-500 mt-1">
                        {selectedTurf.since}
                      </p>

                      <div className="flex gap-2 mt-3">
                        {selectedTurf.sports.map((sport) => (
                          <span
                            key={sport}
                            className="border px-4 py-1 rounded-full text-xs text-gray-600"
                          >
                            {sport}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="text-right">
                    <p className="text-sm text-gray-500 mb-3">
                      {selectedTurf.location}
                    </p>
                    <div className="flex justify-end gap-1">
                      {[1, 2, 3, 4, 5].map((i) => (
                        <Star
                          key={i}
                          size={24}
                          className={
                            i <= selectedTurf.rating
                              ? "fill-yellow-400 text-yellow-400"
                              : "text-gray-300"
                          }
                        />
                      ))}
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-[1.2fr_1fr] gap-14">
                  {/* SLOTS */}
                  <div>
                    <div className="flex gap-6 mb-6 font-semibold text-sm">
                      {days.map((day, i) => (
                        <span
                          key={day}
                          className={
                            i === 0 ? "text-green-500" : "text-gray-400"
                          }
                        >
                          {day}
                        </span>
                      ))}
                    </div>

                    {Object.entries(slots).map(([label, times]) => (
                      <div key={label} className="mb-8">
                        <h4 className="font-semibold mb-4">{label}</h4>
                        <div className="grid grid-cols-4 gap-x-6 gap-y-10">
                          {times.map(([from, to], idx) => (
                            <div key={idx} className="text-center">
                              <p className="text-green-500 font-semibold mb-2">
                                ₹ {getPrice(label, from)}
                              </p>
                              <div className="bg-white shadow-md rounded-xl py-4 text-sm">
                                <p className="font-semibold">{from}</p>
                                <p className="text-gray-400">-</p>
                                <p className="font-semibold">{to}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* ADDRESS */}
                  <div>
                    <h4 className="font-semibold mb-2">Address</h4>
                    <p className="text-sm text-gray-600 whitespace-pre-line">
                      {selectedTurf.address}
                    </p>

                    <h4 className="font-semibold mt-6 mb-2">Amenities</h4>
                    <ul className="text-sm text-gray-600 list-decimal pl-4">
                      {selectedTurf.amenities.map((a) => (
                        <li key={a}>{a}</li>
                      ))}
                    </ul>

                    <h4 className="font-semibold mt-6 mb-2">Available Days</h4>
                    <div className="flex gap-2 flex-wrap">
                      {selectedTurf.availableDays.map((d) => (
                        <span
                          key={d}
                          className="bg-green-500 text-white text-xs px-4 py-1 rounded-full"
                        >
                          {d}
                        </span>
                      ))}
                    </div>

                    <h4 className="font-semibold mt-6 mb-2">Pricing Type</h4>
                    <p className="text-sm text-gray-600">
                      ● {selectedTurf.pricingType}
                    </p>
                  </div>
                </div>
              </>
            )}

            {/* ================= OWNER ================= */}
            {activeTab === "Owner" && (
              <div className="px-6">
                <div className="flex justify-between items-center mb-10">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-full bg-gray-200" />
                    <div>
                      <h3 className="text-xl font-semibold">
                        {selectedTurf.owner.name}
                      </h3>
                      <p className="text-sm text-gray-500">
                        {selectedTurf.owner.role}
                      </p>
                    </div>
                  </div>

                  <div className="text-right">
                    <p className="text-sm text-gray-400 mb-1">
                      Phone number
                    </p>
                    <p className="font-semibold">
                      {selectedTurf.owner.phone}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-6 my-10">
                  <div className="flex-1 border-t border-dashed border-gray-400" />
                  <h4 className="font-semibold text-lg text-gray-700 whitespace-nowrap">
                    {selectedTurf.owner.name}’s Turf
                  </h4>
                  <div className="flex-1 border-t border-dashed border-gray-400" />
                </div>

                <div className="space-y-8">
                  {selectedTurf.owner.turfs.map((turf, index) => (
                    <div key={index} className="flex justify-between items-center">
                      <div className="flex gap-5">
                        <div className="w-20 h-20 rounded-full bg-gray-200" />
                        <div>
                          <h4 className="font-semibold text-lg flex gap-2 items-center">
                            {turf.name}
                            <span className="w-5 h-5 bg-green-500 text-white text-xs rounded-full flex items-center justify-center">
                              ✓
                            </span>
                          </h4>
                          <p className="text-sm text-gray-500 mb-2">
                            {turf.since}
                          </p>
                          <div className="flex gap-2">
                            {turf.sports.map((sport) => (
                              <span
                                key={sport}
                                className="border px-3 py-1 rounded-full text-xs text-gray-600"
                              >
                                {sport}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>

                      <div className="text-right">
                        <p className="text-sm text-gray-500 mb-2">
                          {turf.location}
                        </p>
                        <div className="flex justify-end gap-1">
                          {[1, 2, 3, 4, 5].map((i) => (
                            <Star
                              key={i}
                              size={22}
                              className={
                                i <= turf.rating
                                  ? "fill-yellow-400 text-yellow-400"
                                  : "text-gray-300"
                              }
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* ================= ACCOUNTS ================= */}
            {activeTab === "Accounts" && (
              <div className="px-6">
                {/* HEADER */}
                <div className="flex justify-between items-center mb-10">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-full bg-gray-300" />
                    <div>
                      <h2 className="text-[22px] font-semibold text-gray-500">
                        {selectedTurf.owner.name}
                      </h2>
                      <p className="text-sm text-gray-400">
                        {selectedTurf.owner.role}
                      </p>
                    </div>
                  </div>

                  <div className="text-right">
                    <p className="text-sm text-gray-400 mb-1">
                      Phone number
                    </p>
                    <p className="text-base font-semibold text-gray-600">
                      {selectedTurf.owner.phone}
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-10">
                  {/* BUSINESS */}
                  <div className="border border-gray-300 rounded-2xl p-6">
                    <h3 className="text-lg font-semibold text-gray-600 mb-6">
                      Business Details
                    </h3>

                    <div className="space-y-6 text-sm">
                      <div>
                        <p className="text-gray-400">Business Phone</p>
                        <p className="font-semibold text-gray-600">
                          {accountDetails.businessDetails.businessPhone}
                        </p>
                      </div>

                      <div>
                        <p className="text-gray-400">Alternate Number</p>
                        <p className="font-semibold text-gray-600">
                          {accountDetails.businessDetails.alternateNumber}
                        </p>
                      </div>

                      <div>
                        <p className="text-gray-400">GST Number</p>
                        <p className="font-semibold text-gray-600">
                          {accountDetails.businessDetails.gstNumber}
                        </p>
                      </div>

                      <div>
                        <p className="text-gray-400">Business Mail</p>
                        <p className="font-semibold text-gray-600">
                          {accountDetails.businessDetails.businessMail}
                        </p>
                      </div>

                      <div>
                        <p className="text-gray-400">Business Address</p>
                        <p className="font-semibold text-gray-600 whitespace-pre-line">
                          {accountDetails.businessDetails.businessAddress}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* BANK */}
                  <div className="border border-gray-300 rounded-2xl p-6">
                    <h3 className="text-lg font-semibold text-gray-600 mb-6">
                      Bank Details
                    </h3>

                    <div className="space-y-6 text-sm">
                      <div>
                        <p className="text-gray-400">Account Number</p>
                        <p className="font-semibold text-gray-600">
                          {accountDetails.bankDetails.accountNumber}
                        </p>
                      </div>

                      <div>
                        <p className="text-gray-400">IFSC Code</p>
                        <p className="font-semibold text-gray-600">
                          {accountDetails.bankDetails.ifscCode}
                        </p>
                      </div>

                      <div>
                        <p className="text-gray-400">PAN Number</p>
                        <p className="font-semibold text-gray-600">
                          {accountDetails.bankDetails.panNumber}
                        </p>
                      </div>

                      <div>
                        <p className="text-gray-400">Bank Name</p>
                        <p className="font-semibold text-gray-600">
                          {accountDetails.bankDetails.bankName}
                        </p>
                      </div>

                      <div>
                        <p className="text-gray-400">Account Holder Name</p>
                        <p className="font-semibold text-gray-600">
                          {accountDetails.bankDetails.accountHolderName}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {/* ================= GALLERY ================= */}
            {activeTab === "Gallery" && (
              <div className="px-6">
                {/* GALLERY GRID */}
                <div className="grid grid-cols-3 gap-6 mb-14">
                  
                  {/* IMAGE PLACEHOLDERS */}
                  <div className="h-[180px] rounded-2xl bg-gray-200" />
                  <div className="h-[180px] rounded-2xl bg-gray-200" />
                  <div className="h-[180px] rounded-2xl bg-gray-200" />
                  <div className="h-[180px] rounded-2xl bg-gray-200" />
                  <div className="h-[180px] rounded-2xl bg-gray-200" />
                  <div className="h-[180px] rounded-2xl bg-gray-200" />
                </div>

                {/* SHOW DOCUMENTS */}
                <div className="border border-gray-200 rounded-2xl h-20 flex items-center justify-center gap-4 text-gray-600">
                  {/* DOCUMENT ICON */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-7 w-7 text-gray-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5l5 5v11a2 2 0 01-2 2z"
                    />
                  </svg>

                  {/* TEXT */}
                  <span className="font-semibold text-gray-600">
                    Show Documents
                  </span>
                </div>
              </div>
            )}
        
          </>
        ) : (
          <div className="h-full flex items-center justify-center text-gray-400 text-lg">
            Select a turf to view details
          </div>
        )}
      </div>
    </div>

  );
}

