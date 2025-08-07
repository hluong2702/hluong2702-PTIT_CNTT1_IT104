"use strict";
;
const calculateOrderTotal = (order) => {
    const { items } = order;
    let total = 0;
    for (const item of items) {
        total += item.product.price * item.quantity;
    }
    return total;
};
const printOrder = (order) => {
    const { items } = order;
    console.log(`Đơn hàng: ${order.orderId}`);
    console.log(`Khách hàng: ${order.customerName}`);
    console.log(`Sản phẩm:`);
    items.forEach(value => {
        console.log(`${value.product.name} x ${value.quantity} -> ${value.quantity * value.product.price}`);
    });
    console.log("Tổng cộng: " + calculateOrderTotal(order));
    console.log("Ghi chú: " + order.note);
};
const ListOrder = {
    orderId: "O001",
    customerName: "Nguyen Van A",
    items: [
        {
            product: { id: "P001", name: "Laptop Dell", price: 300000 },
            quantity: 2
        },
        {
            product: { id: "P002", name: "Mouse Logitech", price: 50000 },
            quantity: 3
        }
    ],
    note: "Giao hàng trước 6h chiều"
};
printOrder(ListOrder);
