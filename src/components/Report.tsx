import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import {
  reportTabs,
  reportChartData,
  topTurfs,
} from "../data/dashboardData";
import { IndianRupee, ClipboardList, Users } from "lucide-react";

type TimeRange = "weekly" | "monthly" | "yearly";

export default function Report() {
  const location = useLocation();

  const [activeTab, setActiveTab] =
    useState<keyof typeof reportChartData>("booking");

  const [timeRange, setTimeRange] = useState<TimeRange>("monthly");
  const [animateBars, setAnimateBars] = useState(false);

  /* ================= OPEN TAB FROM DASHBOARD ================= */
  useEffect(() => {
    if (location.state?.activeTab) {
      setActiveTab(location.state.activeTab);
    }
  }, [location.state]);

  const chartData = reportChartData[activeTab][timeRange];

  /* ================= BAR ANIMATION ================= */
  useEffect(() => {
    setAnimateBars(false);
    const t = setTimeout(() => setAnimateBars(true), 100);
    return () => clearTimeout(t);
  }, [activeTab, timeRange]);

  return (
    <div className="bg-gray-100 p-1 min-h-screen rounded-xl -mt-3">
      <h1 className="font-semibold text-lg mb-4">Report Page</h1>

      <div className="flex gap-8">
        {/* ================= LEFT PANEL ================= */}
        <div
          className="bg-white p-4"
          style={{ width: "370px", height: "855px", borderRadius: "16px" }}
        >
          {reportTabs.map((tab) => {
            const Icon = tab.icon;
            const active = tab.key === activeTab;

            return (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key as any)}
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
        <div
          className="bg-white p-6 overflow-y-auto"
          style={{ width: "970px", height: "855px", borderRadius: "16px" }}
        >
          {/* ================= TOP STAT CARDS ================= */}
          <div className="grid grid-cols-3 gap-6 mb-8">
            <StatCard
              value="₹1,45,000"
              label="Month / Oct"
              icon={<IndianRupee size={22} />}
            />
            <StatCard
              value="50"
              label="Bookings"
              icon={<ClipboardList size={22} />}
            />
            <StatCard
              value="1,045"
              label="Active Admins"
              icon={<Users size={22} />}
            />
          </div>

          {/* ================= BAR CHART ================= */}
          <div className="mb-10">
            <div className="flex justify-between items-center mb-6">
              <h3 className="font-semibold capitalize">
                {activeTab} Chart
              </h3>

              <select
                value={timeRange}
                onChange={(e) =>
                  setTimeRange(e.target.value as TimeRange)
                }
                className="border rounded-md px-3 py-1 text-sm outline-none"
              >
                <option value="weekly">Weekly</option>
                <option value="monthly">Monthly</option>
                <option value="yearly">Yearly</option>
              </select>
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

                  const height = (item.value / maxValue) * 235;

                  return (
                    <div
                      key={index}
                      className="flex flex-col items-center flex-1"
                    >
                      <div className="w-[48px] h-[235px] bg-gray-200 rounded-t-lg flex items-end overflow-hidden">
                        <div
                          className="bg-black w-full rounded-t-lg transition-all duration-700 ease-out"
                          style={{
                            height: animateBars ? `${height}px` : "0px",
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
                  <p className="text-xs text-gray-400">{turf.since}</p>
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
  icon,
}: {
  value: string;
  label: string;
  icon: React.ReactNode;
}) {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-md flex flex-col gap-3">
      <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center">
        {icon}
      </div>
      <h3 className="text-2xl font-bold">{value}</h3>
      <p className="text-sm text-gray-400">{label}</p>
    </div>
  );
}
