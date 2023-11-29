const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown'); // Adjust the path based on your project structure

// Packages needed for this application
// const inquirer = require('inquirer');
// const fs = require('fs');
// const generateMarkdown = require('./generateMarkdown');

// Array of questions for user input
const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'Provide a title for you project?',
  },
  // Add more questions for other project details
  {
    type: 'input',
    name: 'description',
    message: 'Provide a short description of your project:',
  },
  {
    type: 'input',
    name: 'installation',
    message: 'Provide installation instructions?',
  },
  {
    type: 'input',
    name: 'usage',
    message: 'Provide steps of usage for this application?',
  },
  {
    type: 'input',
    name: 'contributing',
    message: 'Provide contributing information?',
  },
  {
    type: 'input',
    name: 'tests',
    message: 'Provide tests commands and intructions ?',
  },
  {
    type: 'input',
    name: 'email',
    message: 'Provide your GitHub username and/or email address?',
  },
  {
    type: 'list',
    name: 'license',
    message: 'Choose a license for your project:',
    choices: ['MIT', 'GPL-3.0', 'Apache-2.0', 'BSD-3-Clause', 'None'],
  },
];

// Function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) =>
    err ? console.error(err) : console.log('README.md generated successfully!')
  );
}

// Function to initialize app
function init() {
  inquirer.prompt(questions).then((answers) => {
    const markdown = generateMarkdown(answers);
    writeToFile('README.md', markdown);
  });
}

// Function call to initialize app
init();
