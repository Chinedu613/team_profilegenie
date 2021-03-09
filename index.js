//Required to Write Files and call Prompts
const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");

//Code to input prompts into HTML
const renderTeam = require('./src/role_cards/renderTeam');

//Classes for Javascript
const Employee = require("./lib/employee");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");
const Manager = require("./lib/manager");


 const teamArr = [];
 const htmlString = [];

const writeFileAysnc = util.promisify(fs.writeFile); 


  const createManager = () => {
    
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
    ])
    .then((answers) => {
      const manager = new Manager(
            answers.name,
            answers.id,
            answers.email,
            answers.office,
            answers.role
          );
          console.log(manager);
          teamArr.push(manager);
          growTeam()
    });
  }

  const createEngineer = () => {
    
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
          name: "github",
          message: "What is your Github Username?",
          when: (answers) => answers.role === "Engineer"
        },
      ])
      .then((answers) => {
        const engineer = new Engineer(
              answers.name,
              answers.id,
              answers.email,
              answers.office,
              answers.role
            );
            console.log(engineer);
            teamArr.push(engineer);
            growTeam()
      });
    }
    const createIntern = () => {
    
      return inquirer
        .prompt([
          {
            type: "list",
            name: "role",
            message: "Team memember's role?",
            choices: ["Manager", "Engineer", "Intern"],
          },
          {
            type: "input",
            name: "name",                                                                                
            message: "Please add team memeber's name:",
          },
          {
            type: "input",
            name: "id",
            message: "Team memember's employee ID:",
          },
          {
            type: "input",
            name: "email",
            message: "Team memember's email:",
          },
          {
            type: "input",
            name: "school",
            message: "What School do you attend?",
          },
        ])
        .then((answers) => {
          const intern = new Intern(
                answers.name,
                answers.id,
                answers.email,
                answers.school,
                answers.role
              );
              console.log(intern);
              teamArr.push(intern);
              growTeam()
        });
        
      }

    const growTeam = () => {
      inquirer.prompt([
        {
          type: "list",
          name: "role",
          message: "Would you like to grow your team?",
          choices: ["Engineer", "Intern", "Exit"],
        },
      ])
      .then((answers) =>{
        switch (answers.role) {
        case "Engineer":
          createEngineer();
          break;
        case "Intern":
          createIntern();
          break;
        case "Exit":
          writeHtml();
          break;
        default: writeHtml();
      }
      
    });
      console.log('********',teamArr,'******************');
      // add the portion of HTML to dispaly the beggining of the file
      // .. with the end of the file
      
    };


  
createManager()
    

const writeHtml = () => {
  writeFileAysnc("./dist/index.html", teamCards(teamArr, htmlString))
  .then(() => console.log("./dist/index.html"))
  .catch((err) => console.error(err));
};



const teamCards = (teamArr, htmlString) =>{
  
  renderTeam(teamArr, htmlString);
  console.log('&&&&&&&line 217',teamArr,'&&&&&&&&&&')
  console.log('*****line 218*****', htmlString,'*************');
  
  return `
  <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <link rel="preconnect" href="https://fonts.gstatic.com" />
    <link
      href="https://fonts.googleapis.com/css2?family=Open+Sans&family=Roboto+Slab&display=swap"
      rel="stylesheet"
    />

    <!--BOOT STRAP-->
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1"
      crossorigin="anonymous"
    />
    <link href="./assets/style.css" rel="stylesheet" type="text/css" />
  </head>
  <body>
    <header class="container-fluid">
      <div class="row">
        <div class="col"></div>
      </div>
    </header>
    <main class="container-fluid">
      <div class="row">
        <div class="col">
          <div class="container">
            <div class="row">${htmlString}</div>
          </div>
        </div>
      </div>
    </main>

    <footer class="container-fluid">
      <div class="row">
        <div class="col"></div>
      </div>
    </footer>
  </body>
</html>`

}