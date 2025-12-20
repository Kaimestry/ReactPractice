import { Route, Routes } from "react-router-dom";
import "./App.css";

import RootLayout from "./_root/RootLayout";
import Home from "./_root/pages/Home";
import Profile from "./_root/pages/Profile";

function App() {
  return (
    <Routes>
      {/*Public Route*/}

      {/*Private Route*/}
      <Route element={<RootLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
      </Route>
    </Routes>
  );
}

export default App;
