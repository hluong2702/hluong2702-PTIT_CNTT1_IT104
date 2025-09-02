import React, { useState, useEffect } from "react";

export default function PageTitle() {
  const [name, setName] = useState("");
  const [input, setInput] = useState("");

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  useEffect(() => {
    setName(input);
  }, [input]);

  return (
    <div>
      <span>
        Chào mừng {name ? name : "bạn"} đến với trang của chúng tôi
      </span>
      <input
        type="text"
        placeholder="Name..."
        onChange={handleChange}
        value={input}
      />
    </div>
  );
}
