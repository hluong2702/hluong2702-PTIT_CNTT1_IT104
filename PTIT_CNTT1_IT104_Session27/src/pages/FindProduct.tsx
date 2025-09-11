import React, { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
interface IProducts {
  id: number;
  name: string;
  price: number;
  description: string;
}

const products: IProducts[] = [
  {
    id: 1,
    name: "iPhone 15 Pro",
    price: 29990000,
    description: "Điện thoại cao cấp với chip A17 Pro và camera tiên tiến.",
  },
  {
    id: 2,
    name: "Samsung Galaxy S23 Ultra",
    price: 27990000,
    description: "Smartphone flagship của Samsung với camera 200MP.",
  },
  {
    id: 3,
    name: "MacBook Air M2",
    price: 25990000,
    description: "Laptop mỏng nhẹ, với chip Apple M2 hiệu năng mạnh mẽ.",
  },
  {
    id: 4,
    name: "Dell XPS 13",
    price: 25990000,
    description: "Laptop siêu mỏng với màn hình InfinityEdge sắc nét.",
  },
  {
    id: 5,
    name: "iPad Pro 12.9",
    price: 31990000,
    description: "Máy tính bảng cao cấp với màn hình Liquid Retina XDR.",
  },
];

export default function FindProduct() {
  const [searchParams] = useSearchParams();
  const productFound = searchParams.get("productName");
  const navigate = useNavigate();
  const [input, setInput] = useState("");
  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };
  const handleSubmit = () => {
    navigate(`/findProduct?productName=${input}`);
  };
  return (
    <>
      <div>
        <input type="text" onChange={handleInput} />
        <button onClick={handleSubmit}>Tìm Kiếm</button>
      </div>
      <div
        style={{
          width: "fit-content",
          display: "flex",
          flexDirection: "column",
          gap: "4px",
          padding: "3px",
          textAlign: "start",
        }}
      >
        <h2>Tên: {products.find(product => product.name === productFound)?.name}</h2>
        <span>Giá: {products.find(product => product.name === productFound)?.price}</span>
        <span>Mô tả: {products.find(product => product.name === productFound)?.description}</span>
      </div>
    </>
  );
}
