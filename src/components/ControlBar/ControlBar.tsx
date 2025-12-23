import { useCurrentRoute } from "../../hooks/useCurrentRoute";

const ControlBar = () => {
  const route = useCurrentRoute();

  return (
    <div className="border pl-4 pr-8 flex justify-between">
      <div className=""> {route?.label ?? "Page"}</div>
      <div className="">Time Period</div>
    </div>
  );
};

export default ControlBar;
