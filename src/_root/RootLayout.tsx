import { Outlet } from "react-router-dom";
import Nav from "../components/NavBar/Nav";

const RootLayout = () => {
  return (
    <div className="flex h-screen bg-main text-primary">
      <Nav />

      {/* BIG CONTAINER (scrollable) */}
      <div className="flex-1 overflow-y-auto">
        <div className="flex justify-center p-6">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default RootLayout;
