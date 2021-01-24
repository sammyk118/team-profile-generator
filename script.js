// TODO: Write code to define and export the Employee class
const inquirer = require("inquirer");
const fs = require("fs");
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
                addUser()
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
                addUser()
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
                addUser();
            });



        }
    })
    
}

function addUser() {
    inquirer.prompt([
        {
            name: "continue",
            message: "Add another team member?",
            type: "confirm",
        }
    ]).then(function (confirm) {
        if (confirm.continue) {
            promptUser();
        }
        else
            generateHTML();
    })
}
function generateHTML() {
    console.log("generateHTML");
    const siteArr = [];
    const startHTML = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
  <title>Team Profile</title>
</head>
<body>
    <nav class="navbar navbar-dark">
        <span class ="navbar-brand h1 text-center">Team Profile</span>
    </nav>
    <div class="container">
        <div class="row">`
        ;
    siteArr.push(startHTML);
    
    for (i = 0; i < team.length; i++){
        console.log("in the loop");
        let role = team[i].getRole();
        console.log(role);
        let member = `
        <div class="col-6">
        <div class="card mx-auto mb-3">
        <h5 class="card-header">${team[i].name}<br>${role}</h5>
        <ul class="list-group">
            <li class="list-group-item">ID: ${team[i].id}</li>
            <li class="list-group-item">Email: ${team[i].email}</li>
        `
        if (role === "Engineer") {
            member += `<li class="list-group-item">Github: ${team[i].github}</li>`
        }
        if (role === "Intern") {
            member += `<li class="list-group-item">School: ${team[i].school}</li>`
        }
        if (role === "Manager") {
            member += `<li class="list-group-item">Office Number: ${team[i].office}</li>`
        }

        member +=
        `
        </ul>
        </div>
        </div>
        `
        siteArr.push(member);
    }

    const siteEnd = `
    </div>
    </body>
    </html>
    `
    siteArr.push(siteEnd);
    
    fs.writeFile("./team.html", siteArr.join(""), function (err) {
        if (err) {
            console.log(err);
        }
    })
    
}

promptUser();