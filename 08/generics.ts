// Generics intro
// Aray<string> // one type is connect with another type is generics

// const fruits:string[]=["Apple","Mango"] // first method here is a problem

const fruits: Array<string> = []; // here we can add only string values.

fruits.push("Mango");
fruits.push("Banana");
// fruits.push(11) // error

console.log(fruits);

type Person = {
  name: string;
  age: number;
};
const Boy: Person = {
  name: "Gopal",
  age: 11,
};

// now we can use Array<Boy>
// so it is become array of object
