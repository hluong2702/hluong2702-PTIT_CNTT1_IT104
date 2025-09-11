import React from 'react'
import { useNavigate, useParams } from 'react-router-dom';
interface Product {
  name: string;
  price: string;
}
const product: Product[] = [
  { name: "Laptop Dell Inspiration", price: "1000000" },
  { name: "Iphone 14 Pro", price: "20000000" },
];
export default function ProductDetail() {
    const id = useParams();
    const navigate = useNavigate();
  return (
    <div
            style={{
              width: "fit-content",
              display: "flex",
              flexDirection: "column",
              gap: "4px",
              padding: "3px",
              textAlign: "start"
            }}
          >
            <h5>{product[id.id].name}</h5>
            <span>Giá: {Number(product[id.id].price).toLocaleString('vi', {style : 'currency', currency : 'VND'})}</span>
            <div onClick={() => navigate(-1)}>Trở lại</div>
          </div>
  )
}
