type ToggleButtonProps = {
  value: boolean;
  onToggle?: (value: boolean) => void;
  className?: string;
  children: React.ReactNode | ((state: boolean) => React.ReactNode);
};

const ToggleButton = ({
  value,
  onToggle,
  className = "",
  children,
}: ToggleButtonProps) => {
  const toggle = () => {
    onToggle?.(!value);
  };

  const content = typeof children === "function" ? children(value) : children;

  return (
    <button
      type="button"
      onClick={toggle}
      className={`${className} ${value ? "active" : ""}`}
      aria-pressed={value}
    >
      {content}
    </button>
  );
};

export default ToggleButton;
