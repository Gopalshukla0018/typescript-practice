let person: {
  name: string;
  age: number;
  role: Role;
};

enum Role {
  AUTHOR,
  ADMIN,
  SUPERADMIN,
  USER,
} // not hoist so we have to use it before

person = {
  name: "Gopal",
  age: 10,
  role: Role.SUPERADMIN,
};

if (person.role === Role.AUTHOR) {
  console.log("author");
} else if (person.role === Role.ADMIN) {
  console.log("admin");
} else if (person.role === Role.SUPERADMIN) {
  console.log("superadmin");
} else if (person.role === Role.USER) {
  console.log("user");
}
