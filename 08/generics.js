// Generics intro
// Aray<string> // one type is connect with another type is generics
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
// const fruits:string[]=["Apple","Mango"] // first method here is a problem
var fruits = []; // here we can add only string values.
fruits.push("Mango");
fruits.push("Banana");
// fruits.push(11) // error
console.log(fruits);
var Boy = {
    name: "Gopal",
    age: 11,
};
// now we can use Array<Boy>
// so it is become array of object
// ex-2
function merge(objA, objB, objC) {
    return __assign(__assign(__assign({}, objA), objB), objC);
}
var res = merge({ name: "Gopal" }, { role: "CEO" }, { id: "d1" });
console.log(res);
// 2. Generic Constraints
function createObject(key, value, isActive) {
    return { key: key, value: value, isActive: isActive };
}
var obj = createObject("age", 25, true);
console.log(obj);
var numberBox = { value: 200 };
var stringBox = { value: "string vaue check" };
console.log(numberBox); // valid
console.log(stringBox); // valid
