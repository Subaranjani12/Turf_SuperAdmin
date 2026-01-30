import React from "react";
import { useNavigate } from "react-router-dom";
import {
  IndianRupee,
  Clock,
  Users,
  RefreshCw,
  CreditCard,
} from "lucide-react";

import {
  stats,
  earningReportWeekly,
  earningReportMonthly,
  earningReportYearly,
  paymentList,
  pendingApprovals,
} from "../data/dashboardData";

export default function Dashboard() {
  const navigate = useNavigate();

  const [reportType, setReportType] = React.useState("Monthly");
  const [animateBars, setAnimateBars] = React.useState(false);
  const [animatePayment, setAnimatePayment] = React.useState(false);
  const [isRefreshing, setIsRefreshing] = React.useState(false);

  let earningReportData = earningReportMonthly;
  if (reportType === "Weekly") earningReportData = earningReportWeekly;
  if (reportType === "Yearly") earningReportData = earningReportYearly;

  /* ================= PAYMENT STATUS ================= */
  React.useEffect(() => {
    setAnimatePayment(true);
  }, []);

  /* ================= REFRESH PAYMENT LIST ================= */
  const handleRefreshPayment = () => {
    setIsRefreshing(true);
    
    // Simulate refreshing payment list data
    setTimeout(() => {
      setIsRefreshing(false);
      // Here you could fetch new payment data from an API
      console.log('Payment list refreshed');
    }, 1000);
  };

  /* ================= EARNING REPORT ================= */
  React.useEffect(() => {
    setAnimateBars(false);
    const timer = setTimeout(() => setAnimateBars(true), 100);
    return () => clearTimeout(timer);
  }, [reportType]);

  return (
    <div className="bg-gray-100 min-h-screen p-6 grid grid-cols-12 gap-6">

      {/* ================= TOP ROW ================= */}
      <div className="col-span-12 grid grid-cols-12 gap-6 items-start">

        {/* ===== STATS ===== */}
        <div className="col-span-8 grid grid-cols-3 gap-6">
          <StatCard icon={<IndianRupee size={32} />} {...stats[0]} />
          <StatCard icon={<Clock size={32} />} {...stats[1]} />
          <StatCard icon={<Users size={32} />} {...stats[2]} />
        </div>

        {/* ===== PAYMENT STATUS ===== */}
        <div
          className="col-span-4 bg-black text-white flex flex-col justify-between"
          style={{
            width: 426,
            height: 268,
            borderRadius: 24,
            padding: 24,
          }}
        >
          <div>
            <h3 className="text-lg font-semibold">Payment Status</h3>
            <p className="text-sm text-gray-400">Completed</p>

            <div className="w-full h-2 bg-gray-700 rounded-full mt-4 overflow-hidden">
              <div
                className="h-2 bg-green-500 rounded-full transition-all duration-700 ease-out"
                style={{
                  width: animatePayment ? "55%" : "0%",
                }}
              />
            </div>

            <p className="text-sm mt-3">Pending Percentage</p>
            <p className="font-semibold">45%</p>
          </div>

          {/* ✅ VIEW ALL NAVIGATION */}
          <button
            onClick={() => navigate("/payment")}
            className="bg-white text-black rounded-xl py-2 font-semibold"
          >
            View All
          </button>
        </div>
      </div>

      {/* ================= SECOND ROW ================= */}
      <div className="col-span-12 grid grid-cols-12 gap-6">

        {/* ===== EARNING REPORT ===== */}
        <div
          className="col-span-8 bg-white -mt-16"
          style={{
            width: 870,
            height: 380,
            borderRadius: 16,
            padding: "20px 24px",
            boxShadow:
              "0px 0px 1px rgba(23,26,31,0.05), 0px 0px 2px rgba(23,26,31,0.08)",
          }}
        >
          <div className="flex justify-between items-center mb-8">
            <h3 className="text-lg font-semibold">Earning Report</h3>

            <select
              className="rounded-lg px-3 py-1 text-sm"
              style={{
                backgroundColor: "#F9FAFB",
                border: "1px solid #E5E7EB",
                color: "#111827",
              }}
              value={reportType}
              onChange={(e) => setReportType(e.target.value)}
            >
              <option value="Weekly">Weekly</option>
              <option value="Monthly">Monthly</option>
              <option value="Yearly">Yearly</option>
            </select>
          </div>

          <div className="relative flex h-[260px]">
            <div className="flex flex-col justify-between text-xs text-gray-500 pr-6 h-[235px]">
              {[235, 190, 120, 60, 0].map((v) => (
                <span key={v}>{v}</span>
              ))}
            </div>

            <div className="flex-1 flex items-end justify-between gap-3">
              {earningReportData.map((item, index) => {
                const maxValue = Math.max(
                  ...earningReportData.map((d) => d.value),
                  235
                );
                const barHeight = (item.value / maxValue) * 235;

                return (
                  <div key={index} className="flex flex-col items-center flex-1">
                    <div className="w-[40px] h-[235px] bg-gray-200 rounded-t-lg flex items-end overflow-hidden">
                      <div
                        className="bg-black w-full rounded-t-lg transition-all duration-700 ease-out"
                        style={{
                          height: animateBars ? `${barHeight}px` : "0px",
                        }}
                      />
                    </div>
                    <span className="text-xs mt-3">{item.label}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* ===== PAYMENT LIST ===== */}
        <div className="col-span-4 bg-[#F1F4F8] rounded-2xl p-1">
          <div className="flex justify-between items-center mb-6">
            <h3 className="font-semibold text-lg">Payment List</h3>
            <button 
              onClick={handleRefreshPayment}
              className="hover:opacity-70 transition-opacity -ml-8"
            >
              <RefreshCw 
                size={18} 
                className={`text-gray-600 ${isRefreshing ? 'animate-spin' : ''}`}
              />
            </button>
          </div>

          <div className="space-y-5">
            {paymentList.map((pay, index) => (
              <div
                key={index}
                className="flex justify-between items-center bg-white px-5 py-4 rounded-2xl shadow-sm"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center">
                    <CreditCard size={18} />
                  </div>
                  <div>
                    <p className="text-sm font-semibold">{pay.name}</p>
                    <p className="text-xs text-gray-500">{pay.date}</p>
                  </div>
                </div>
                <p className="font-bold">{pay.amount}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ================= PENDING APPROVALS ================= */}
      <div className="col-span-8 bg-white rounded-2xl p-6 -mt-80">
        <div className="flex justify-between items-center mb-8">
          <h3 className="font-semibold text-lg">Pending Approvals</h3>
          <span 
            onClick={() => navigate("/settings")}
            className="text-gray-400 text-xl cursor-pointer hover:text-gray-600"
          >
            →
          </span>
        </div>

        <div className="grid grid-cols-6 text-sm text-gray-500 mb-7">
          <div>Turf Name</div>
          <div>Owner Name</div>
          <div>Contact Details</div>
          <div>Location</div>
          <div>Date</div>
          <div></div>
        </div>

        <div className="space-y-6 text-sm">
          {pendingApprovals.map((item, index) => (
            <div key={index} className="grid grid-cols-6 items-center">
              <div>{item.turf}</div>
              <div>{item.owner}</div>
              <div>{item.phone}</div>
              <div>{item.location}</div>
              <div className="text-gray-500">{item.date}</div>
              <div className="flex justify-end">
                <span className="w-5 h-5 flex items-center justify-center rounded-full border border-orange-400 text-orange-400 cursor-pointer">
                  i
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ================= STAT CARD ================= */
function StatCard({
  icon,
  value,
  label,
}: {
  icon: React.ReactNode;
  value: string;
  label: string;
}) {
  const navigate = useNavigate();

  return (
    <div
      onClick={() =>
        navigate("/report", { state: { activeTab: "payment" } })
      }
      className="bg-white flex flex-col justify-between shadow-sm relative cursor-pointer"
      style={{
        width: 260,
        height: 178,
        borderRadius: 16,
        padding: 24,
      }}
    >
      <span className="absolute top-4 right-4 text-gray-400 text-lg">→</span>
      <div className="bg-gray-100 p-3 rounded-full w-fit">{icon}</div>
      <div>
        <h2 className="text-2xl font-bold">{value}</h2>
        <p className="text-sm text-gray-500">{label}</p>
      </div>
    </div>
  );
}
