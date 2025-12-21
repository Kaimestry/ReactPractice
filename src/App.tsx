import { Route, Routes } from "react-router-dom";
import "./App.css";

import RootLayout from "./_root/RootLayout";
import Dashboard from "./_root/pages/Dashboard";
import Profile from "./_root/pages/Profile";
import Report from "./_root/pages/Report";

function App() {
  return (
    <Routes>
      {/*Public Route*/}

      {/*Private Route*/}
      <Route element={<RootLayout />}>
        <Route path="/" element={<Dashboard />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/report" element={<Report />} />
      </Route>
    </Routes>
  );
}

export default App;
