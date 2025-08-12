"use strict";
class MenuItem {
    constructor(id, name, price) {
        this.id = id;
        this.name = name;
        this.price = price;
    }
}
class Table {
    constructor(id, capacity) {
        this.id = id;
        this.capacity = capacity;
        this.available = true;
    }
}
class Reservation {
    constructor(id, customerName, tableId) {
        this.id = id;
        this.customerName = customerName;
        this.tableId = tableId;
    }
}
class Order {
    constructor(id, tableId, items) {
        this.id = id;
        this.tableId = tableId;
        this.items = items;
    }
    getTotal() {
        return this.items.reduce((total, item) => total + item.price, 0);
    }
}
class Restaurant {
    constructor() {
        this.menu = [];
        this.tables = [];
        this.reservations = [];
        this.orders = [];
    }
    addMenuItem(item) {
        this.menu.push(item);
    }
    addTable(table) {
        this.tables.push(table);
    }
    makeReservation(customerName, tableId) {
        const table = this.tables.find(table => table.id === tableId);
        if (!table) {
            console.log("Ban khong ton tai");
            return;
        }
        if (!table.available) {
            console.log(`Ban ${tableId} da dc dat`);
            return;
        }
        table.available = false;
        const reservationId = `Res ${this.reservations.length + 1}`;
        this.reservations.push(new Reservation(reservationId, customerName, tableId));
    }
    placeOrder(tableId, items) {
        const table = this.tables.find(table => table.id === tableId);
        if (!table) {
            console.log(`Ban ${tableId} khong ton tai`);
            return;
        }
        if (table.available) {
            console.log(`Ban ${tableId} chua dc dat`);
            return;
        }
        for (const item of items) {
            if (!this.menu.some((menuItem) => menuItem.id === item.id)) {
                console.log(`Mon ${item.name} khong co trong menu`);
            }
        }
        const orderId = `${this.orders.length + 1}`;
        this.orders.push(new Order(orderId, tableId, items));
    }
    generateBill(tableId) {
        const table = this.tables.find(table => table.id === tableId);
        if (!table) {
            console.log(`Ban ${tableId} khong ton tai`);
            return 0;
        }
        const tableOrders = this.orders.filter((order) => order.tableId === tableId);
        if (tableOrders.length === 0) {
            console.log(`Ban ${tableId} khong co don hang nao`);
            return 0;
        }
        const total = tableOrders.reduce((sum, order) => sum + order.getTotal(), 0);
        table.available = true;
        console.log(`Hoa don ban ${tableId}: ${total}`);
        this.orders = this.orders.filter((order) => order.tableId !== tableId);
        return total;
    }
}
const restaurant = new Restaurant();
// Them mon an
restaurant.addMenuItem(new MenuItem("1", "Pizza", 10));
restaurant.addMenuItem(new MenuItem("2", "Pasta", 8));
// Them ban
restaurant.addTable(new Table("T1", 4));
restaurant.addTable(new Table("T2", 6));
// Đat ban
restaurant.makeReservation("John", "T1");
// Đat don hang
restaurant.placeOrder("T1", [
    new MenuItem("1", "Pizza", 10),
    new MenuItem("3", "Burger", 12)
]);
restaurant.placeOrder("T2", [new MenuItem("1", "Pizza", 10)]);
restaurant.placeOrder("T1", [
    new MenuItem("1", "Pizza", 10),
    new MenuItem("2", "Pasta", 8)
]);
restaurant.generateBill("T1");
