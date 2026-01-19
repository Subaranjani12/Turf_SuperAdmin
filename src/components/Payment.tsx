import { useState } from "react";
import { Search, SlidersHorizontal, RefreshCcw, Wallet } from "lucide-react";
import { payment } from "../data/dashboardData";

export default function Payment() {
  const [selectedPayment, setSelectedPayment] = useState(payment[0]);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPayments = payment.filter((item) => {
    const searchLower = searchQuery.toLowerCase();
    return (
      item.user.toLowerCase().includes(searchLower) ||
      item.turf.toLowerCase().includes(searchLower) ||
      item.transactionId.toLowerCase().includes(searchLower) ||
      item.bookingId.toLowerCase().includes(searchLower)
    );
  });

  const getBorderColor = (status: string) => {
    if (status === "success") return "border-green-400";
    if (status === "pending") return "border-yellow-400";
    if (status === "failed") return "border-red-400";
    return "border-gray-300";
  };

  return (
    <div className="flex gap-6 p-0 bg-[#F5F6FA] min-h-screen">
      {/* ================= LEFT PANEL ================= */}
      <div className="w-[360px]">
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold text-gray-900">
            Payment List
          </h2>
          <RefreshCcw size={18} className="text-gray-400 cursor-pointer" />
        </div>

        {/* Search + Filter */}
        <div className="flex gap-3 mb-5">
          <div className="flex items-center gap-2 px-3 py-2 bg-white border border-gray-300 rounded-lg flex-1">
            <Search size={16} className="text-gray-400" />
            <input
              placeholder="Search for a Turf"
              className="bg-transparent outline-none text-sm w-full"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <button className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 rounded-lg text-sm text-gray-500">
            Filter By
            <SlidersHorizontal size={16} />
          </button>
        </div>

        {/* Payment List */}
        <div className="space-y-4">
          {filteredPayments.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedPayment(item)}
              className={`flex items-center justify-between px-4 py-4 rounded-2xl border bg-white cursor-pointer transition
              ${getBorderColor(item.status)}`}
            >
              <div className="flex items-center gap-3">
                <div className="w-11 h-7 rounded-full bg-gray-100 flex items-center justify-center">
                  <Wallet size={18} className="text-gray-600" />
                </div>

                <div>
                  <p className="text-sm font-semibold text-gray-900">
                    {item.user} to {item.turf}
                  </p>
                  <p className="text-xs text-gray-500">
                    {item.date} at {item.time}
                  </p>
                </div>
              </div>

              <p className="text-sm font-semibold text-gray-900">
                ₹{item.amount}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* ================= RIGHT PANEL ================= */}
      <div className="flex-1 bg-white rounded-2xl border border-green-400 p-10">
        <h2 className="text-xl font-semibold text-gray-900 mb-10">
          Payment Details
        </h2>

        <div className="space-y-8">
          <Detail label="Transaction ID" value={selectedPayment.transactionId} />
          <Detail label="Booking ID" value={selectedPayment.bookingId} />
          <Detail label="Payment Status" value={selectedPayment.status} />
          <Detail
            label="Payment Date & Time"
            value={selectedPayment.paymentDateTime}
          />
          <Detail label="Payment Method" value={selectedPayment.method} />
          <Detail label="Payment Gateway" value={selectedPayment.gateway} />
          <Detail label="Sender Name" value={selectedPayment.senderName} />
          <Detail label="Sender mobile" value={selectedPayment.senderMobile} />
          <Detail label="Vendor Name" value={selectedPayment.vendorName} />
          <Detail label="Vendor Mobile" value={selectedPayment.vendorMobile} />
        </div>
      </div>
    </div>
  );
}

/* ================= DETAIL ROW ================= */
function Detail({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-start">
      <p className="w-[260px] font-semibold text-gray-900">
        {label}:
      </p>
      <p className="text-gray-700">
        {value || "-"}
      </p>
    </div>
  );
}
