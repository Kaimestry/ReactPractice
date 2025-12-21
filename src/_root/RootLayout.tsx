import { Outlet } from "react-router-dom";
import Nav from "../components/NavBar/Nav.tsx";
const RootLayout = () => {
  return (
    <div className="flex bg-main text-primary">
      <Nav></Nav>
      <div className="flex min-h-full w-screen justify-center m-6 border">
        <div className="flex h-fit justify-center border">
          <Outlet />
        </div>
      </div>
    </div>
  );
};
export default RootLayout;
