import React from "react";
import { Button, Typography } from "antd";
import type { CartItem } from "../types";
import { formatCurrency } from "../utils/formatters";

const { Text } = Typography;

interface CartSummaryProps {
  cart: CartItem[];
  onCheckout: () => void;
  onClearCart: () => void;
}

const CartSummary: React.FC<CartSummaryProps> = ({ cart, onCheckout, onClearCart }) => {
  const totalAmount = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-6 rounded-lg border">
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <Text className="text-gray-600">Tổng số lượng:</Text>
          <Text className="font-semibold">{totalItems} sản phẩm</Text>
        </div>

        <div className="flex justify-between items-center text-lg">
          <Text className="font-semibold">Tổng tiền:</Text>
          <Text className="font-bold text-red-500 text-xl">{formatCurrency(totalAmount)}</Text>
        </div>

        <div className="border-t pt-4 space-y-3">
          <Button
            type="primary"
            size="large"
            onClick={onCheckout}
            className="w-full bg-gradient-to-r from-green-500 to-green-600 border-none hover:from-green-600 hover:to-green-700 h-12 text-lg font-semibold"
            disabled={cart.length === 0}
          >
            💳 Thanh toán ngay
          </Button>

          <Button size="large" onClick={onClearCart} className="w-full h-10" disabled={cart.length === 0}>
            🗑️ Xóa tất cả
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CartSummary;
