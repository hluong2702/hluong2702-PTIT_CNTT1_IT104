import React from "react";
import { Card, Button, message } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import type { Product } from "../types";
import { formatCurrency } from "../utils/formatters";

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToCart }) => {
  const handleAddToCart = () => {
    onAddToCart(product);
    message.success(`Đã thêm ${product.name} vào giỏ hàng!`);
  };

  return (
    <Card
      hoverable
      className="h-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
      cover={
        <div className="relative overflow-hidden">
          <img
            alt={product.name}
            src={product.image}
            className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
          />
          <div className="absolute top-2 right-2 bg-blue-500 text-white px-2 py-1 rounded-full text-xs">
            {product.category}
          </div>
        </div>
      }
      actions={[
        <Button
          key="add"
          type="primary"
          icon={<PlusOutlined />}
          onClick={handleAddToCart}
          className="bg-gradient-to-r from-blue-500 to-purple-600 border-none hover:from-blue-600 hover:to-purple-700"
          size="large"
        >
          Thêm vào giỏ
        </Button>,
      ]}
    >
      <Card.Meta
        title={
          <div className="flex justify-between items-center">
            <span className="text-lg font-semibold text-gray-800">{product.name}</span>
          </div>
        }
        description={
          <div className="space-y-2">
            <p className="text-gray-600 text-sm line-clamp-2">{product.description}</p>
            <div className="text-xl font-bold text-red-500">{formatCurrency(product.price)}</div>
          </div>
        }
      />
    </Card>
  );
};

export default ProductCard;
