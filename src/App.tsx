import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Dashboard from "./components/Dashboard";
import TurfList from "./components/TurfList";
import VendorList from "./components/VendorList";

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Header />}>
        <Route index element={<Dashboard />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="turflist" element={<TurfList />} />
        <Route path="vendorlist" element={<VendorList />} />
      </Route>
    </Routes>
  );
};

export default App;
