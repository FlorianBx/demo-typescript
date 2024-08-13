export class Employee {
    constructor(id, name, salary) {
        this.id = id;
        this.name = name;
        this.salary = salary;
    }
    getAnnualSalary() {
        return this.salary * 12;
    }
}
export class Manager extends Employee {
    constructor(id, name, salary, bonus) {
        super(id, name, salary);
        this.bonus = bonus;
    }
    getAnnualSalary() {
        return super.getAnnualSalary() + this.bonus;
    }
}
const manager1 = new Manager(1, 'John', 5000, 10000);
const manager2 = new Manager(2, 'Jane', 6000, 0);
// manager1.name = 'Jane';
console.log(`Manager 1 ${manager1.name} salary: ${manager1.getAnnualSalary()} bonus: ${manager1.bonus}`);
console.log(`Manager 2 ${manager2.name} salary: ${manager2.getAnnualSalary()} bonus: ${manager2.bonus}`);
