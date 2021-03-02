const { it, expect } = require('@jest/globals');
const { describe } = require('yargs');
const Employee = require('../lib/employee');

describe("Employee class", () =>{
    describe("getName method", () => {
        it("it will return the employees name from the Prompt", () => {
            const name = 'Jim';
            
            const employee = new Employee(name);
            
            employee.getName("Jim");
            
            expect(employee.name).toEqual(name);
        });
    });

    describe(" getId method", () => {
        it("it will return the employees id number from the prompt", () => {
            const employee = new Employee({name: "Jim", id: "001", email:"jim@gmail.com", role:"engineer"}
            );
            employee.getId("001");
            expect(employee.id).toBe("001")
        });
    });
});