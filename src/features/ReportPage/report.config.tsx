import BarChartSample from "./ChartSamples/BarChart-sample.png";
import LineChartSample from "./ChartSamples/LineChart-sample.png";
import PieChartSample from "./ChartSamples/PieChart-sample.png";
import DonutChartSample from "./ChartSamples/DonutChart-sample.png";

export type ReportType = "metric" | "chart";

export type ReportItem = {
  id: string;
  content: React.ReactNode;
};

export type ReportContainer = {
  id: string;
  type: ReportType;
  title: string;
  badge?: string;
  data: ReportItem[];
};

export const REPORT = [
  // 🔹 PLAIN NUMBER / METRIC BLOCKS
  {
    id: "total-xx",
    type: "metric",
    title: "Total of XX",
    badge: "Sample",
    data: [
      {
        id: "total-value",
        content: <span className="text-3xl font-bold">138</span>,
      },
    ],
  },
  {
    id: "total-yy",
    type: "metric",
    title: "Total of YY",
    badge: "Sample",
    data: [
      {
        id: "total-value",
        content: <span className="text-3xl font-bold">17</span>,
      },
    ],
  },
  {
    id: "total-zz",
    type: "metric",
    title: "Total of ZZ",
    badge: "Sample",
    data: [
      {
        id: "total-value",
        content: <span className="text-3xl font-bold">917</span>,
      },
    ],
  },

  // 🔹 VISUAL / CHART BLOCKS
  {
    id: "line-chart",
    type: "chart",
    title: "Line Chart",
    badge: "Sample",
    data: [
      {
        id: "line",
        content: (
          <img
            src={LineChartSample}
            alt="line chart"
            className="h-full w-full object-contain"
          />
        ),
      },
    ],
  },
  {
    id: "bar-chart",
    type: "chart",
    title: "Bar Chart",
    badge: "Sample",
    data: [
      {
        id: "bar",
        content: (
          <img
            src={BarChartSample}
            alt="bar chart"
            className="h-full w-full object-contain"
          />
        ),
      },
    ],
  },
  {
    id: "pie-chart",
    type: "chart",
    title: "Pie Chart",
    badge: "Sample",
    data: [
      {
        id: "pie",
        content: (
          <img
            src={PieChartSample}
            alt="pie chart"
            className="h-full w-full object-contain"
          />
        ),
      },
    ],
  },
  {
    id: "donut-chart",
    type: "chart",
    title: "Donut Chart",
    badge: "Sample",
    data: [
      {
        id: "donut",
        content: (
          <img
            src={DonutChartSample}
            alt="donut chart"
            className="h-full w-full object-contain"
          />
        ),
      },
    ],
  },
] satisfies readonly ReportContainer[];
