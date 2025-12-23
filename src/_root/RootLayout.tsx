import { Outlet } from "react-router-dom";
import Nav from "../components/NavBar/Nav";
import Header from "../components/Header/Header";

const RootLayout = () => {
  return (
    <div className="flex h-screen bg-main text-primary">
      <Nav />

      <div className="flex flex-col">
        <Header />
        <div className="flex-1 overflow-y-auto">
          <div className="flex justify-center p-4">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RootLayout;
