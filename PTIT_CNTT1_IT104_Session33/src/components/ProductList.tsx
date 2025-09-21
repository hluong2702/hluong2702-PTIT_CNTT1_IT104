import React from "react";
import { Row, Col, Typography } from "antd";
import type { Product } from "../types";
import ProductCard from "./ProductCard";

const { Title } = Typography;

interface ProductListProps {
  products: Product[];
  onAddToCart: (product: Product) => void;
}

const ProductList: React.FC<ProductListProps> = ({ products, onAddToCart }) => {
  return (
    <div className="mb-8">
      <Title level={2} className="mb-6 text-gray-800 flex items-center">
        🍽️ <span className="ml-2">Menu Sản Phẩm</span>
      </Title>
      <Row gutter={[24, 24]}>
        {products.map((product) => (
          <Col key={product.id} xs={24} sm={12} lg={8}>
            <ProductCard product={product} onAddToCart={onAddToCart} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default ProductList;
