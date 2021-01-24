// TODO: Write code to define and export the Employee class
const inquirer = require("inquirer");
const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");

const team = [];

function promptUser() {
    return inquirer.prompt([

        {
            type: 'list',
            name: 'role',
            message: 'Choose the team member\'s role',
            choices: ["Engineer", "Intern", "Manager"],
        },


    ]).then(function (role) {
        console.log(role);
        if (role.role == "Intern") {
            inquirer.prompt([
                {
                    type: 'input',
                    name: 'name',
                    message: 'Team member\'s name',
                },
                {
                    type: 'input',
                    name: 'id',
                    message: 'Team member\'s id:',
                },
                {
                    type: 'input',
                    name: 'email',
                    message: 'Team member\'s email:',
                },
                {
                    type: 'input',
                    name: 'school',
                    message: 'Team member\'s school:'
                }
            ]).then(function (intern) {
                let newIntern = new Intern(intern.name, intern.id, intern.email, intern.school);
                console.log(newIntern);
                team.push(newIntern);
            });

        } else if (role.role == "Engineer") {
            inquirer.prompt([
                {
                    type: 'input',
                    name: 'name',
                    message: 'Team member\'s name',
                },
                {
                    type: 'input',
                    name: 'id',
                    message: 'Team member\'s id:',
                },
                {
                    type: 'input',
                    name: 'email',
                    message: 'Team member\'s email:',
                },
                {
                    type: 'input',
                    name: 'github',
                    message: 'Team member\'s github:'
                }
            ]).then(function (engineer) {
                let newEngineer = new Engineer(engineer.name, engineer.id, engineer.email, engineer.github);
                console.log(newEngineer);
                team.push(newEngineer);
            });
        } else if (role.role == "Manager") {
            inquirer.prompt([
                {
                    type: 'input',
                    name: 'name',
                    message: 'Team member\'s name',
                },
                {
                    type: 'input',
                    name: 'id',
                    message: 'Team member\'s id:',
                },
                {
                    type: 'input',
                    name: 'email',
                    message: 'Team member\'s email:',
                },
                {
                    type: 'input',
                    name: 'office',
                    message: 'Team member\'s office number:'
                }
            ]).then(function (manager) {
                let newManager = new Manager(manager.name, manager.id, manager.email, manager.office);
                console.log(newManager);
                team.push(newManager);

            });



        }
    })
}

const generateHTML = (data) =>
    `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
  <title>Document</title>
</head>
<body>
  <div class="jumbotron jumbotron-fluid">
  <div class="container">
    <h1 class="display-4">Hi! My name is ${data.name}</h1>
    <p class="lead">I am from ${data.location}.</p>
    <h3>Example heading <span class="badge badge-secondary">Contact Me</span></h3>
    <ul class="list-group">
      <li class="list-group-item">My GitHub username is ${data.github}</li>
      <li class="list-group-item">LinkedIn: ${data.linkedin}</li>
    </ul>
  </div>
</div>
</body>
</html>`;

promptUser()
//   .then((answers) => writeFileAsync('index.html', generateHTML(answers)))
//   .then(() => console.log('Successfully wrote to index.html'))
//   .catch((err) => console.error(err));
