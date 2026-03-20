class Department {
  name: string;
  constructor(n: string) {
    this.name = n;
  }
  describe() {
    console.log("Department", this.name);
  }
}

const accounting = new Department("Accog");
accounting.describe();

const accountingCopy = {
  name: "Accounting",
  describe: accounting.describe,
};
accountingCopy.describe();
