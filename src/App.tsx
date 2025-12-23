import { Route, Routes, Navigate } from "react-router-dom";
import "./App.css";

import RootLayout from "./_root/RootLayout";
import Dashboard from "./_root/pages/Dashboard";
import Profile from "./_root/pages/Profile";
import Report from "./_root/pages/Report";
import Test from "./_root/pages/Test";

function App() {
  return (
    <Routes>
      {/*Public Route*/}

      {/* Private Route */}
      <Route element={<RootLayout />}>
        {/* DEFAULT */}
        <Route index element={<Navigate to="/dashboard" replace />} />

        <Route path="dashboard" element={<Dashboard />} />
        <Route path="profile" element={<Profile />} />
        <Route path="report" element={<Report />} />
        <Route path="test" element={<Test />} />
      </Route>
    </Routes>
  );
}

export default App;
