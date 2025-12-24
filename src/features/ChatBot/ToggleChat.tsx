import ToggleButton from "../../utilities/ToggleButton";
import { MdKeyboardArrowDown } from "react-icons/md";

//! If want to change default state as open/close => change it inside Nav.tsx
type ToggleChatProps = {
  open: boolean;
  onToggle: (open: boolean) => void;
};

const ToggleChat = ({ open, onToggle }: ToggleChatProps) => {
  return (
    <ToggleButton value={open} onToggle={onToggle} className="action-icon">
      {(isOpen) => (
        <MdKeyboardArrowDown
          className={`transition-transform ${
            isOpen ? "rotate-0" : "rotate-180"
          }`}
        />
      )}
    </ToggleButton>
  );
};

export default ToggleChat;
