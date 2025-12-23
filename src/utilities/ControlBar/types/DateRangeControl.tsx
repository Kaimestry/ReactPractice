// utilities/controls/DateRangeControl.tsx
import { useState } from "react";
import type { DateRangeValue } from "./control.types";

type Props = {
  label: string;
  value: DateRangeValue;
  onApply: (v: DateRangeValue) => void;
};

const PRESETS = [
  { label: "Today", preset: "today" },
  { label: "Last 7 days", preset: "7d" },
  { label: "Last 30 days", preset: "30d" },
  { label: "This month", preset: "month" },
] as const;

export const DateRangeControl = ({ label, value, onApply }: Props) => {
  const [open, setOpen] = useState(false);
  const [local, setLocal] = useState(value);

  return (
    <div className="relative">
      {/* Trigger */}
      <button
        className="px-3 py-1 text-sm rounded-md bg-muted hover:bg-highlight"
        onClick={() => setOpen(!open)}
      >
        📅 {label}
      </button>

      {/* Popover */}
      {open && (
        <div className="absolute right-0 mt-2 w-64 rounded-md border bg-main p-3 shadow-lg z-50">
          <div className="text-sm font-semibold mb-2">Period</div>

          {/* Presets */}
          <div className="flex flex-col gap-1 mb-2">
            {PRESETS.map((p) => (
              <button
                key={p.preset}
                className="text-left px-2 py-1 rounded hover:bg-muted"
                onClick={() => setLocal({ ...local, preset: p.preset })}
              >
                {p.label}
              </button>
            ))}
          </div>

          {/* Custom range */}
          <div className="flex flex-col gap-2 text-sm">
            <label>
              From
              <input
                type="date"
                value={local.start}
                onChange={(e) =>
                  setLocal({
                    ...local,
                    start: e.target.value,
                    preset: "custom",
                  })
                }
                className="w-full border rounded px-2 py-1"
              />
            </label>

            <label>
              To
              <input
                type="date"
                value={local.end}
                onChange={(e) =>
                  setLocal({ ...local, end: e.target.value, preset: "custom" })
                }
                className="w-full border rounded px-2 py-1"
              />
            </label>
          </div>

          {/* Actions */}
          <div className="flex justify-end gap-2 mt-3">
            <button
              className="text-sm px-2 py-1"
              onClick={() => setOpen(false)}
            >
              Cancel
            </button>
            <button
              className="text-sm px-3 py-1 rounded bg-highlight text-black"
              onClick={() => {
                onApply(local);
                setOpen(false);
              }}
            >
              Apply
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
