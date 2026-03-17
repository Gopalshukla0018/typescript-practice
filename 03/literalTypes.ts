// here we learn about literal types- we can say it is custom types--hwewre  conversionType === "as-number" this is literal types

function combine(
  num1: string | number,
  num2: string | number,
  conversionType: "as-number" | "as-string",
) {
  let result;
  if (
    (typeof num1 === "number" && typeof num2 === "number") ||
    conversionType === "as-number"
  ) {
    result = +num1 + +num2;
  } else {
    result = num1.toString() + num2.toString();
  }
  return result;
}

const sum1 = combine(1, 5, "as-number");
const sum2 = combine("Gopal", " Shukla", "as-string");

console.log(sum1, " ", sum2);
