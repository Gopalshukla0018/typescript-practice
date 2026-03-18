// type  alias/custom types
function combine(num1, num2, conversionType) {
    var result;
    if ((typeof num1 === "number" && typeof num2 === "number") ||
        conversionType === "as-number") {
        result = +num1 + +num2;
    }
    else {
        result = num1.toString() + num2.toString();
    }
    return result;
}
var user = {
    name: "Gopal",
    age: 20,
    skills: ["React", "Node"],
};
function greet(user) {
    console.log("hi ".concat(user.name));
}
greet(user);
