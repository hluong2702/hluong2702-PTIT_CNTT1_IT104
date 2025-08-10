"use strict";
class Book3 {
    constructor(title, author, id) {
        this.getId = () => {
            return this.id;
        };
        this.getTitle = () => {
            return this.title;
        };
        this.getAuthor = () => {
            return this.author;
        };
        this.setTitle = (newTitle) => {
            this.title = newTitle;
        };
        this.setAuthor = (newAuthor) => {
            this.author = newAuthor;
        };
        this.title = title;
        this.author = author;
        this.id = id;
    }
}
class Library3 {
    constructor() {
        this.addBook = (newBook) => {
            this.books.push(newBook);
        };
        this.display = () => {
            this.books.forEach((element) => {
                console.log(`${element.getId()}`);
                console.log(`${element.getTitle()}`);
                console.log(`${element.getAuthor()}`);
            });
        };
        this.editBook = (id, newTitle, newAuthor) => {
            const book = this.books.find((element) => element.getId() === id);
            if (!book) {
                console.log(`Khong tim thay sach co id ${id}`);
                return;
            }
            book.setTitle(newTitle);
            book.setAuthor(newAuthor);
            this.display();
        };
        this.searchBook = (searchTitle) => {
            const foundBooks = this.books.filter((element) => element.getTitle().toLowerCase().includes(searchTitle.toLowerCase()));
            foundBooks.forEach((element) => {
                console.log(`${element.getId()}`);
                console.log(`${element.getTitle()}`);
                console.log(`${element.getAuthor()}`);
            });
        };
        this.deleteBook = (id) => {
            const bookIndex = this.books.findIndex((element) => element.getId() === id);
            if (bookIndex === -1)
                return;
            this.books.splice(bookIndex, 1);
        };
        this.updateBook = (id, newTitle, newAuthor) => {
            const book = this.books.find((element) => element.getId() === id);
            if (!book)
                return;
            book.setAuthor(newAuthor);
            book.setTitle(newTitle);
            this.display();
        };
        this.books = [];
    }
}
const bookss1 = new Library3();
const book20 = new Book3("bibabibo", "Leo", 1);
const book21 = new Book3("pikachu", "Ok", 2);
const book25 = new Book3("Nha gia kim", "Kim dong", 3);
const book23 = new Book3("Truyen kieu", "Nguyen Du", 4);
const book24 = new Book3("Ba do", "Avege", 5);
bookss1.addBook(book20);
bookss1.addBook(book21);
bookss1.addBook(book25);
bookss1.addBook(book23);
bookss1.addBook(book24);
bookss1.editBook(3, "okookok", "santoshi");
bookss1.searchBook("pikachu");
bookss1.deleteBook(3);
bookss1.updateBook(4, "hoho", "Kim Dong");
