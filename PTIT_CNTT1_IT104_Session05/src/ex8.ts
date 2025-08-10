class Book2 {
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

class Library2 {
    books: Book2[];

    constructor() {
        this.books = [];
    }

    addBook = (newBook: Book2): void => {
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