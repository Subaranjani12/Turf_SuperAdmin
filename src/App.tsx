import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./components/Login";
import Header from "./components/Header";
import Dashboard from "./components/Dashboard";
import TurfList from "./components/TurfList";
import VendorList from "./components/VendorList";
import UserList from "./components/UserList";
import ProtectedRoute from "./routes/ProtectedRoute";

export default function App() {
  return (
    <Routes>
      {/* PUBLIC ROUTE */}
      <Route path="/" element={<Login />} />

      {/* PROTECTED ROUTES */}
      <Route element={<ProtectedRoute />}>
        <Route element={<Header />}>
          
          {/* Default after login */}
          <Route index element={<Navigate to="/dashboard" replace />} />

          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/turflist" element={<TurfList />} />
          <Route path="/vendorlist" element={<VendorList />} />
          <Route path="/userlist" element={<UserList />} />

        </Route>
      </Route>
    </Routes>
  );
}
