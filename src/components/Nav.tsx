import { Link } from "react-router-dom";

//ICONS
import { IoIosNotifications } from "react-icons/io";
import { MdSpaceDashboard } from "react-icons/md";
import { BsThreeDots } from "react-icons/bs";

const Nav = () => {
  const brand = "Health Journal";
  const user = "Kaimestry";

  return (
    <div className="flex flex-col justify-between h-screen bg-muted px-2 py-2 gap-4">
      <div className="flex flex-col gap-3">
        {/* head */}
        <section className="flex gap-3 items-center font-bold">
          <h1 className="text-highlight text-2xl">{brand}</h1>
          <p className="action-icon">
            <IoIosNotifications />
          </p>
        </section>
        {/* navigation */}
        <div className="flex flex-col gap-4">
          {/* PLATFORM GROUP */}
          <nav className="flex flex-col">
            <h2 className="nav-title">PLATFORM</h2>
            <Link className="nav-link" to="/">
              <MdSpaceDashboard />
              Dashboard
            </Link>
            <Link className="nav-link" to="/profile">
              <MdSpaceDashboard />
              Profile
            </Link>
            <Link className="nav-link" to="/profile">
              <MdSpaceDashboard />
              Activity Log
            </Link>
          </nav>
          {/* TOOLS GROUP */}
          <nav className="flex flex-col">
            <h2 className="nav-title">TOOLS</h2>
            <Link className="nav-link" to="/">
              <MdSpaceDashboard />
              Dashboard
            </Link>
            <Link className="nav-link" to="/profile">
              <MdSpaceDashboard />
              Profile
            </Link>
          </nav>
        </div>
      </div>

      <div className="flex items-center justify-between w-full">
        <figure className="flex items-center gap-2">
          <img src="" alt="." className="w-10 h-10 rounded-full bg-highlight" />
          <figcaption>
            <h1 className="font-semibold">{user}</h1>
          </figcaption>
        </figure>
        <p className="action-icon">
          <BsThreeDots />
        </p>
      </div>
    </div>
  );
};

export default Nav;
