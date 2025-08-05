let phoneBooks = [];

const addContact = (name, phoneNumber, email) => {
    const contact = {
        name: name,
        phoneNumber: phoneNumber,
        email: email
    };
    phoneBooks.push(contact);
};

const displayContact = () => {
    if (phoneBooks.length === 0) {
        console.log("Danh ba trong!");
        return;
    }
    console.log("Danh ba :");
    phoneBooks.forEach((contact, index) => {
        console.log(`${index + 1}. Ten: ${contact.name}, So dien thoai: ${contact.phoneNumber}, Email: ${contact.email}`);
    });
};
addContact("Dao Truong Son", "0901234567", "sondao@gmail.com");
addContact("Leo Messi", "0912345678", "ronaldo@gmail.com");
displayContact();
phoneBooks = [];
displayContact();