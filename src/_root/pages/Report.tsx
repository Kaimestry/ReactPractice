import { REPORT } from "../../features/ReportPage/report.config";

const Report = () => {
  return (
    <div className="flex flex-wrap gap-4">
      {REPORT.map((group) => (
        <div key={group.id} className="report-item">
          <h2 className="border text-center">{group.title}</h2>

          {group.items.map((item) => (
            <div key={item.id}>{item.content}</div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Report;
