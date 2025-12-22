import { REPORT } from "../../features/ReportPage/report.config";

const Report = () => {
  const metrics = REPORT.filter((r) => r.type === "metric");
  const charts = REPORT.filter((r) => r.type === "chart");

  return (
    <div className="flex flex-col gap-6">
      {/* 🔹 METRIC ROW */}
      <div className="flex flex-wrap gap-4">
        {metrics.map((group) => (
          <div
            key={group.id}
            className={`report-block report-metric ${
              group.priority ? "priority" : ""
            }`} // 🆕 ADDED: apply priority class from config
          >
            {" "}
            <h2 className="block-title text-highlight">{group.title}</h2>
            {group.data.map((item) => (
              <div key={item.id} className="flex items-center">
                {item.content}
              </div>
            ))}
          </div>
        ))}
      </div>

      {/* 🔹 CHART ROW */}
      <div className="flex flex-wrap gap-4">
        {charts.map((group) => (
          <div
            key={group.id}
            className={`report-block report-chart ${
              group.priority ? "priority" : ""
            }`} // 🆕 ADDED
          >
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
                className="flex justify-center overflow-hidden aspect-video"
              >
                {item.content}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Report;
