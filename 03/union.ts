// we use union for more than 1 types ex-string, boolean, number etc..

function combine(num1: string | number, num2: string | number) {
  let result: number | string;
  if (typeof num1 === "number" && typeof num2 === "number") {
    result = num1 + num2;
  } else {
    result = num1.toString() + num2.toString();
  }
  return result;
}

console.log(combine("shukla", "Gopal "));
