class Accounttt{
    public accountNumber:number;
    protected balance:number;
    protected history:string[];
    protected status:string;

    constructor(accountNumber:number,balance:number,history:string,status:string){
        this.accountNumber=accountNumber;
        this.balance = balance;
        this.history = [];
        this.status = status;
    }

    deposit(amount:number):void {
        if(amount < 0){
            console.log("Khong hop le");
        }
        this.balance += amount;
        this.history.push(`Nap ${amount}`);

    }

    withdraw(amount:number):void{
        if (amount > this.balance || amount <= 0) {
            console.log("Khong hop le");
        }
        this.balance -= amount;
        this.history.push(`Rut ${amount}`);

    }

    showHistory():void{
        this.history.forEach(item =>{
            console.log(`${item}`);
        })

    }
}

class SavingAccountt extends Accounttt{
    interestRate:string;
    constructor(accountNumber:number,balance:number,history:string,status:string,interestRate:string){
        super(accountNumber,balance,history,status);
        this.interestRate = interestRate;
    }

    withdraw(amount:number): void {
        this.balance -= amount;
        if (amount > this.balance || amount <= 0) {
            console.log("Khong hop le");
        }
        if (this.balance < 0) this.balance = 0;
        this.history.push(`Rut-${amount}`);
    }
}

// const acc1 = new Accountt(1,1000,"abcd","Active");
// acc1.deposit(1000);
// acc1.withdraw(500);
// acc1.showHistory(); 

class CheckingAccount extends Accounttt {
    overdraftLimit:number;
    constructor(accountNumber:number,balance:number,history:string,status:string,overdraftLimit:number) {
        super(accountNumber,balance,history,status);
        this.overdraftLimit = overdraftLimit;
    }

    deposit(amount:number):void {
        if(amount < 0){
            console.log("Khong hop le");
        }
        this.balance += amount;
        this.history.push(`Nap ${amount}`);

    }

    withdraw(amount: number): void {
        if(amount <= 0){
            console.log("Khong hop le");
        }

        if(this.balance - amount >= -this.overdraftLimit){
            this.balance -= amount;
            this.history.push(`Rut ${amount}`)
        }else{{
            console.log("Khong hop le vuot qua overdraftLimit");
        }}
    }

    showHistory(): void {
        this.history.forEach(item=>{
            console.log(`${item}`);
        })
    }
}

const acc2 = new CheckingAccount (1,500,"abcd","bibabobo",200);

acc2.deposit(100);
acc2.showHistory();
acc2.withdraw(1000);
acc2.showHistory();

