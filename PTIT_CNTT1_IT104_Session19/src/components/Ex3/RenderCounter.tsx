import React, { useEffect, useRef, useState } from "react";

export default function RenderCounter() {
  const [input, setInput] = useState<string>("");
  const renderCount = useRef(0);

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  useEffect(() => {
    renderCount.current = renderCount.current + 1;
  });

  return (
    <div>
      <span>Input:</span>
      <input type="text" onChange={handleInput} />
      <span style={{ display: "block" }}>
        Component đã render: {renderCount.current} lần
      </span>
    </div>
  );
}