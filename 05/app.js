// unknown and any
var userInput;
// let userInput: any;
var userName;
userInput = 10; // valid
userInput = "Gopal"; // valid
// userName=userInput   // incorrect if unknown but  correct if any;
if (typeof userInput === "string") {
    userName = userInput;
} // valid
// nebver return type--
function generateError(message, code) {
    throw { message: message, status: code };
    //   return :"incorrect"
}
var res = generateError("internal server error", 500);
