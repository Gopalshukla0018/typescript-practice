var person;
var Role;
(function (Role) {
    Role[Role["AUTHOR"] = 0] = "AUTHOR";
    Role[Role["ADMIN"] = 1] = "ADMIN";
    Role[Role["SUPERADMIN"] = 2] = "SUPERADMIN";
    Role[Role["USER"] = 3] = "USER";
})(Role || (Role = {})); // not hoist so we have to use it before
person = {
    name: "Gopal",
    age: 10,
    role: Role.SUPERADMIN,
};
if (person.role === Role.AUTHOR) {
    console.log("author");
}
else if (person.role === Role.ADMIN) {
    console.log("admin");
}
else if (person.role === Role.SUPERADMIN) {
    console.log("superadmin");
}
else if (person.role === Role.USER) {
    console.log("user");
}
