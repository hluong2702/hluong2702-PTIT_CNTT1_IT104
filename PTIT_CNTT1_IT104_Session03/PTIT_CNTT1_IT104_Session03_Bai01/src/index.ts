const userName : string = "Tran Minh Anh";
const age : number = 18;
const job : string = "Dev";

const displayInfor = (userName:string,age:number,job:string):void=> {
    console.log(`UserName:${userName},\nAge:${age},\nJob:${job}`);
}
displayInfor(userName,age,job);