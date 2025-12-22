import { REPORT } from "../../features/ReportPage/report.config";

const Report = () => {
  const metrics = REPORT.filter((r) => r.type === "metric");
  const charts = REPORT.filter((r) => r.type === "chart");

  return (
    <div className="flex flex-wrap gap-4 ">
      {/* 🔹 METRIC BLOCKS (TOP) */}
      {metrics.map((group) => (
        <div key={group.id} className="report-block report-metric gap-2">
          <h2 className="block-title">
            {group.title}
            {group.badge && (
              <span className="bg-highlight text-gray-800 text-xs py-1 px-2 rounded-md">
                {group.badge}
              </span>
            )}
          </h2>

          {group.data.map((item) => (
            <div key={item.id} className="flex items-center ">
              {item.content}
            </div>
          ))}
        </div>
      ))}

      {/* 🔹 CHART BLOCKS (BOTTOM) */}
      {charts.map((group) => (
        <div key={group.id} className="report-block report-chart gap-2 ">
          <h2 className="block-title">
            {group.title}
            {group.badge && (
              <span className="bg-highlight text-gray-800 text-xs py-1 px-2 rounded-md">
                {group.badge}
              </span>
            )}
          </h2>

          {group.data.map((item) => (
            <div
              key={item.id}
              className="flex justify-center overflow-hidden h-56"
            >
              {item.content}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Report;
