import React from "react";
import { Button, InputNumber, message } from "antd";
import { MinusOutlined, PlusOutlined, DeleteOutlined } from "@ant-design/icons";
import type { CartItem as CartItemType } from "../types";
import { formatCurrency } from "../utils/formatters";

interface CartItemProps {
  item: CartItemType;
  onUpdateQuantity: (id: number, quantity: number) => void;
  onRemove: (id: number) => void;
}

const CartItem: React.FC<CartItemProps> = ({ item, onUpdateQuantity, onRemove }) => {
  const handleQuantityChange = (value: number | null) => {
    if (value) {
      onUpdateQuantity(item.id, value);
    }
  };

  const handleRemove = () => {
    onRemove(item.id);
    message.success(`Đã xóa ${item.name} khỏi giỏ hàng!`);
  };

  return (
    <div className="flex items-center justify-between p-4 bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex items-center space-x-4">
        <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded-lg" />
        <div>
          <h4 className="font-semibold text-gray-800">{item.name}</h4>
          <p className="text-red-500 font-medium">{formatCurrency(item.price)}</p>
        </div>
      </div>

      <div className="flex items-center space-x-3">
        <div className="flex items-center space-x-2">
          <Button
            icon={<MinusOutlined />}
            size="small"
            onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
          />
          <InputNumber
            min={1}
            max={99}
            value={item.quantity}
            onChange={handleQuantityChange}
            className="w-16 text-center"
            size="small"
          />
          <Button
            icon={<PlusOutlined />}
            size="small"
            onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
          />
        </div>

        <Button icon={<DeleteOutlined />} danger size="small" onClick={handleRemove} />
      </div>
    </div>
  );
};

export default CartItem;
