// tuple --

const person: {
  name: string;
  age: number;
  skills: string[];
  product: [number, string, string]; // fixed array of types - same sequence required
} = {
  name: "Gopal",
  age: 18,
  skills: ["React", "Next"],
  product: [10, "Laptop", "Watch"],
};

// person.product[1]=20 - // not assignable
person.product[0] = 2; /// correct




