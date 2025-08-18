interface User {
  id: number;
  name: string;
  email: string;
  age?: number;
}

function updateUser<T extends Partial<User>>(user: User, updates: T): User {
  if ('id' in updates) {
    throw new Error("Id cannot be changed");
  }
  return {...user,...updates};
}

const user1: User = {
  id: 1,
  name: "Alice",
  email: "alice@example.com"
};

const updates1 = {
  name: "Alice Johnson"
};
console.log(updateUser(user1, updates1));

const user2: User = {
  id: 1,
  name: "Alice",
  email: "alice@example.com",
  age: 25
};

const updates2 = {
  name: "Alice Johnson",
  email: "alice.johnson@example.com",
  age: 26
};

console.log(updateUser(user2, updates2));
