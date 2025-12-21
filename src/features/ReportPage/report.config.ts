export type ReportItem = {
  id: string;
  content: React.ReactNode;
};

export type ReportContainer = {
  id: string;
  title: string;
  items: ReportItem[];
};

export const REPORT = [
  {
    id: "main",
    title: "TITLE",
    items: [
      { id: "dashboard", content: "Dashboard" },
      { id: "report", content: "Report" },
      { id: "activity", content: "Activity Log" },
    ],
  },
  {
    id: "secondary",
    title: "Title 2",
    items: [
      { id: "dashboard-2", content: "Dashboard" },
      { id: "profile", content: "Profile" },
    ],
  },
  {
    id: "secondary",
    title: "Title 2",
    items: [
      { id: "dashboard-2", content: "Dashboard" },
      { id: "profile", content: "Profile" },
    ],
  },
] satisfies readonly ReportContainer[];
