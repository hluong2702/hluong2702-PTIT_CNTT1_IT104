"use strict";
const listProduct = [
    {
        id: "1",
        name: "Ao so mi",
        price: 300000,
        category: {
            id: "MX01",
            name: "Thoi trang nam"
        },
        discount: 10
    },
    {
        id: "2",
        name: "Ao mixer",
        price: 200000,
        category: {
            id: "MX02",
            name: "Thoi trang nam"
        },
        discount: 20
    },
    {
        id: "3",
        name: "Ao bibabibo",
        price: 100000,
        category: {
            id: "MX03",
            name: "Thoi trang nam"
        },
    }
];
const getFinalPrice = (product) => {
    if (product.discount) {
        return product.price * (product.discount / 100);
    }
    return product.discount;
};
const printProductInfo = (product) => {
    console.log(`Ten: ${product.name}\n Gia goc: ${product.price}\n Gia sau giam: ${getFinalPrice}\n Danh muc: ${product.category.name}`);
};
listProduct.forEach(product => printProductInfo(product));
