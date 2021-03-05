const Manager = require('../lib/manager');

describe("Manager Class, should extend from Employee Class", () => {
    describe("Super is making it so we do not need to use previous functions", () =>{
        it("it will add office number to id", () =>{
            
            let office = '101';

            const manager = new Manager('Any','Any', 'Any', office);

            manager.getOffice(office);

            expect(manager.office).toEqual('101');
        });
    });
});