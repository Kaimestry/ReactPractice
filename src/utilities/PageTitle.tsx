import { useCurrentRoute } from "../hooks/useCurrentRoute";

const PageTitle = () => {
  const route = useCurrentRoute();

  return (
    <div className="flex justify-center items-center">
      <h1 className="text-center font-bold text-xl">
        {route?.label ?? "Page"}
      </h1>
    </div>
  );
};

export default PageTitle;
