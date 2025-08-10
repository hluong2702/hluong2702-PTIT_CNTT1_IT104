"use strict";
class Book2 {
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
class Library2 {
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
        this.books = [];
    }
}
const bookss = new Library2();
const book6 = new Book2("bibabibo", "Leo", 1);
const book7 = new Book2("pikachu", "Ok", 2);
const book8 = new Book2("Nha gia kim", "Kim dong", 3);
const book9 = new Book2("Truyen kieu", "Nguyen Du", 4);
const book10 = new Book2("Ba do", "Avege", 5);
bookss.addBook(book6);
bookss.addBook(book7);
bookss.addBook(book8);
bookss.addBook(book9);
bookss.addBook(book10);
bookss.editBook(3, "okookok", "santoshi");
bookss.searchBook("pikachu");
