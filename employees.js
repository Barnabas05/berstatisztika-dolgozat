export class EmployeeStatistics {
    constructor(employees) {
        this.employees = employees;
        if (!employees) {
            throw new Error("A dolgozók megadása kötelező");
        }
        if (employees.length === 0) {
            throw new Error("Nincsenek dolgozók az adatbázisban");
        }
    }

    getAverageSalary() {
        let sum = 0;
        this.employees.forEach(employee => sum += employee.salary);
        return sum / this.employees.length;

    }

    getMaxSalary() {
        return Math.max(...this.employees.map(employee => employee.salary));

    }

    getMinSalary() {
        return Math.min(...this.employees.map(employee => employee.salary));
    }

    getAverageAge() {
        let sum = 0;
        this.employees.forEach(employee => sum += employee.age);
        return sum / this.employees.length;
    }

    getHighestPaidEmployee() {
        return this.employees.find(employee => employee.salary === this.getMaxSalary()).name;
    }
}