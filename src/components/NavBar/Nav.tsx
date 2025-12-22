import { Link } from "react-router-dom";
import { BsThreeDots } from "react-icons/bs";
import { NAV_GROUPS } from "./nav.config";
import { APP_CONFIG } from "../../config/app.config";
import ToggleNav from "./ToggleNav";
import { useState } from "react";

const Nav = () => {
  const user = "Kaimestry";
  const [collapsed, setCollapsed] = useState(false);

  return (
    <aside className={`nav-sidebar ${collapsed ? "collapsed" : ""}`}>
      <div className="flex flex-col gap-3">
        {/* Header */}
        <section className="flex justify-between gap-3 items-center font-bold">
          <h1 className="text-highlight text-2xl">{APP_CONFIG.brand.name}</h1>
          <ToggleNav
            open={!collapsed}
            onToggle={(open) => setCollapsed(!open)}
          />
        </section>

        {/* Navigation */}
        <div className="flex flex-col gap-4 ">
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
                  <span>
                    <item.icon />
                  </span>
                  <p>{item.label}</p>
                </Link>
              ))}
            </nav>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between mx-2">
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
