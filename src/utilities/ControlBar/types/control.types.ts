export type DateRangeValue = {
  start: string; // ISO date
  end: string;
  preset?: "today" | "7d" | "30d" | "month" | "custom";
};

export type ControlItem =
  | {
      type: "button";
      label: string;
      onClick: () => void;
    }
  | {
      type: "toggle";
      label: string;
      value: boolean;
      onChange: (v: boolean) => void;
    }
  | {
      type: "date-range";
      label: string;
      value: DateRangeValue;
      onApply: (range: DateRangeValue) => void;
    };
