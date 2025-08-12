"use strict";
class Accountt {
    constructor(accountNumber, balance, history, status) {
        this.accountNumber = accountNumber;
        this.balance = balance;
        this.history = [];
        this.status = status;
    }
    deposit(amount) {
        if (amount < 0) {
            console.log("Khong hop le");
        }
        this.balance += amount;
        this.history.push(`Nap ${amount}`);
    }
    withdraw(amount) {
        if (amount > this.balance || amount <= 0) {
            console.log("Khong hop le");
        }
        this.balance -= amount;
        this.history.push(`Rut ${amount}`);
    }
    showHistory() {
        this.history.forEach(item => {
            console.log(`${item}`);
        });
    }
}
class SavingAccount extends Accountt {
    constructor(accountNumber, balance, history, status, interestRate) {
        super(accountNumber, balance, history, status);
        this.interestRate = interestRate;
    }
    withdraw(amount) {
        this.balance -= amount;
        if (amount > this.balance || amount <= 0) {
            console.log("Khong hop le");
        }
        if (this.balance < 0)
            this.balance = 0;
        this.history.push(`Rut-${amount}`);
    }
}
const acc1 = new Accountt(1, 1000, "abcd", "Active");
acc1.deposit(1000);
acc1.withdraw(500);
acc1.showHistory();
