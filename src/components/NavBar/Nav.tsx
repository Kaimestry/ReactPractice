// Nav.tsx
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { BsThreeDots } from "react-icons/bs";

import { NAV_GROUPS } from "./nav.config";
import { APP_CONFIG } from "../../config/app.config";
import ToggleNav from "./ToggleNav";

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
        <div className="flex flex-col gap-2">
          {NAV_GROUPS.map((group) => (
            <nav key={group.title} className="flex flex-col gap-2">
              <h2 className="nav-title">{group.title}</h2>
              <h2 className="collapsed-title">----</h2>

              {group.items.map((item, index) => {
                // ACTION ITEM
                if (item.type === "action") {
                  return (
                    <button
                      key={index}
                      onClick={item.onClick}
                      className="nav-link-action"
                    >
                      <span>
                        <item.icon />
                      </span>
                      <p>{item.label}</p>
                    </button>
                  );
                }

                // ROUTE ITEM
                const { path, label } = item.route;
                const Icon = item.icon;

                return (
                  <NavLink
                    key={path}
                    to={path}
                    className={({ isActive }) =>
                      `nav-link ${isActive ? "nav-link-active" : ""}`
                    }
                  >
                    <span>
                      <Icon />
                    </span>
                    <p>{label}</p>
                  </NavLink>
                );
              })}
            </nav>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between mx-2">
        <figure className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-full bg-highlight" />
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
