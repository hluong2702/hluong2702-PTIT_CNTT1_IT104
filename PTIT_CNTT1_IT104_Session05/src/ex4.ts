class Vehicle1{
    readonly id :number;
    public name:string;
    protected year:number;
    private company:string;

    constructor(id:number,name:string,year:number,company:string){
        this.id = id;
        this.name = name;
        this.year = year;
        this.company = company;
    }

    printInfor():string{
        return`${this.id}-${this.name}-${this.year}-${this.company}`;
    }

}

const vehicle3 = new Vehicle1(1,"Bibabibo",2025,"Ferari");
console.log(vehicle3.printInfor());
