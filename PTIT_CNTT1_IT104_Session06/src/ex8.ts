class Book {
    id:string;
    title:string;
    author:string;
    stock:number;
    status:string;

    constructor(id:string,title:string,author:string,stock:number,status:string){
        this.id = id;
        this.title = title;
        this.author = author;
        this.stock = stock;
        this.status = status;
    }
}

class Member{
    id:string;
    name:string;
    contact:string;
    books :Book[];
    status:string;

    constructor(id:string,name:string,contact:string,status:string){
        this.id=id;
        this.name = name;
        this.contact = contact;
        this.books = [];
        this.status = status;
    }

}

class LendedBook {
    memberId:string;
    bookId:string;
    duaDate:Date;
    constructor(memberId:string,bookId:string,duaDate:Date) {
        this.memberId = memberId;
        this.bookId = bookId;
        this.duaDate = duaDate;
    }

}

class Library{
    books:Book[];
    members:Member[];

    constructor(){
        this.books = [];
        this.members = [];
    }

    addBook(book:Book):void{
        this.books.push(book);
    }

    showBook():void{
        this.books.forEach(book => {
            console.log(`${book.id}-${book.title}-${book.author}-${book.stock}-${book.status}`);
        })
    }
}

const library = new Library();
const book1 = new Book("B001", "Lão Hạc", "Nam Cao", 5, "Có sẵn");
const book2 = new Book("B002", "Số Đỏ", "Vũ Trọng Phụng", 3, "Khong có");
library.addBook(book1);
library.addBook(book2);
library.showBook();




