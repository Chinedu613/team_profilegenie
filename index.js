//Required to Write Files and call Prompts
const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");

//Code to input prompts into HTML
const generateHTML = require('./src/generateRole');

//Classes for Javascript
const Employee = require("./lib/employee");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");
const Manager = require("./lib/manager");

 const teamArr = [];

const writeFileAysnc = util.promisify(fs.writeFile); 

const createTeam = () =>  {
  return inquirer
    .prompt([
      {
        type: "list",
        name: "role",
        message: "Team memember's role?",
        choices: ["Manager", "Engineer", "Intern", "Exit"],
      },
      {
        type: "input",
        name: "name",
        message: "Please add team memeber's name:",
        when: (answers) => answers.role !== "Exit" 
      },
      {
        type: "input",
        name: "id",
        message: "Team memember's employee ID:",
        when: (answers) => answers.role !== "Exit"
      },
      {
        type: "input",
        name: "email",
        message: "Team memember's email:",
        when: (answers) => answers.role !== "Exit"
      },
      {
        type: "input",
        name: "office",
        message: "What is your office number?",
        when: (answers) => answers.role === "Manager"
      },
      {
        type: "input",
        name: "github",
        message: "What is your Github Username?",
        when: (answers) => answers.role === "Engineer"
      },
      {
        type: "input",
        name: "school",
        message: "What School do you attend?",
        when:(answers) => answers.role === "Intern"
      },
    ])
    .then((answers) => {
      switch (answers.role) {
        case "Manager":
          addManager(answers);
          break;
        case "Engineer":
          addEngineer(answers);
          break;
        case "Intern":
          addIntern(answers);
          break;
        //default: init();
      }
      console.log(teamArr,'^________________^')
    });
};
//Functions to ask Role specific Questions and to seperate into different objects
const addEngineer = (answers) => {
      let engineer = new Engineer(
        answers.name,
        answers.id,
        answers.email,
        answers.github
      );
  teamArr.push(engineer);
  createTeam()
};

const addIntern = (answers) => {
      let intern = new Intern(
        answers.name,
        answers.id,
        answers.email,
        answers.school
      );
  teamArr.push(intern);
  createTeam()
};
const addManager = (answers) => {
      let manager = new Manager(
        answers.name,
        answers.id,
        answers.email,
        answers.office
      );
  teamArr.push(manager);
  createTeam()
};

createTeam()


/* const init = () => {
    createTeam()
    .then((info) => writeFileAysnc("index.html", () =>))
    .then(() => console.log("Successfully wrote to index.html"))
    .catch((err) => console.error(err));
};
init(); */
