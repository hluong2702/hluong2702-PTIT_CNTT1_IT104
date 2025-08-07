"use strict";
const printStaffInfor = (staff) => {
    console.log(`Nhan vien ${staff.name} (${staff.age}), Ma nhan vien: ${staff.employeeId} - Phong:${staff.department} `);
};
const staffMember = {
    name: "bibabibo",
    age: 18,
    employeeId: "EMP001",
    department: "Ke toan"
};
printStaffInfor(staffMember);
