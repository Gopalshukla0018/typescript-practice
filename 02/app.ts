//  Objects,Arrays,Tuple,Enum

const userData: {
  name: string;
  age: number;
  department: string;
  marks: { eng: number; math: number; comment: string };
  skills: string[]; // for arrays
} = {
  name: "Gopal",
  age: 100,
  department: "BCA",
  marks: {
    eng: 10,
    math: 9,
    comment: "typescript is very interesting",
  },
  skills: ["react", "next js", "typescript"],
};

console.log(userData);

let languages: string[];
languages = ["js", "Ts", "c++"];

let anything: any[]; // lose power of typescript;
anything = ["Gopal", 10, true];
