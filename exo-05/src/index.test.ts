import { describe, it, expect } from "vitest";
import { Manager, Employee } from "./index";

describe('Manager', () => {
  it('should calculate the correct annual salary with bonus', () => {
    const manager = new Manager(1, 'Alice', 5000, 10000);
    const result = manager.getAnnualSalary();
    expect(result).toBe(70000);
  });

	it('should calculate the correct annual salary without bonus', () => {
		const manager = new Manager(1, 'Alice', 5000, 0);
		const result = manager.getAnnualSalary();
		expect(result).toBe(60000);
	});

	it('should calculate the correct annual salary with negative bonus', () => {
		const manager = new Manager(1, 'Alice', 5000, -10000);
		const result = manager.getAnnualSalary();
		expect(result).toBe(50000);
	});

	it('should calculate the correct annual salary for an employee', () => {
		const employee = new Employee(1, 'Alice', 3000);
		const result = employee.getAnnualSalary();
		expect(result).toBe(36000);
	});

});
