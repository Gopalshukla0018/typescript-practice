// type  alias/custom types

type Commbinable = number | string;
type conversionType = "as-number" | "as-string";

function combine(
  num1: Commbinable,
  num2: Commbinable,
  conversionType: conversionType,
) {
  let result: Commbinable;
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

// ex-2

type User = {
  name: string;
  age: number;
  skills: string[];
};

const user: User = {
  name: "Gopal",
  age: 20,
  skills: ["React", "Node"],
};

function greet(user: User) {
  console.log(`hi ${user.name}`);
}

greet(user);
