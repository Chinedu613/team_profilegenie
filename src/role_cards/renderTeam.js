const renderTeam = (teamArr, htmlString) => {
  console.log("render team 4 ********", teamArr, "******************");

  const fltrArrayManager = teamArr.filter(
    (employee) => employee.getRole() === "Manager"
  );

  console.log("----------filter", fltrArrayManager);


  const managerGenie = (manager) => {
    return `
        <div class="col-4">
        <div class="card mb-3">
            <div class="row g-0">
                <div class="col-md-8">
                    <div class="card-body">
                        <h5 class="card-title">${manager.getRole()}</h5>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">Name: ${manager.getName()}</li>
                            <li class="list-group-item">Email: ${manager.getEmail()}</li>
                            <li class="list-group-item">ID: ${manager.getId()}</li>    
                            <li class="list-group-item">Office: ${manager.getOffice()}</li>
                        </ul>
                    <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                    </div>
                </div>
            </div>
        </div>
    </div>`;
  };

htmlString.push(fltrArrayManager.map((manager) => managerGenie(manager)));

  const fltrArrayIntern = teamArr.filter(
    (employee) => employee.getRole() === "Intern"
  );

  console.log("----------filter", fltrArrayIntern);


  const internGenie = (intern) => {
    return `
<div class="col-4">
    <div class="card mb-3">
        <div class="row g-0">
            <div class="col-md-8">
                <div class="card-body">
                    <h5 class="card-title">${intern.getRole()}</h5>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">Name: ${intern.getName()}</li>
                        <li class="list-group-item">Email: ${intern.getEmail()}</li>
                        <li class="list-group-item">ID: ${intern.getId()}</li>    
                        <li class="list-group-item">School: ${intern.getSchool()}</li>
                    </ul>
                <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                </div>
            </div>
        </div>
    </div>
</div>`;
  };
  
  htmlString.push(fltrArrayIntern.map((intern) => internGenie(intern)));



  const fltrArrEngineer = teamArr.filter(
    (employee) => employee.getRole() === "Engineer"
  );
  console.log("----------filter", fltrArrEngineer);


  const engineerGenie = (engineer) => {
    return `
    <div class="col-4">
    <div class="card mb-3">
        <div class="row g-0">
            <div class="col-md-8">
                <div class="card-body">
                    <h5 class="card-title">${engineer.getRole()}</h5>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">Name: ${engineer.getName()}</li>
                        <li class="list-group-item">Email: ${engineer.getEmail()}</li>
                        <li class="list-group-item">ID: ${engineer.getId()}</li>
                        <li class="list-group-item">Github: ${engineer.getGit()}</li>    
                        
                    </ul>
                <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                </div>
            </div>
        </div>
    </div>
</div>`;
  };
  htmlString.push(fltrArrEngineer.map((engineer) => engineerGenie(engineer)));
};

module.exports = renderTeam;
