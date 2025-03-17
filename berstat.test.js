import { describe, test, expect } from 'vitest';
import {EmployeeStatistics} from './employees.js';

const employees1 = [
    { name: 'John Doe', age: 30, salary: 4000 },
    { name: 'Jane Doe', age: 25, salary: 3500 },
    { name: 'James Smith', age: 45, salary: 5000 },
    { name: 'Jerry Summer', age: 22, salary: 3000 }
];
const employees2 = [
    { name: 'John Doe', age: 60, salary: 45000 },
    { name: 'Jane Doe', age: 26, salary: 36500 },
    { name: 'James Smith', age: 62, salary: 50030 },
    { name: 'Jerry Summer', age: 18, salary: 30900 },
    { name: 'Jack Daniels', age: 22, salary: 40100 }
];

describe("EmployeeStatistics osztály tesztelése", () => {
    test("Átlagfizetés helyes számítása", () => {
        const stats = new EmployeeStatistics(employees1);
        expect(stats.getAverageSalary()).toBe(3875);
        const stats2 = new EmployeeStatistics(employees2);
        expect(stats2.getAverageSalary()).toBe(40506);

    });

    test("Legmagasabb fizetés helyes visszaadása", () => {
        const stats = new EmployeeStatistics(employees1);
        expect(stats.getMaxSalary()).toBe(5000);
        const stats2 = new EmployeeStatistics(employees2);
        expect(stats2.getMaxSalary()).toBe(50030);

    });

    test("Legalacsonyabb fizetés helyes visszaadása", () => {
        const stats = new EmployeeStatistics(employees1);
        expect(stats.getMinSalary()).toBe(3000);
        const stats2 = new EmployeeStatistics(employees2);
        expect(stats2.getMinSalary()).toBe(30900);

    });

    test("Visszaadja a legjobban fizetett dolgozó nevét.", () => {
        const stats = new EmployeeStatistics(employees1);
        expect(stats.getHighestPaidEmployee()).toBe('James Smith');
        const stats2 = new EmployeeStatistics(employees2);
        expect(stats2.getHighestPaidEmployee()).toBe('James Smith');
    }
    );
    test("Visszaadja a dolgozók átlagéletkorát.", () => {
        const stats = new EmployeeStatistics(employees1);
        expect(stats.getAverageAge()).toBe(30.5);
        const stats2 = new EmployeeStatistics(employees2);
        expect(stats2.getAverageAge()).toBe(37.6);
    }
    );
});
