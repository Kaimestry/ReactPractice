import { MdSpaceDashboard } from "react-icons/md";
import type { IconType } from "react-icons";

export type NavItem = {
  label: string;
  to: string;
  icon: IconType;
  variant?: "default" | "action";
};

export type NavGroup = {
  title: string;
  items: NavItem[];
};

export const NAV_GROUPS = [
  {
    title: "PLATFORM",
    items: [
      { label: "Dashboard", to: "/", icon: MdSpaceDashboard },
      { label: "Profile", to: "/profile", icon: MdSpaceDashboard },
      { label: "Activity Log", to: "/activity", icon: MdSpaceDashboard },
    ],
  },
  {
    title: "TOOLS",
    items: [
      { label: "Dashboard", to: "/", icon: MdSpaceDashboard },
      { label: "Profile", to: "/profile", icon: MdSpaceDashboard },
    ],
  },
  {
    title: "ACTIONS",
    items: [
      { label: "Profile", to: "/profile", icon: MdSpaceDashboard },
      {
        label: "New Entry",
        to: "/journal/new",
        icon: MdSpaceDashboard,
        variant: "action",
      },
    ],
  },
] satisfies readonly NavGroup[];
