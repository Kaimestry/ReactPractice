// nav.config.ts
import type { IconType } from "react-icons";
import { MdSpaceDashboard } from "react-icons/md";
import { RiChatAiFill } from "react-icons/ri";
import { FaChartSimple } from "react-icons/fa6";
import { BiSolidHome } from "react-icons/bi";
import { ROUTES } from "../../routes.config";

/* ---------------- TYPES ---------------- */

type RouteNavItem = {
  type: "route";
  route: (typeof ROUTES)[keyof typeof ROUTES];
  icon: IconType;
};

type ActionNavItem = {
  type: "action";
  label: string;
  icon: IconType;
  onClick: () => void;
};

export type NavItem = RouteNavItem | ActionNavItem;

export type NavGroup = {
  title: string;
  items: NavItem[];
};

/* ---------------- DATA ---------------- */

export const NAV_GROUPS = [
  {
    title: "OVERVIEW",
    items: [
      { type: "route", route: ROUTES.dashboard, icon: BiSolidHome },
      { type: "route", route: ROUTES.report, icon: FaChartSimple },
      { type: "route", route: ROUTES.test, icon: MdSpaceDashboard },
    ],
  },
  {
    title: "TOOLS",
    items: [
      { type: "route", route: ROUTES.profile, icon: MdSpaceDashboard },
      {
        type: "action",
        label: "Chat Bot",
        icon: RiChatAiFill,
        onClick: () => {
          console.log("Open Chat Bot");
        },
      },
    ],
  },
] satisfies readonly NavGroup[];
