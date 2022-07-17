// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
    inquirer
    .prompt([
      {
        type: 'input',
        message: 'What is your project title?',
        name: 'projtitle',
      },
      {
        type: 'input',
        message: 'Describe your project:',
        name: 'description',
      },
      {
        type: 'input',
        message: 'Project Usage',
        name: 'usage',
      },
      {
        type: 'list',
        message: 'What licences:',
        choices: ['MIT', 'other', 'other'],/* connect licence name finder */
        name: 'license',
      },
      {
        type: 'input',
        message: 'Who contributed',
        name: 'contributed',
      },
      {
        type: 'input',
        message: 'Tests',
        name: 'tests',
      },
      {
        type: 'input',
        message: 'What is your github username?',
        name: 'github',
      },
      {
        type: 'input',
        message: 'What is your email address',
        name: 'email',
      },
    ])
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
