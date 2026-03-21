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


// ex-2

function merge<T, U, S>(objA: T, objB: U, objC: S) {
  return { ...objA, ...objB, ...objC };
}
const res = merge({ name: "Gopal" }, { role: "CEO" }, { id: "d1" });
console.log(res);

// 2. Generic Constraints

function createObject<T extends string, U extends number, V extends boolean>(
  key: T,
  value: U,
  isActive: V,
): { key: T; value: U; isActive: V } {
  return { key, value, isActive };
}

const  obj=createObject("age",25,true)
console.log(obj);


//3. Generic interface

interface Box<T>{
    value:
}


const numberBox:Box<number>={value:200}
const stringBox: Box<string>={value:"string vaue check"}
console.log(numberBox); // valid
console.log(stringBox); // valid


// Generic default


/// by = string it make string default
interface User<T =string>{
  data:T, 
  status:number
}

const reponse:User={data:"success",status:200} // default top string



const jsonRes:User<object>={data:{name:"Gopal"},status:200}
console.log(jsonRes);







