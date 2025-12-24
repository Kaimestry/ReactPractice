import ToggleButton from "../../utilities/ToggleButton";
import { TbLayoutSidebarLeftCollapseFilled } from "react-icons/tb";

//! If want to change default state as open/close => change it inside Nav.tsx
type ToggleNavProps = {
  open: boolean;
  onToggle: (open: boolean) => void;
};

const ToggleNav = ({ open, onToggle }: ToggleNavProps) => {
  return (
    <ToggleButton value={open} onToggle={onToggle} className="action-icon">
      {(isOpen) => (
        <TbLayoutSidebarLeftCollapseFilled
          className={`transition-transform ${
            isOpen ? "rotate-0" : "rotate-180"
          }`}
        />
      )}
    </ToggleButton>
  );
};

export default ToggleNav;
