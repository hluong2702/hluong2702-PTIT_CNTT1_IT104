class Account {
    id:string;
    userName:string;
    password:string;
    isLogin:boolean;
    role:string;

    constructor(id:string,userName:string,password:string,isLogin:boolean,role:string){
        this.id = id;
        this.userName = userName;
        this.password = password;
        this.isLogin = isLogin;
        this.role = role;
    }

    logout():void{
        if(this.isLogin === true){
            console.log(`Export successful`);
            this.isLogin = false;
        }

        if(this.isLogin === false){
            return;
        }
    }

    printfInfor():void{
        console.log(`${this.id}-${this.isLogin}`);
    }

    login(password:string):void{};
}

class userAcc extends Account{
    status:string;
    constructor(id:string,userName:string,password:string,isLogin:boolean,role:string,status:string){
        super(id,userName,password,isLogin,role);
        this.status = status;
    }

    logout(): void {
        
    }

    login(password : string): void {
        if (this.status === "active") {
            if (this.password === password) {
                this.isLogin = true;
                console.log(`Log in successfully ${this.userName}`);
            } else {
                console.log(`Login failed`);
            }
        }else if(this.status === "banned"){
            console.log("Account has been locked");
        }
    }
}

const userAcc1 = new userAcc("Mx01","bibabibo","hoangluong2702",true,"tien tri","active");
userAcc1.login("hoangluong2702");
const userAcc2 = new userAcc("Mx01","bibabibo","hoangluong2702",false,"tien tri","banned");
userAcc2.login("hoangluong2702");

const account = new Account("Mx01","bibo","hoangluong",true,"soi");
account.logout();
account.printfInfor();