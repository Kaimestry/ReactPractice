import { useState } from "react";

const ToggleButton = () => {
  const [state, setState] = useState(true);

  const toggleEvent = () => {
    setState((prev) => !prev);
  };

  return (
    <div>
      <p>{state ? "close" : "open"}</p>
      <button
        className="bg-green-500 px-4 py-2 rounded text-white"
        type="button"
        onClick={toggleEvent}
      >
        Button
      </button>
    </div>
  );
};

export default ToggleButton;
