class Book1{
    private title:string;
    private author:string;
    private id:number
    constructor(title:string,author:string,id:number){
        this.title = title;
        this.author = author;
        this.id = id
    }   
    getId = () => {
        return this.id
    }
    getTitle = () => {
        return this.title
    }

    getAuthor = () => {
        return this.author
    }
    setTitle = (newTitle:string) => {
        this.title = newTitle
    }
    setAuthor = (newAuthor:string) => {
        this.author = newAuthor
    }
}

class Library1{
    books:Book1[];
    constructor(){
        this.books = [];
    }

    addBook = (newBook:Book1) => {
        this.books.push(newBook)
    }

    display = ():void => {
        this.books.forEach(element => {
            console.log(element.getId());
            console.log(element.getTitle());
            console.log(element.getAuthor());
        });
    }
    editBook = (id:number,newTitle:string,newAuthor:string) => {
        const book = this.books.find((element) => element.getId() === id);
        if(!book) return
        book.setAuthor(newAuthor);
        book.setTitle(newTitle);
        this.display();
    }
}

const books = new Library1();
const book11 = new Book1("bibabibo",`Leo`,1);
const book22 = new Book1("pikachu",`Ok`,2);
const book3 = new Book1("Nha gia kim",`Kim dong`,3);
const book4 = new Book1("Truyen kieu",`Nguyen Du`,4);
const book5 = new Book1("Ba do",`Avege`,5);
books.addBook(book11)
books.addBook(book22)
books.addBook(book3)
books.addBook(book4)
books.addBook(book5)
books.editBook(3,"okookok","santoshi");

