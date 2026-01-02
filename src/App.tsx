import { Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Header from "./components/Header";
import Dashboard from "./components/Dashboard";
import TurfList from "./components/TurfList";
import VendorList from "./components/VendorList";
import ProtectedRoute from "./routes/ProtectedRoute";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />

      <Route element={<ProtectedRoute />}>
        <Route element={<Header />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/turflist" element={<TurfList />} />
          <Route path="/vendorlist" element={<VendorList />} />
        </Route>
      </Route>
    </Routes>
  );
}
