// generally 3 data types- number,string,boolean.

function add(a: number, b: number, printresult: boolean, someText: string) {
  if (printresult) {
    console.log(`${someText}  ${a + b}`);
  } else {
    console.log("printresult is false");
  }
}

const n1 = 10;
const n2 = 20;
const printresult = true;
const someText = "sum of given numbers is:-";
const ans = add(n1, n2, printresult, someText);
