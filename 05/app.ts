// unknown and any

let userInput: unknown;
// let userInput: any;
let userName: string;

userInput = 10; // valid
userInput = "Gopal"; // valid
// userName=userInput   // incorrect if unknown but  correct if any;

if (typeof userInput === "string") {
  userName = userInput;
} // valid

// nebver return type--

function generateError(message: string, code: number): never {
  throw { message: message, status: code };
  //   return :"incorrect"
}

const res = generateError("internal server error", 500);
