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
    message: 'How to install:',
    name: 'install',
  },
  {
    type: 'input',
    message: 'Project Usage',
    name: 'usage',
  },
  {
    type: 'list',
    message: 'What licences:',
    choices: ['MIT', 'Mozilla', 'Boost', 'Apache', 'Eclipse', 'Unlicense', 'WTFPL'],
    name: 'license',
  },
  {
    type: 'input',
    message: 'Who contributed',
    name: 'contributed',
  },
  {
    type: 'input',
    message: 'Tests Instructions',
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
const markdown = `# ${data.title}

## Description
${data.description}

## Table of Contents
[Usage](#usage)
-[License](#license)
-[Contribution](#contribution)
-[Tests](#tests)
-[Questions](#questions)

## Installation
${data.install}

## Usage
${data.usage}

## License
${data.license}

## Contribution
${data.contribution}

## Tests
${data.tests}

## Questions & Contact
GitHub: [${data.github}](https://github.com/${data.github})
E-mail: ${data.email}
`;

  fs.writeFile("./README.md", markdown, err => {
    console.log(data);
    if(data.license == "MIT") {
      prepend("README.md", "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)", err => {
        if(err) {console.log(err)}
      })
    }
    if(data.license == "Mozilla") {
      prepend("README.md", "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)", err => {
        if(err) {console.log(err)}
      })
    }
    if(data.license == "Boost") {
      prepend("README.md", "[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)", err => {
        if(err) {console.log(err)}
      })
    }
    if(data.license == "Apache") {
      prepend("README.md", "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)", err => {
        if(err) {console.log(err)}
      })
    }
    if(data.license == "Eclipse") {
      prepend("README.md", "[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)", err => {
        if(err) {console.log(err)}
      })
    }
    if(data.license == "WTFPL") {
      prepend("README.md", "[![License: WTFPL](https://img.shields.io/badge/License-WTFPL-brightgreen.svg)](http://www.wtfpl.net/about/)", err => {
        if(err) {console.log(err)}
      })
    }
    if(data.license == "Unlicense") {
      prepend("README.md", "[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)", err => {
        if(err) {console.log(err)}
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