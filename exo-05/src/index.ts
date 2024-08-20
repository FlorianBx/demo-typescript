class Employee {
	constructor(
		public readonly id: number, public readonly name: string, public salary: number 
	) {}

	getAnnualSalary(): number {
		return this.salary * 12;
	}
}

class Manager extends Employee {
	constructor(
		id: number, name: string, salary: number, public bonus: number 
	) {
		super(id, name, salary);
	}

	getAnnualSalary(): number {
		return super.getAnnualSalary() + this.bonus;
	}
}

const manager1 = new Manager(1, 'John', 5000, 10000);
const manager2 = new Manager(2, 'Jane', 6000, 0);
// manager1.name = 'Jane';

console.log(`Manager 1 ${manager1.name} salary: ${manager1.getAnnualSalary()} bonus: ${manager1.bonus}`);
console.log(`Manager 2 ${manager2.name} salary: ${manager2.getAnnualSalary()} bonus: ${manager2.bonus}`);
