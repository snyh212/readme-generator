// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const prepend = require("prepend");
/* const genMarkdown = require('./generateMarkdown'); */


// TODO: Create an array of questions for user input
/* const questions = [ */
inquirer
.prompt([
  {
    type: 'input',
    message: 'What is your project title?',
    name: 'title',
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
    choices: ['MIT', 'other', 'other'],
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
.then((data) => {
const markdown = `
# ${data.title}

## Description
${data.description}

## Usage
${data.usage}

## License
${data.license}

## Contribution
${data.contribution}

## Tests
${data.tests}

## Questions
GitHub: ${data.github}
E-mail: ${data.email}
`;

  fs.writeFile("./README.md", markdown, err => {
    console.log(data);
    if(data.license == "MIT") {
      prepend("README.md", "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)", err => {
        if(err) {
          console.log(err);
        }
      })
    }
    if(err) {
      console.log(err);
    }
  });

});
/* ]; */

/* 

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
 */