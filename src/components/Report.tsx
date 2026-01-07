import { useEffect, useState } from "react";
import {
  reportTabs,
  reportChartData,
  topTurfs,
} from "../data/dashboardData";

export default function Report() {
  const [activeTab, setActiveTab] = useState("booking");
  const [animateBars, setAnimateBars] = useState(false);

  const chartData = reportChartData[activeTab];

  useEffect(() => {
    setAnimateBars(false);
    const t = setTimeout(() => setAnimateBars(true), 100);
    return () => clearTimeout(t);
  }, [activeTab]);

  return (
    <div className="bg-gray-100 p-1 min-h-screen rounded-xl ">
      <h1 className="font-semibold text-lg mb-4">Report Page</h1>

      <div className="flex gap-6">
        {/* ================= LEFT PANEL ================= */}
        <div
        className="bg-white p-4"
        style={{
            width: "408px",
            height: "855px",
            borderRadius: "16px",
        }}
        >
        {reportTabs.map((tab) => {
            const Icon = tab.icon;
            const active = tab.key === activeTab;

            return (
            <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm mb-1
                ${
                    active
                    ? "bg-gray-100 font-semibold"
                    : "text-gray-400 hover:bg-gray-50"
                }`}
            >
                <Icon size={18} />
                {tab.label}
            </button>
            );
        })}
        </div>


        {/* ================= RIGHT PANEL ================= */}
        <div className="flex-1 bg-white rounded-xl p-6">
          {/* TOP CARDS */}
          <div className="grid grid-cols-3 gap-6 mb-8">
            <StatCard value="₹1,45,000" label="Month/Oct" />
            <StatCard value="50" label="Bookings" />
            <StatCard value="1,045" label="Active Admins" />
          </div>

          {/* ================= BAR CHART ================= */}
          <div className="mb-10">
            <div className="flex justify-between items-center mb-6">
              <h3 className="font-semibold capitalize">
                {activeTab} Chart
              </h3>

              <button className="border rounded-md px-3 py-1 text-sm">
                Yearly
              </button>
            </div>

            <div className="relative flex h-[260px]">
              {/* Y AXIS */}
              <div className="flex flex-col justify-between text-xs text-gray-400 pr-6 h-[235px]">
                {[235, 190, 120, 60, 0].map((v) => (
                  <span key={v}>{v}</span>
                ))}
              </div>

              {/* BARS */}
              <div className="flex-1 flex items-end justify-between gap-3">
                {chartData.map((item, index) => {
                  const maxValue = Math.max(
                    ...chartData.map((d) => d.value),
                    235
                  );
                  const height =
                    (item.value / maxValue) * 235;

                  return (
                    <div
                      key={index}
                      className="flex flex-col items-center flex-1"
                    >
                      <div className="w-[40px] h-[235px] bg-gray-200 rounded-t-lg flex items-end overflow-hidden">
                        <div
                          className="bg-black w-full rounded-t-lg transition-all duration-700 ease-out"
                          style={{
                            height: animateBars
                              ? `${height}px`
                              : "0px",
                          }}
                        />
                      </div>
                      <span className="text-xs mt-3 text-gray-500">
                        {item.label}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* ================= TOP TURFS ================= */}
          <h3 className="font-semibold mb-4 capitalize">
            Top {activeTab} Turfs
          </h3>

          <div className="grid grid-cols-2 gap-4">
            {topTurfs.map((turf, i) => (
              <div
                key={i}
                className="border rounded-xl p-4 flex items-center gap-4"
              >
                <div className="w-10 h-10 bg-gray-100 rounded-full" />
                <div>
                  <p className="font-semibold">{turf.name}</p>
                  <p className="text-xs text-gray-400">
                    {turf.since}
                  </p>
                </div>
                <span className="ml-auto text-xs text-gray-400">
                  {turf.location}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ================= STAT CARD ================= */

function StatCard({
  value,
  label,
}: {
  value: string;
  label: string;
}) {
  return (
    <div className="bg-white rounded-xl p-5 shadow-sm">
      <h3 className="text-xl font-semibold">{value}</h3>
      <p className="text-sm text-gray-400">{label}</p>
    </div>
  );
}
