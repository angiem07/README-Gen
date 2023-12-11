// Function to render license badge
function renderLicenseBadge(license) {
  if (license == 'None') {
    return ``;
  } else  {
    return `[![License](https://img.shields.io/badge/license-${license}-blue.svg)](https://opensource.org/licenses/${license})`;
  }
};

// Function to render license link
function renderLicenseLink(license) {
  if (license == 'None') {
    return ``;
  } else { 
    return `[License](https://opensource.org/licenses/${license})`;
  }
};

// Function to render license section of README
function renderLicenseSection(license) {
  if (license == 'None') {
    return `## License
N/A`;
  } else {
    return `## License

This project is licensed under the ${license} license. See the [LICENSE](https://opensource.org/licenses/${license}) file for details.`;
  }
};

// Function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

${renderLicenseBadge(data.license)}

## Description
${data.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)
- [License](#license)

## Installation
${data.installation}

## Usage
${data.usage}

## Contributing
${data.contributing}

## Tests
${data.tests}

## Questions
For questions about the project, contact: 
- Email: ${data.email} 
- GitHub: (https://github.com/${data.gituser})

${renderLicenseSection(data.license)}

`;
}

module.exports = generateMarkdown;

