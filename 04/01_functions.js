//  function return type - -
// 1- we can write return type-
function add(num1, num2) {
    return num1 + num2; //return 30
}
console.log(add(10, 20));
// 2--
function greet(name) {
    console.log("hi ".concat(name));
}
greet("Gopal");
// let combineFn:Function;
// combineFn=()=>{
//     console.log("Gopal")
// }   // invalid
// combineFn=add;
// // combineFn=greet;
// console.log(combineFn(1,4));
// Goos practice 
var combineFn;
combineFn = add;
console.log(combineFn(100, 29));
