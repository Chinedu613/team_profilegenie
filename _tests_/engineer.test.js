const Engineer = require('../lib/engineer');

describe("Engineer class", () =>{
    describe("getName method", () => {
        it("it will return the employees name from the Prompt", () => {
            
            let github = 'repo'
            
            const engineer = new Engineer('any','any','any', github);

            engineer.getGit(github);
            
            expect(engineer.github).toEqual('repo');
        });
    });
});