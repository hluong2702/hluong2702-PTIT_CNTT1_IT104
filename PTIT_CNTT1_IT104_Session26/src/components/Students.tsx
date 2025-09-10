import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Input, Button, Card } from "antd";

export default function Students() {
  const [searchParam, setSearchParam] = useSearchParams();
  const [inputValue, setInputValue] = useState("");

  const handleSearch = () => {
    if (inputValue.trim() === "") return;
    setSearchParam({ studentName: inputValue });
  };

  return (
    <div style={{ maxWidth: 500, margin: "40px auto" }}>
        <Input
          placeholder="Nhập từ khoá tìm kiếm"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onPressEnter={handleSearch}
          style={{ marginBottom: 12 }}
        />
        <Button type="primary" block onClick={handleSearch}>
          Tìm kiếm
        </Button>

        <div style={{ marginTop: 20 }}>
          <strong>Kết quả:</strong>{" "}
          {searchParam.get("studentName") || "Chưa tìm kiếm"}
        </div>
    </div>
  );
}
