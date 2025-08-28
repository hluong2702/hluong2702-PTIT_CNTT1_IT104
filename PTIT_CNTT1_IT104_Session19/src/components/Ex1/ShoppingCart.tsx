import React, { useMemo } from "react";

export default function Ex1() {
  const cartItems = [
    { id: 1, name: "A", price: 100000, quantity: 1 },
    { id: 2, name: "B", price: 200000, quantity: 2 },
  ];
  const totalValue = useMemo(() => {
    return cartItems.reduce((sum, cart) => sum + cart.price * cart.quantity, 0);
  }, [cartItems]);
  return <>Total: {totalValue}
  </>;
}