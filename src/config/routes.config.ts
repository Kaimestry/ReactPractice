// routes.config.ts
import type { ControlItem } from "../utilities/ControlBar/types/control.types";

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
        type: "date-range",
        label: "Last 7 days",
        value: {
          start: "2025-01-01",
          end: "2025-01-07",
          preset: "7d",
        },
        onApply: (range) => alert(JSON.stringify(range, null, 2)),
      },
    ],
  },
  profile: {
    path: "/profile",
    label: "Profile",
    controls: [
      {
        type: "button",
        label: "Report Alert",
        onClick: () => alert("Report control works! 📊"),
      },
    ],
  },
  test: {
    path: "/test",
    label: "Test Ground",
    controls: [
      {
        type: "date-range",
        label: "Last 7 days",
        value: {
          start: "2025-01-01",
          end: "2025-01-07",
          preset: "7d",
        },
        onApply: (range) => alert(JSON.stringify(range, null, 2)),
      },
    ],
  },
} as const satisfies Record<string, AppRoute>;
