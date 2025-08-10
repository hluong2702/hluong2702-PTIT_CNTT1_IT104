"use strict";
class Book {
    constructor(title, author) {
        this.title = title;
        this.author = author;
    }
    getTitle() {
        return this.title;
    }
    getAuthor() {
        return this.author;
    }
}
class Library {
    constructor() {
        this.books = [];
    }
    addBook(book) {
        this.books.push(book);
    }
    showBooks() {
        this.books.forEach((book) => {
            console.log(`${book.getTitle()} -${book.getAuthor()}`);
        });
    }
}
const book1 = new Book("Nha gia kim", "bibabibo");
const book2 = new Book("ABCD", "Cach de hoc gioi");
const library = new Library();
library.addBook(book1);
library.addBook(book2);
library.showBooks();
