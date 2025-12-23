import { useState } from "react";

type ToggleButtonProps = {
  /** Initial state */
  defaultValue?: boolean;

  /** Called whenever toggle changes */
  onToggle?: (value: boolean) => void;

  /** Custom button class */
  className?: string;

  /** Button content (icon / text / JSX) */
  children: React.ReactNode | ((state: boolean) => React.ReactNode);
};

const ToggleButton = ({
  defaultValue = false,
  onToggle,
  className = "",
  children,
}: ToggleButtonProps) => {
  const [state, setState] = useState(defaultValue);

  const toggle = () => {
    setState((prev) => {
      const next = !prev;
      onToggle?.(next);
      return next;
    });
  };

  const content = typeof children === "function" ? children(state) : children;

  return (
    <button
      type="button"
      onClick={toggle}
      className={`${className} ${state ? "active" : ""}`}
      aria-pressed={state}
    >
      {content}
    </button>
  );
};

export default ToggleButton;
