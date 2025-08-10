class Book3 {
    private title: string;
    private author: string;
    private id: number;

    constructor(title: string, author: string, id: number) {
        this.title = title;
        this.author = author;
        this.id = id;
    }

    getId = (): number => {
        return this.id;
    };

    getTitle = (): string => {
        return this.title;
    };

    getAuthor = (): string => {
        return this.author;
    };

    setTitle = (newTitle: string): void => {
        this.title = newTitle;
    };

    setAuthor = (newAuthor: string): void => {
        this.author = newAuthor;
    };
}

class Library3 {
    books: Book3[];

    constructor() {
        this.books = [];
    }

    addBook = (newBook: Book3): void => {
        this.books.push(newBook);
    };

    display = (): void => {
        this.books.forEach((element) => {
            console.log(`${element.getId()}`);
            console.log(`${element.getTitle()}`);
            console.log(`${element.getAuthor()}`);
        });
    };

    editBook = (id: number, newTitle: string, newAuthor: string): void => {
        const book = this.books.find((element) => element.getId() === id);
        if (!book) {
            console.log(`Khong tim thay sach co id ${id}`);
            return;
        }
        book.setTitle(newTitle);
        book.setAuthor(newAuthor);
        this.display();
    };

    searchBook = (searchTitle: string): void => {
        const foundBooks = this.books.filter((element) =>
            element.getTitle().toLowerCase().includes(searchTitle.toLowerCase())
        );
        foundBooks.forEach((element) => {
            console.log(`${element.getId()}`);
            console.log(`${element.getTitle()}`);
            console.log(`${element.getAuthor()}`);
        });
    };

    deleteBook = (id:number) => {
        const bookIndex = this.books.findIndex((element) => element.getId() === id)
        if(bookIndex === -1) return
        this.books.splice(bookIndex,1);
    }
    updateBook = (id:number,newTitle:string,newAuthor:string) => {
        const book = this.books.find((element) => element.getId() === id);
        if(!book) return
        book.setAuthor(newAuthor);
        book.setTitle(newTitle);
        this.display();
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
bookss1.deleteBook(3)
bookss1.updateBook(4,"hoho","Kim Dong");