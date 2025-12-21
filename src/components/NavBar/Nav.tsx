import { Link } from "react-router-dom";
import { IoIosNotifications } from "react-icons/io";
import { BsThreeDots } from "react-icons/bs";
import { NAV_GROUPS } from "./nav.config";
import { APP_CONFIG } from "../../config/app.config";

const Nav = () => {
  const user = "Kaimestry";

  return (
    <aside className="flex flex-col justify-between h-screen min-w-56 bg-muted px-2 py-2 gap-4">
      <div className="flex flex-col gap-3">
        {/* Header */}
        <section className="flex justify-between gap-3 items-center font-bold">
          <h1 className="text-highlight text-2xl">{APP_CONFIG.brand.name}</h1>
          <button className="action-icon">
            <IoIosNotifications />
          </button>
        </section>

        {/* Navigation */}
        <div className="flex flex-col gap-4">
          {NAV_GROUPS.map((group) => (
            <nav key={group.title} className="flex flex-col">
              <h2 className="nav-title">{group.title}</h2>

              {group.items.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  className={
                    item.variant === "action" ? "nav-link-action" : "nav-link"
                  }
                >
                  <item.icon />
                  {item.label}
                </Link>
              ))}
            </nav>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between">
        <figure className="flex items-center gap-2">
          <img
            src=""
            alt="User avatar"
            className="w-10 h-10 rounded-full bg-highlight"
          />
          <figcaption className="font-semibold">{user}</figcaption>
        </figure>

        <button className="action-icon">
          <BsThreeDots />
        </button>
      </div>
    </aside>
  );
};

export default Nav;
