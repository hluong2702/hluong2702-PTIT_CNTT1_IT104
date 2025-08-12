"use strict";
class Account {
    constructor(id, userName, password, isLogin, role) {
        this.id = id;
        this.userName = userName;
        this.password = password;
        this.isLogin = isLogin;
        this.role = role;
    }
    logout() {
        if (this.isLogin === true) {
            console.log(`Export successful`);
            this.isLogin = false;
        }
        if (this.isLogin === false) {
            return;
        }
    }
    printfInfor() {
        console.log(`${this.id}-${this.isLogin}`);
    }
    login(password) { }
    ;
}
class userAcc extends Account {
    constructor(id, userName, password, isLogin, role, status) {
        super(id, userName, password, isLogin, role);
        this.status = status;
    }
    logout() {
    }
    login(password) {
        if (this.status === "active") {
            if (this.password === password) {
                this.isLogin = true;
                console.log(`Log in successfully ${this.userName}`);
            }
            else {
                console.log(`Login failed`);
            }
        }
        else if (this.status === "banned") {
            console.log("Account has been locked");
        }
    }
}
const userAcc1 = new userAcc("Mx01", "bibabibo", "hoangluong2702", true, "tien tri", "active");
userAcc1.login("hoangluong2702");
const userAcc2 = new userAcc("Mx01", "bibabibo", "hoangluong2702", false, "tien tri", "banned");
userAcc2.login("hoangluong2702");
const account = new Account("Mx01", "bibo", "hoangluong", true, "soi");
account.logout();
account.printfInfor();
