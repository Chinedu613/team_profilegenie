//Required to Write Files and call Prompts
const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");

//Code to input prompts into HTML
const generateRole = require('../generateRole');

//Classes for Javascript
const Employee = require("../../lib/employee");
const Engineer = require("../../lib/engineer");
const Intern = require("../../lib/intern");
const Manager = require("../../lib/manager");

 const teamArr = [];
 const htmlString = [];

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
        default:  /* console.log(teamArr,'**************','***************')  */
      }
      //console.log('****iniside init****',teamArr,'******************');

      const filterArrayE = teamArr.filter(employee => employee.getRole() === "Engineer")
        htmlString.push(filterArrayE.map(engineer => generateEngineer(engineer))) 
        console.log("html string********************************",htmlString)
      //console.log('***********This is filtered***************', filterArray);
    /*   console.log('LINE76','^________________^')
      console.log('LINE76',teamArr,'*******________________*****') */
      // add the portion of HTML to dispaly the beggining of the file
      // .. with the end of the file
      fs.writeFileAysnc(somepath, htmlString, utf8)
    });
};
//Functions to ask Role specific Questions and to seperate into different objects
const addEngineer = (answers) => {
  const engineer = new Engineer(
        answers.name,
        answers.id,
        answers.email,
        answers.github
      );
      console.log(engineer);
  teamArr.push(engineer);
  createTeam()
};

const addIntern = (answers) => {
  const intern = new Intern(
        answers.name,
        answers.id,
        answers.email,
        answers.school
      );
      console.log(intern);
  teamArr.push(intern);
  createTeam()
};
const addManager = (answers) => {
  const manager = new Manager(
        answers.name,
        answers.id,
        answers.email,
        answers.office
      );
      console.log(manager);
  teamArr.push(manager);
  createTeam()
};

/* createTeam() */




 const init = () => {
    createTeam()
 
  /*    .then((teamCards()) => writeFileAysnc("index.html", generateRole(teamArr)))
    .then(() => console.log("Successfully wrote to index.html"))
    .catch((err) => console.error(err));  */
};
init();  


const  generateEngineer = (engineer) => {
  return`
  
  <div class="col-md-8">
  <div class="card-body">
  <h5 class="card-title">${engineer.getRole}</h5>
  <ul class="list-group list-group-flush">
      <li class="list-group-item">Name: ${engineer.getName}</li>
      <li class="list-group-item">Email: ${engineer.getEmail}</li>
      <li class="list-group-item">ID: ${engineer.getGithub}</li>
      <li class="list-group-item">ID: ${engineer.getID}</li>
  </ul>
  <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
  </div>
</div>`

}
const teamCards = () =>{
  
  return`
  ${generateEngineer()}
  `
}