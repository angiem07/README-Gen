const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown'); 

// Prompt questions
const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'Provide a title for you project?',
  },
  
  {
    type: 'input',
    name: 'description',
    message: 'Provide a short description of your project:',
  },
  {
    type: 'input',
    name: 'installation',
    message: 'Provide installation instructions:',
  },
  {
    type: 'input',
    name: 'usage',
    message: 'Provide usage steps for this application:',
  },
  {
    type: 'input',
    name: 'contributing',
    message: 'Provide contribution information:',
  },
  {
    type: 'input',
    name: 'tests',
    message: 'Provide tests commands and intructions:',
  },
  {
    type: 'input',
    name: 'email',
    message: 'Provide your email address:',
  },
  {
  type: 'input',
    name: 'gituser',
    message: 'Provide your GitHub username:',
  },
  {
    type: 'list',
    name: 'license',
    message: 'Choose a license for your project:',
    choices: ['MIT', 'GPL-3.0', 'Apache-2.0', 'BSD-3-Clause', 'None'],
  },
];

function fileNamePrompt(data) {
  inquirer
    .prompt([
      {
        type: 'input',
        name: 'fileName',
        message: 'Enter the desired file name (including extension, e.g., README.md):',
      },
    ])
    .then((answer) => {
      const fileName = answer.fileName.trim() || 'README.md'; // Default to README.md if no input
      writeToFile(fileName, data); 
    });
}

// Function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) =>
    err ? console.error(err) : console.log(`${fileName} generated successfully!`)
  );
}

// Function to initialize app
function init() {
  inquirer.prompt(questions).then((answers) => {
    const markdown = generateMarkdown(answers);
    fileNamePrompt(markdown); // Correct function call
  });
}

// Function call to initialize app
init();
