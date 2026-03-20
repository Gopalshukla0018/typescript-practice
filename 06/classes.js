"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Department {
    name;
    constructor(n) {
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
//# sourceMappingURL=classes.js.map