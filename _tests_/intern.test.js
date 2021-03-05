const Intern = require('../lib/intern');

describe("Inter class, should extend from Employee Class", () => {
    describe("Super is making it so we do no need use previous function", () => {
        it("it will add student school to object", () => {
            
            const school = 'PennState';

            const intern = new Intern('Any','Any','Any', school);

            intern.getSchool(school);

            expect(intern.school).toEqual('PennState');
        });
    });
});