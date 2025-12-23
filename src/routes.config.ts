// routes.config.ts
export type ControlItem =
  | {
      type: "button";
      label: string;
      onClick: () => void;
    }
  | {
      type: "toggle";
      label: string;
      value: boolean;
      onChange: (v: boolean) => void;
    };

export type AppRoute = {
  path: string;
  label: string;
  controls?: ControlItem[];
};

export const ROUTES = {
  dashboard: {
    path: "/dashboard",
    label: "Dashboard",
    controls: [
      {
        type: "button",
        label: "Test Alert",
        onClick: () => alert("Dashboard control works! 🚀"),
      },
    ],
  },
  report: {
    path: "/report",
    label: "Report",
    controls: [
      {
        type: "button",
        label: "Report Alert",
        onClick: () => alert("Report control works! 📊"),
      },
    ],
  },
  profile: {
    path: "/profile",
    label: "Profile",
  },
  test: {
    path: "/test",
    label: "Test Ground",
    controls: [
      {
        type: "button",
        label: "Test Ground Action",
        onClick: () => alert("Hello from Test Ground 🧪"),
      },
    ],
  },
} as const satisfies Record<string, AppRoute>;
