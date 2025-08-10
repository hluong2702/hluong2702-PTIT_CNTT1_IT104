"use strict";
class Book1 {
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
class Library1 {
    constructor() {
        this.addBook = (newBook) => {
            this.books.push(newBook);
        };
        this.display = () => {
            this.books.forEach(element => {
                console.log(element.getId());
                console.log(element.getTitle());
                console.log(element.getAuthor());
            });
        };
        this.editBook = (id, newTitle, newAuthor) => {
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
const books = new Library1();
const book11 = new Book1("bibabibo", `Leo`, 1);
const book22 = new Book1("pikachu", `Ok`, 2);
const book3 = new Book1("Nha gia kim", `Kim dong`, 3);
const book4 = new Book1("Truyen kieu", `Nguyen Du`, 4);
const book5 = new Book1("Ba do", `Avege`, 5);
books.addBook(book11);
books.addBook(book22);
books.addBook(book3);
books.addBook(book4);
books.addBook(book5);
books.editBook(3, "okookok", "santoshi");
