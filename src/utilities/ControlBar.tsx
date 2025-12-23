import type { ControlItem } from "../routes.config";

export const ControlBar = ({ controls }: { controls?: ControlItem[] }) => {
  if (!controls?.length) return null;

  return (
    <div className="flex items-center gap-2">
      {controls.map((c, i) => {
        switch (c.type) {
          case "button":
            return (
              <button key={i} onClick={c.onClick}>
                {c.label}
              </button>
            );
          case "toggle":
            return (
              <label key={i}>
                <input
                  type="checkbox"
                  checked={c.value}
                  onChange={(e) => c.onChange(e.target.checked)}
                />
                {c.label}
              </label>
            );
        }
      })}
    </div>
  );
};
