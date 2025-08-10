class Book{
    private title:string;
    private author:string;

    constructor(title:string,author:string){
        this.title = title;
        this.author = author;
    }

    getTitle(): string {
        return this.title;
    }

    getAuthor(): string {
        return this.author;
    }
}

class Library{
    books:Book[];

    constructor() {
        this.books = [];
    }

    addBook(book: Book): void {
        this.books.push(book);
    }

    showBooks(): void {
        this.books.forEach((book) => {
            console.log(`${book.getTitle()} -${book.getAuthor()}`);
        });
    }
}

const book1 = new Book("Nha gia kim", "bibabibo");
const book2 = new Book("ABCD","Cach de hoc gioi");
const library = new Library();
library.addBook(book1);
library.addBook(book2);
library.showBooks();
