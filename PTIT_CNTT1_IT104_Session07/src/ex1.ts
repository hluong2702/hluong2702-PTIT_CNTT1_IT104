class Employee {
    public name:string;
    protected company:string;
    private phone:string;

    constructor(name:string,company:string,phone:string){
        this.name = name;
        this.company = company;
        this.phone = phone;
    }

    printInfor():void{
        console.log(`${this.name}-${this.company}-${this.phone}`);

    }
}

class Manager extends Employee {
    teamSize:number;
    constructor(name:string,company:string,phone:string,teamSize:number) {
        super(name,company,phone);
        this.teamSize = teamSize;
    }

    printInfor(): void {
       super.printInfor();
       console.log(`${this.teamSize}`);
    }

}

const employee1 = new Employee("Bibabibo","FPT","0367771862");
employee1.printInfor();
const employee2 = new Manager("Bibo","FPT","123456789",27);
employee2.printInfor();