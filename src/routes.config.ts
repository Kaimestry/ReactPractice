// routes.config.ts
export type AppRoute = {
  path: string;
  label: string;
};

export const ROUTES = {
  dashboard: { path: "/dashboard", label: "Dashboard" },
  report: { path: "/report", label: "Report" },
  profile: { path: "/profile", label: "Profile" },
  test: { path: "/test", label: "Test Ground" },
} as const;
