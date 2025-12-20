import { Outlet } from "react-router-dom";
import Nav from "../components/Nav";
const RootLayout = () => {
  return (
    <div className="flex">
      <Nav></Nav>
      <section className="flex min-h-96 justify-center items-center">
        <Outlet />
      </section>
    </div>
  );
};
export default RootLayout;
