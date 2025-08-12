class Account1 {
    id: string;
    userName: string;
    password: string;
    isLogin: boolean;
    role: string;

    constructor(id: string, userName: string, password: string, isLogin: boolean, role: string) {
        this.id = id;
        this.userName = userName;
        this.password = password;
        this.isLogin = isLogin;
        this.role = role;
    }

    logout(): void {
        if (this.isLogin === true) {
            console.log(`Logout successful`);
            this.isLogin = false;
        }
    }

    printfInfor(): void {
        console.log(`${this.id}-${this.isLogin}`);
    }

    login(password: string): void {
        if (this.password === password) {
            this.isLogin = true;
            console.log(`Log in successfully ${this.userName}`);
        } else {
            console.log(`Login failed`);
        }
    }
}

class userAcc3 extends Account1 {
    status: string;

    constructor(id: string, userName: string, password: string, isLogin: boolean, role: string, status: string) {
        super(id, userName, password, isLogin, role);
        this.status = status;
    }

    setStatus(status: string): void {
        this.status = status;
    }

    logout(): void {
        super.logout();
    }

    login(password: string): void {
        if (this.status === "active") {
            if (this.password === password) {
                this.isLogin = true;
                console.log(`Log in successfully ${this.userName}`);
            } else {
                console.log(`Login failed`);
            }
        } else if (this.status === "banned") {
            console.log(`Account ${this.userName} has been locked`);
        }
    }
}

class adminAcc extends Account1 {
    constructor(id: string, userName: string, password: string, isLogin: boolean, role: string) {
        super(id, userName, password, isLogin, role);
    }

    banUser(user: userAcc3): void {
        user.setStatus("banned");
        console.log(`Tai khoan${user.userName} da bi khoa ${this.userName}`);
    }
}

const user1 = new userAcc3("U001", "nguyenVanA", "password123", true, "user", "active");
const user2 = new userAcc3("U002", "tranThiB", "password456", true, "user", "active");
const admin = new adminAcc("A001", "adminUser", "adminPass", true, "admin");

user1.login("password123");
console.log("---");
admin.banUser(user1);
console.log("---");
user1.login("password123");
console.log("---");
user2.login("password456");