class Employee{
    public name:string;
    protected company:string;
    private phone:number;

    constructor(name:string,company:string,phone:number){
        this.name = name;
        this.company = company;
        this.phone = phone;
    }

    printInfo():string{
        return`${this.name}-${this.company}-${this.phone}`
    }
}

const employee = new Employee("Bibabibo","lala",123456789);
console.log(employee.printInfo());
