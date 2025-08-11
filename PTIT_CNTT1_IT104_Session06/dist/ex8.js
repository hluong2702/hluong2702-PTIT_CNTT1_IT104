"use strict";
class Book {
    constructor(id, title, author, stock, status) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.stock = stock;
        this.status = status;
    }
}
class Member {
    constructor(id, name, contact, status) {
        this.id = id;
        this.name = name;
        this.contact = contact;
        this.books = [];
        this.status = status;
    }
}
class LendedBook {
    constructor(memberId, bookId, duaDate) {
        this.memberId = memberId;
        this.bookId = bookId;
        this.duaDate = duaDate;
    }
}
class Library {
    constructor() {
        this.books = [];
        this.members = [];
    }
    addBook(book) {
        this.books.push(book);
    }
    showBook() {
        this.books.forEach(book => {
            console.log(`${book.id}-${book.title}-${book.author}-${book.stock}-${book.status}`);
        });
    }
}
const library = new Library();
const book1 = new Book("B001", "Lão Hạc", "Nam Cao", 5, "Có sẵn");
const book2 = new Book("B002", "Số Đỏ", "Vũ Trọng Phụng", 3, "Khong có");
library.addBook(book1);
library.addBook(book2);
library.showBook();
