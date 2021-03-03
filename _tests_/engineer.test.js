const Engineer = require('../lib/engineer');

describe("Engineer class", () =>{
    describe("getName method", () => {
        it("it will return the employees name from the Prompt", () => {
            
            
            const engineer = new Engineer('repo');

            engineer.getGit(git);
            
            expect(engineer.git).toEqual('repo');
        });
    });

    describe("getId method", () => {
        it("it will return the employees id number from the prompt", () => {

            const engineer = new Engineer('Engineer');
            
            const role = 'Engineer';
            
            engineer.getRole(role);
            
            expect(engineer.role).toEqual('Engineer')
        });
    });
});