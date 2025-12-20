import { Route, Routes } from "react-router-dom";
import "./App.css";

import RootLayout from "./_root/RootLayout";
import Dashboard from "./_root/pages/Dashboard";
import Profile from "./_root/pages/Profile";

function App() {
  return (
    <Routes>
      {/*Public Route*/}

      {/*Private Route*/}
      <Route element={<RootLayout />}>
        <Route path="/" element={<Dashboard />} />
        <Route path="/profile" element={<Profile />} />
      </Route>
    </Routes>
  );
}

export default App;
