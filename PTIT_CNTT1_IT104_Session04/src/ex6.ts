type Product = {
    id:string,
    name:string,
    price:number,
    category:{
        id:string,
        name:string;
    };
    discount?:number;

}

const listProduct : Product[] = [
    {
        id:"1",
        name:"Ao so mi",
        price:300000,
        category:{
            id:"MX01",
            name:"Thoi trang nam"
        },
        discount:10
    },
    {
        id:"2",
        name:"Ao mixer",
        price:200000,
        category:{
            id:"MX02",
            name:"Thoi trang nam"
        },
        discount:20
    },
    {
        id:"3",
        name:"Ao bibabibo",
        price:100000,
        category:{
            id:"MX03",
            name:"Thoi trang nam"
        },
    }
];

const getFinalPrice = (product : Product) =>{
    if (product.discount) {
        return product.price * (product.discount /100);
    }
    return product.discount;
}

const printProductInfo = (product : Product) =>{
    console.log(`Ten: ${product.name}\n Gia goc: ${product.price}\n Gia sau giam: ${getFinalPrice}\n Danh muc: ${product.category.name}`);
}

listProduct.forEach(product => printProductInfo(product));
