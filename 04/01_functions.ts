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
