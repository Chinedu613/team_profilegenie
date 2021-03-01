const Employee = require("./lib/employee");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");
const Manager = require("./lib/manager");

const writeFileAsync = util.promisfy(fs.writeFile);

const promptUser = () => {
    return inquirer.prompt([
        {
            type:'input',
            name: 'name',
            message: 'Can you tell us your name?'
        },
        {
            type: 'list',
            name: 'role',
            message: 'What is the team memeber\'s roles?',
            choices: [
                'Manager',
                'Employee',
                'Intern'
            ]
        },
        {
            type:'input',
            name:'manager id',
            message: 'What is your employee ID?'
        },
        {
            type: 'input',
            name: 'email',
            message: 'Please add your email:'
        },
        {
            type: 'input',
            name: 'office',
            message: 'What is your office number?'
        },
        {
            type: 'list',
            name: 'add',
            message: 'Would you like to add another memeber to your team?',
            choices: [
                'Yes',
                'No'
            ]
        },
        {
            type: 'list',
            name: 'team',
            choices: [
                'An Manager',
                'An Engineer',
                'An Intern',
            ]
        }
    ])
}

const init = () => {
    promptUser()
        .then((info) => writeFileAsync('index.html', generateHTML(info)))
        .then(() => console.log('Successfully wrote to index.html'))
        .catch((err) => console.error(err));
};
init();