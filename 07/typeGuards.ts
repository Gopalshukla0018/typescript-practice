// type Guards

type Combinable = string | number;

type Numeric = number | boolean;

type Universal = Combinable & Numeric;

function add(a: Combinable, b: Combinable) {
  // add type guards
  if (typeof a === "string" || typeof b === "string") {
    return a.toString() + b.toString();
  } // this is type guard--

  return a + b;
}

console.log(add("Gopal", "shukla"));
console.log(add(10, 20));

// 2

type Admin = {
  name: string;
  privilages: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};

type ElevatedEmployee = Admin & Employee;
type UnknownEmployee = Employee | Admin;

const Emp1: ElevatedEmployee = {
  name: "Gopal",
  privilages: ["create-server"],
  startDate: new Date(),
};

function printEmpInformation(emp: UnknownEmployee) {
  console.log(emp.name);
  //   console.log("Privilages", emp.privilages); // wrong
  // start adding type guard
  // use in keyword that build in javascript

  if ("privilages" in emp) {
    // this is type guard
    console.log(emp.privilages);
  }
  if ("startDate" in emp) {
    console.log(emp.startDate);
  }
}

printEmpInformation(Emp1);
printEmpInformation({ name: "Luv", startDate: new Date() });

// 3. type guard in class

class car {
  drive() {
    console.log("driving a driving...");
  }
}

class truck {
  drive() {
    console.log("driving a truck");
  }
  loadCargo(amount: number) {
    console.log("loading carggo");
  }
}

type vehicle = car | truck;

const v1 = new car();
const v2 = new truck();

function useVehicle(vehicle: Vehicle) {
  vehicle.drive();
  // vehicle.loadCargo(500) // can not acess without type guard

  //   if ("loadCargo" in truck) {
  //     vehicle.loadCargo(500);
  //   }  // tarika 1
  if (vehicle instanceof truck) {
    vehicle.loadCargo(500);
  } // tarika 2
}

useVehicle(v1);
useVehicle(v2);
