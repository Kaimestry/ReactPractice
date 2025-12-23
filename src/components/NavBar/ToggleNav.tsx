import ToggleButton from "../../utilities/ToggleButton";
import { TbLayoutSidebarLeftCollapseFilled } from "react-icons/tb";

type ToggleNavProps = {
  open: boolean;
  onToggle: (open: boolean) => void;
};

const ToggleNav = ({ open, onToggle }: ToggleNavProps) => {
  return (
    <ToggleButton
      defaultValue={open}
      onToggle={onToggle}
      className="action-icon"
    >
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
