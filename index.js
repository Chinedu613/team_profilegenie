//Required to Write Files and call Prompts
const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");

//Code to input prompts into HTML
const generateHTML = ``;

//Classes for Javascript
const Employee = require("./lib/employee");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");
const Manager = require("./lib/manager");

const writeFileAsync = util.promisify(fs.writeFile);

const createTeam = () => {
    inquirer
    .prompt([
    {
        type: "input",
        name: "name",
        message: "Can you tell us your name?",
    },
    {
        type: "input",
        name: "id",
        message: "What is your employee ID?",
    },
    {
        type: "input",
        name: "email",
        message: "Please add your email:",
    },
    {
        type: "choice",
        name: "role",
        message: "What is your team role?",
        choices: ["Manager", "Engineer", "Intern"],
    },
    ])
    .then((answers) => {
        switch (answers.role) {
        case "Manager":
            addManager();
            break;
        case "Engineer":
            addEngineer();
            break;
        case "Intern":
            addIntern();
            break;
        default:
            init();
        }
    });
};
//Functions to ask Role specific Questions and to seperate into different objects
const addEngineer = () => {
  inquirer
    .prompt([
      {
        type: "input",
        name: "github",
        message: "What is your Github Username?",
      },
    ])
    .then((answers) => {
      const Engineer = new Engineer(
        answers.name,
        answers.id,
        answers.email,
        answers.git
      );
      // createTeam(){}
    });
};
const addIntern = () => {
  inquirer
    .prompt([
      {
        type: "input",
        name: "school",
        message: "What School do you attend?",
      },
    ])
    .then((answers) => {
      const Intern = new Intern(
        answers.name,
        answers.id,
        answers.email,
        answers.school
      );
    });
};
const addManager = () => {
  inquirer
    .prompt([
      {
        type: "input",
        name: "office",
        message: "What is your office number?",
      },
    ])
    .then((answers) => {
      const Manager = new Manager(
        answers.name,
        answers.id,
        answers.email,
        answers.office
      );
    });
};

///NEW FUNCTION
const addAnother = () => {
  inquirer.prompt([
      {
        type: "choice",
        name: "add",
        message: "Would you like to add another memeber to your team?",
        choices: ["Yes", "No"],
    }])
    .then((answers) => {
        if (answers.add === "Yes") {
        inquirer.prompt([
        {
            type: "list",
            name: "team",
            choices: ["An Engineer", "An Intern", "No more team memebers"],
        }]);
    }
        return init();
    });
};

const init = () => {
    createTeam()
    .then((info) => writeFileAsync("index.html", generateHTML(info)))
    .then(() => console.log("Successfully wrote to index.html"))
    .catch((err) => console.error(err));
};
init();