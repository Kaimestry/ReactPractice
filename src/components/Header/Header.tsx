// Header.tsx
import { ControlBar } from "../../utilities/ControlBar/ControlBar";
import PageTitle from "../../utilities/PageTitle";
import { useCurrentRoute } from "../../hooks/useCurrentRoute";

const Header = () => {
  const route = useCurrentRoute(); // ✅ THIS WAS MISSING

  return (
    <header className="flex items-center justify-between px-4 py-2 border-b">
      <PageTitle />
      <ControlBar
        controls={route && "controls" in route ? route.controls : []}
      />
    </header>
  );
};

export default Header;
