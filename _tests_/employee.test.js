const Employee = require('../lib/employee');

describe("Employee class", () =>{
    describe("getName method", () => {
        it("it will return the employees name from the Prompt", () => {
            
            
            const employee = new Employee('Jim');
            
            employee.getName(name);
            
            expect(employee.name).toEqual('Jim');
        });
    });

    describe("getId method", () => {
        it("it will return the employees id number from the prompt", () => {

            const id = '001';

            const employee = new Employee('Jim',id);

            
            employee.getId(id);
            
            expect(employee.id).toEqual('001');
        });
    });
    describe("getEmail method", () => {
        it("it will return the employees id number from the prompt", () => {

            const email = 'chin@gmail.com';

            const employee = new Employee('Jim','001', email);

            
            employee.getEmail(email);
            
            expect(employee.email).toEqual(email);
        });
    });
});