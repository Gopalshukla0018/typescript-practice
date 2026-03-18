//  function return type - -
// 1- we can write return type-

function add(num1: number, num2: number): number /*return type*/ {
  return num1 + num2; //return 30
}

console.log(add(10, 20));

// 2--

function greet(name: string): void {
  console.log(`hi ${name}`);
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

let combineFn: (a: number, b: number) => number;
combineFn = add;
console.log(combineFn(100, 29));

function handleSum(num1: number, num2: number, cb: (n: number) => void) {
  const sum = num1 + num2;
  cb(sum);
}

handleSum(10, 20, (sum:number ) => {
  console.log(sum);
});
