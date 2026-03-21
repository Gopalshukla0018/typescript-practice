// Generics intro
// Aray<string> // one type is connect with another type is generics
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
