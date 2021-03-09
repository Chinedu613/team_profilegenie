const renderTeam = (teamArr, htmlString) => {
  console.log("render team 4 ********", teamArr, "******************");

  const fltrArrayManager = teamArr.filter(
    (employee) => employee.getRole() === "Manager"
  );

  console.log("----------filter", fltrArrayManager);

  htmlString.push(fltrArrayManager.map((manager) => managerGenie(manager)));

  const managerGenie = (manager) => {
    return `
        <div class="col-4">
        <div class="card mb-3">
            <div class="row g-0">
                <div class="col-md-8">
                    <div class="card-body">
                        <h5 class="card-title">${manager.getRole}</h5>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">Name: ${manager.getName}</li>
                            <li class="list-group-item">Email: ${manager.getEmail}</li>
                            <li class="list-group-item">ID: ${manager.getID}</li>    
                            <li class="list-group-item">ID: ${manager.getOffice}</li>
                        </ul>
                    <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                    </div>
                </div>
            </div>
        </div>
    </div>`;
  };

  const fltrArrayIntern = teamArr.filter(
    (employee) => employee.getRole() === "Intern"
  );

  console.log("----------filter", fltrArrayIntern);

  htmlString.push(fltrArrayIntern.map((intern) => internGenie(intern)));

  const internGenie = (intern) => {
    return `
<div class="col-4">
    <div class="card mb-3">
        <div class="row g-0">
            <div class="col-md-8">
                <div class="card-body">
                    <h5 class="card-title">${intern.getRole}</h5>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">Name: ${intern.getName}</li>
                        <li class="list-group-item">Email: ${intern.getEmail}</li>
                        <li class="list-group-item">ID: ${intern.getID}</li>    
                        <li class="list-group-item">ID: ${intern.getOffice}</li>
                    </ul>
                <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                </div>
            </div>
        </div>
    </div>
</div>`;
  };

  const fltrArrEngineer = teamArr.filter(
    (employee) => employee.getRole() === "Engineer"
  );
  console.log("----------filter", fltrArrEngineer);
  htmlString.push(fltrArrEngineer.map((engineer) => engineerGenie(engineer)));

  const engineerGenie = (engineer) => {
    return `
    <div class="col-4">
    <div class="card mb-3">
        <div class="row g-0">
            <div class="col-md-8">
                <div class="card-body">
                    <h5 class="card-title">${engineer.getRole}</h5>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">Name: ${engineer.getName}</li>
                        <li class="list-group-item">Email: ${engineer.getEmail}</li>
                        <li class="list-group-item">ID: ${engineer.getID}</li>    
                        <li class="list-group-item">ID: ${engineer.getOffice}</li>
                    </ul>
                <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                </div>
            </div>
        </div>
    </div>
</div>`;
  };
};

module.exports = renderTeam;
