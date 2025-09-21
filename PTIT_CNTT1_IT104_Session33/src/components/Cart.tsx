import React from "react";
import { Card, Badge, Empty } from "antd";
import { ShoppingCartOutlined } from "@ant-design/icons";
import type { CartItem as CartItemType } from "../types";
import CartItem from "./CartItem";
import CartSummary from "./CartSummary";

interface CartProps {
  cart: CartItemType[];
  onUpdateQuantity: (id: number, quantity: number) => void;
  onRemove: (id: number) => void;
  onCheckout: () => void;
  onClearCart: () => void;
}

const Cart: React.FC<CartProps> = ({ cart, onUpdateQuantity, onRemove, onCheckout, onClearCart }) => {
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="sticky top-6">
      <Card
        title={
          <div className="flex items-center space-x-3">
            <Badge count={totalItems} showZero>
              <ShoppingCartOutlined className="text-2xl text-blue-600" />
            </Badge>
            <span className="text-xl font-semibold">Giỏ hàng</span>
          </div>
        }
        className="shadow-lg"
      >
        <div className="space-y-4">
          {cart.length === 0 ? (
            <Empty description="Giỏ hàng của bạn đang trống" image={Empty.PRESENTED_IMAGE_SIMPLE} />
          ) : (
            <>
              <div className="space-y-3 max-h-96 overflow-y-auto">
                {cart.map((item) => (
                  <CartItem key={item.id} item={item} onUpdateQuantity={onUpdateQuantity} onRemove={onRemove} />
                ))}
              </div>
              <CartSummary cart={cart} onCheckout={onCheckout} onClearCart={onClearCart} />
            </>
          )}
        </div>
      </Card>
    </div>
  );
};

export default Cart;
