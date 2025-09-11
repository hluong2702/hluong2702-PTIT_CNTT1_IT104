import React from "react";
interface Product {
  name: string;
  price: string;
}
const product: Product[] = [
  { name: "Laptop Dell Inspiration", price: "1000000" },
  { name: "Iphone 14 Pro", price: "20000000" },
];
export default function ProductList() {

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "12px",
          backgroundColor: "blue",
        }}
      >
        <span
          style={{ fontSize: "30px", fontWeight: "500", paddingTop: "10px" }}
        >
          Trang chi tiết sản phẩm
        </span>
        <span>Danh sách sản phẩm</span>
      </div>
      <div style={{ display: "flex", justifyContent: "flex-start" }}>
        <h2>Danh sách sản phẩm</h2>
      </div>
      <div style={{ display: "flex", gap: "20px" }}>
        {product.map((products,index) => (
          <div
            style={{
              border: "1px solid whitesmoke",
              width: "fit-content",
              display: "flex",
              flexDirection: "column",
              gap: "4px",
              padding: "3px",
              textAlign: "start"
            }}
          >
            <h5>{products.name}</h5>
            <span>Giá: {Number(products.price).toLocaleString('vi', {style : 'currency', currency : 'VND'})}</span>
            <a href={`/productDetail/${index}`}>Xem chi tiết</a>
          </div>
        ))}
      </div>
    </>
  );
}
