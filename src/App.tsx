import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./components/Login";
import Header from "./components/Header";
import Dashboard from "./components/Dashboard";
import TurfList from "./components/TurfList";
import VendorList from "./components/VendorList";
import UserList from "./components/UserList";
import Report from "./components/Report";
import Payment from "./components/Payment"; 
import Settings from "./components/Settings";
import ProtectedRoute from "./routes/ProtectedRoute";

export default function App() {
  return (
    <Routes>
      {/* PUBLIC ROUTE */}
      <Route path="/" element={<Login />} />

      {/* PROTECTED ROUTES */}
      <Route element={<ProtectedRoute />}>
        <Route element={<Header />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/turflist" element={<TurfList />} />
          <Route path="/vendorlist" element={<VendorList />} />
          <Route path="/userlist" element={<UserList />} />
          <Route path="/report" element={<Report />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/settings" element={<Settings />} />
        </Route>
      </Route>

      {/* FALLBACK */}
      <Route path="*" element={<Navigate to="/dashboard" replace />} />
    </Routes>
  );
}
