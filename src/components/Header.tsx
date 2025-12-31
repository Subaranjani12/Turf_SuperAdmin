import React, { useState } from "react";
import {
  Bell,
  Search,
  User,
  FileText,
  LayoutGrid,
  Shield,
  Users,
  CreditCard,
  BarChart2,
  Settings,
  ChevronDown,
} from "lucide-react";
import { NavLink, Outlet, useNavigate, useLocation } from "react-router-dom";
import logo from "../assets/logo.png";

const Header: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // ✅ ONLY ADDITION (search state)
  const [searchValue, setSearchValue] = useState("");

  const menuItems = [
    { icon: LayoutGrid, label: "Dashboard", path: "/dashboard" },
    { icon: Shield, label: "Turf List", path: "/turflist" },
    { icon: User, label: "Vendor List", path: "/vendorlist" },
    { icon: Users, label: "User List" },
    { icon: CreditCard, label: "Payments" },
    { icon: BarChart2, label: "Report" },
    { icon: Settings, label: "Settings" },
  ];

  // ✅ Dashboard click handler
  const handleDashboardClick = () => {
    if (location.pathname === "/dashboard") {
      window.location.reload();
    } else {
      navigate("/dashboard");
    }
  };

  return (
    <div className="h-screen bg-gray-100 overflow-hidden">

      {/* ================= HEADER ================= */}
      <header className="fixed top-0 left-0 right-0 h-[64px] bg-white px-6 flex items-center justify-between z-30">
        <div className="flex items-center gap-3">
          <img src={logo} alt="Logo" className="h-14 w-14 -ml-2" />
          <div className="ml-3">
            <h1 className="text-lg font-semibold text-gray-800">
              Welcome Back!
            </h1>
            <p className="text-sm text-gray-500">Business Manager</p>
          </div>
        </div>

        <div className="flex items-center gap-8">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-4 w-4" />
            <input
              type="text"
              placeholder="Search..."
              value={searchValue}                 // ✅ added
              onChange={(e) => setSearchValue(e.target.value)} // ✅ added
              className="pl-9 pr-12 py-2 border border-gray-200 rounded-lg text-sm w-72 bg-[#F9FAFB]"
            />
          </div>

          <FileText className="h-5 w-5 text-gray-600 cursor-pointer" />
          <Bell className="h-5 w-5 text-gray-600 cursor-pointer" />

          <div className="flex items-center gap-1 cursor-pointer select-none">
            <div className="h-9 w-9 rounded-full bg-gray-200 flex items-center justify-center">
              <User className="h-5 w-5 text-gray-500" />
            </div>
            <ChevronDown className="h-4 w-4 text-gray-500" />
          </div>
        </div>
      </header>

      {/* ================= BODY ================= */}
      <div className="flex pt-[64px] h-full">

        {/* ================= SIDEBAR ================= */}
        <aside className="fixed top-[64px] left-0 w-20 h-[calc(100vh-64px)] bg-white border-r border-gray-200 py-6 flex flex-col items-center z-20">
          <nav className="flex flex-col gap-6">
            {menuItems.map(({ icon: Icon, label, path }) => {
              if (label === "Dashboard") {
                return (
                  <button
                    key={label}
                    onClick={handleDashboardClick}
                    className="flex flex-col items-center gap-1 text-[11px] font-medium cursor-pointer text-gray-900"
                  >
                    <Icon className="h-5 w-5" />
                    {label}
                  </button>
                );
              }

              return path ? (
                <NavLink
                  key={label}
                  to={path}
                  className="flex flex-col items-center gap-1 text-[11px] font-medium cursor-pointer text-gray-900"
                >
                  <Icon className="h-5 w-5" />
                  {label}
                </NavLink>
              ) : (
                <div
                  key={label}
                  className="flex flex-col items-center gap-1 text-[11px] font-medium cursor-pointer text-gray-400 hover:text-gray-700"
                >
                  <Icon className="h-5 w-5" />
                  {label}
                </div>
              );
            })}
          </nav>
        </aside>

        {/* ================= CONTENT ================= */}
        <main className="ml-20 flex-1 overflow-y-auto p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Header;
