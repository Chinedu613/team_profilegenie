const generateRole = (teamArr) => {
  return `
    
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Open+Sans&family=Roboto+Slab&display=swap" rel="stylesheet">
    
    <!--BOOT STRAP-->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1" crossorigin="anonymous">
    <link href="./assets/style.css" rel="stylesheet" type="text/css"/>

</head>
<body>
    <header class="container-fluid">
        <div class="row">
            <div class="col">
                
            </div>
        </div>
    </header>

    <main class="container-fluid">
        <div class="row">
            <div class="col">
                <div class="container">
                    <div class="row">
                        <div class="container">
                            <div class="row">
                                <div class="col-4">
                                    <div class="card mb-3" style="max-width: 540px;">
                                        <div class="row g-0">
                                            <div class="col-md-4">
                                                <img src="..." alt="...">
                                            </div>
                                            <div class="col-md-8">
                                                <div class="card-body">
                                                <h5 class="card-title">Card title</h5>
                                                <ul class="list-group list-group-flush">
                                                    <li class="list-group-item">An item</li>
                                                    <li class="list-group-item">A second item</li>
                                                    <li class="list-group-item">A third item</li>
                                                </ul>
                                                <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-4">
                                    <div class="card mb-3" style="max-width: 540px;">
                                        <div class="row g-0">
                                            <div class="col-md-4">
                                                <img src="..." alt="...">
                                            </div>
                                            <div class="col-md-8">
                                                <div class="card-body">
                                                <h5 class="card-title">Card title</h5>
                                                <ul class="list-group list-group-flush">
                                                    <li class="list-group-item">An item</li>
                                                    <li class="list-group-item">A second item</li>
                                                    <li class="list-group-item">A third item</li>
                                                </ul>
                                                <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-4">
                                    <div class="card mb-3" style="max-width: 540px;">
                                        <div class="row g-0">
                                            <div class="col-md-4">
                                                <img src="..." alt="...">
                                            </div>
                                            <div class="col-md-8">
                                                <div class="card-body">
                                                <h5 class="card-title">Card title</h5>
                                                <ul class="list-group list-group-flush">
                                                    <li class="list-group-item">An item</li>
                                                    <li class="list-group-item">A second item</li>
                                                    <li class="list-group-item">A third item</li>
                                                </ul>
                                                <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
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
</html>
    `;
};

 const Manager = {
  name: "CHin",
  id: "001",
  email: "@gmail.com",
  office: "002",
}; 

const Engineer = {
  name: "Natacha",
  id: "002",
  email: "@gmail.com",
  github: undefined,
};

const teamArr = [Manager, Engineer];

let managerRole = teamArr.filter(Engineer => teamArr.Engineer);


console.log("---------------", managerRole, "_________________________");

module.exports = generateRole;
