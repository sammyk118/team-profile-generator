// TODO: Write code to define and export the Employee class
const inquirer = require("inquirer");
const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");

function promptUser() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Team Member\'s name',
        },
        {
            type: 'list',
            name: 'role',
            message: 'Choose the team member\'s role',
            choices: ["Engineer", "Intern", "Manager"],
        },
        {
            type: 'input',
            name: 'email',
            message: 'Team Member\'s email:',
        },
        {
            type: 'input',
            name: 'id',
            message: 'Team member\'s id:',
        },

    ])
};

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
