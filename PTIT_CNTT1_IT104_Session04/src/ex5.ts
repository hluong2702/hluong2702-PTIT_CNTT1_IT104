type Person = {
    name:string,
    age: number
};

type Employee = {
    employeeId:string,
    department:string
};

type StaffMember = Person & Employee;

const printStaffInfor = (staff:StaffMember):void =>{
    console.log(`Nhan vien ${staff.name} (${staff.age}), Ma nhan vien: ${staff.employeeId} - Phong:${staff.department} `);
}

const staffMember : StaffMember = {
    name:"bibabibo",
    age:18,
    employeeId:"EMP001",
    department:"Ke toan"
};

printStaffInfor(staffMember);