[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
# README Generator!

[video tutorial](https://drive.google.com/file/d/1K63s1LS-nJP7wJmMGnIdr2Ke3MTENJ3n/view?usp=sharing)

## Description

README Generator is a command line application that generates a markdown file named README.md, from a set of responses input by the user in response to prompts.

## Technologies used

HTML, JS, node.js, inquirer@8.2.4, require
On VS Code and GitBash


## Code and Functionality

### With this JS code we prompt the user with a question using the inquire npm package:
```
inquirer
 .prompt([
    {
      type: 'input',
      message: 'What is your project title?',
      name: 'title',
    },
```

### Here we use the values input by the user to generate markdown text:
```
    .then((data) => {
    const markdown = `# ${data.title}

    ## Description
    ${data.description}
```

### Finally here is the code that generates the README.md file:
```
    fs.writeFile("./README.md", markdown, err => {
      console.log(data);
```

## Contact Infromation

[E-mail: Snyh121@gmail.com](mailto:snyh121@gmail.com)  
[GitHub: snyh212](https://github.com/snyh212)  
[LinkdIn: Shmuel-Hoffman](https://www.linkedin.com/in/shmuel-hoffman-254b0223b?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BS2rg0PtBTLeG2szT2ZbGmg%3D%3D)