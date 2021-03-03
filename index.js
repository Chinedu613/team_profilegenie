//Required to Write Files and call Prompts
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');

//Code to input prompts into HTML
const generateHTML = ``;

//Classes for Javascript
const Employee = require("./lib/employee");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");
const Manager = require("./lib/manager");

const writeFileAsync = util.promisify(fs.writeFile);

const createManager = () => {
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
            name:'id',
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

///NEW FUNCTION

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
                'An Engineer',
                'An Intern',
                'No more team memebers'
            ]
        
        }
    
    ])
    .then (userChoice  => {
        switch(userChoice.team){
            case 'An Engineer':
                addEngineer()
            break;
            case 'An Intern':
                addIntern()
            break;
            default: init()
        }
    });
}
const addEngineer = () => {
    //Prompt for every thing engineer related    
    .then(answers => {
        const Engineer = new Engineer(answers.name, answers.id, answers.email)

    // createTeam(){}
    
    });
}


const init = () => {
    promptUser()
        .then((info) => writeFileAsync('index.html', generateHTML(info)))
        .then(() => console.log('Successfully wrote to index.html'))
        .catch((err) => console.error(err));
};
init();