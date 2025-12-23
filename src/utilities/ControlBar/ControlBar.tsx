import type { ControlItem } from "./types/control.types";
import { DateRangeControl } from "./types/DateRangeControl";

export const ControlBar = ({ controls }: { controls?: ControlItem[] }) => {
  if (!controls?.length) return null;

  return (
    <div className="flex items-center gap-2">
      {controls.map((control) => {
        switch (control.type) {
          case "date-range":
            return (
              <DateRangeControl
                key={control.label}
                label={control.label}
                value={control.value}
                onApply={control.onApply}
              />
            );
          case "button":
            return (
              <button
                className="bg-highlight p-2 font-bold text-sm text-gray-800 rounded-md"
                key={control.label}
                onClick={control.onClick}
              >
                {control.label}
              </button>
            );
          case "toggle":
            return (
              <label key={control.label}>
                <input
                  type="checkbox"
                  checked={control.value}
                  onChange={(e) => control.onChange(e.target.checked)}
                />
                {control.label}
              </label>
            );
        }
      })}
    </div>
  );
};
