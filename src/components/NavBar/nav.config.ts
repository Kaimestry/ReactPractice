import { MdSpaceDashboard } from "react-icons/md";
import { RiChatAiFill } from "react-icons/ri";
import { FaChartSimple } from "react-icons/fa6";
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
    title: "OVERVIEW",
    items: [
      { label: "Dashboard", to: "/", icon: MdSpaceDashboard },
      { label: "Report", to: "/report", icon: FaChartSimple },
      { label: "Activity Log", to: "/test", icon: MdSpaceDashboard },
      { label: "Test Ground", to: "/test", icon: MdSpaceDashboard },
    ],
  },
  {
    title: "TOOLS",
    items: [
      { label: "Chat Bot", to: "/", icon: RiChatAiFill },
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
