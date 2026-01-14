import { useState } from "react";
import { Search, SlidersHorizontal, RefreshCcw, Wallet } from "lucide-react";
import { payment } from "../data/dashboardData";

export default function Payment() {
  const [selectedPayment, setSelectedPayment] = useState(payment[0]);

  const getBorderColor = (status: string) => {
    if (status === "success") return "border-green-400";
    if (status === "pending") return "border-yellow-400";
    if (status === "failed") return "border-red-400";
    return "border-gray-300";
  };

  return (
    <div className="flex gap-6 p-6 bg-gray-50 min-h-screen">
      {/* ================= LEFT PANEL ================= */}
      <div className="w-[360px] bg-gray-100 rounded-xl p-3">
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold text-gray-900">
            Payment List
          </h2>
          <RefreshCcw size={18} className="text-gray-400 cursor-pointer" />
        </div>

        {/* Search + Filter */}
        <div className="flex gap-3 mb-4">
          <div className="flex items-center gap-2 px-3 py-2 bg-gray-100 border rounded-lg flex-1">
            <Search size={16} className="text-gray-400" />
            <input
              placeholder="Search for a Turf"
              className="bg-transparent outline-none text-sm w-full"
            />
          </div>

          <button className="flex items-center gap-2 px-4 py-2 bg-gray-100 border rounded-lg text-sm text-gray-500">
            Filter By
            <SlidersHorizontal size={16} />
          </button>
        </div>

        {/* Payment List */}
        <div className="space-y-3">
          {payment.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedPayment(item)}
              className={`flex items-center justify-between p-3 rounded-xl border bg-white cursor-pointer ${getBorderColor(
                item.status
              )}`}
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
                  <Wallet size={18} className="text-gray-600" />
                </div>
                <div>
                  <p className="text-sm font-medium">
                    {item.user} to {item.turf}
                  </p>
                  <p className="text-xs text-gray-400">
                    {item.date} at {item.time}
                  </p>
                </div>
              </div>

              <p className="text-sm font-semibold">₹{item.amount}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ================= RIGHT PANEL (UNCHANGED) ================= */}
      <div className="flex-1 bg-white rounded-xl border border-green-400 p-6">
        <h2 className="font-semibold mb-6 text-lg">
          Payment Details
        </h2>

        <div className="space-y-5 text-sm">
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
    <div className="flex">
      <p className="w-[200px] font-medium text-gray-900">
        {label}:
      </p>
      <p className="text-gray-600">{value}</p>
    </div>
  );
}
