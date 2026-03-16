// generally 3 data types- number,string,boolean.
function add(a, b, printresult, someText) {
    if (printresult) {
        console.log("".concat(someText, "  ").concat(a + b));
    }
    else {
        console.log("printresult is false");
    }
}
var n1 = 10;
var n2 = 20;
var printresult = true;
var someText = "sum of given numbers is:-";
var ans = add(n1, n2, printresult, someText);
