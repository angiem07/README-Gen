// Function to render license badge
function renderLicenseBadge(license) {
  if (license) {
    return `[![License](https://img.shields.io/badge/license-${license}-blue.svg)](https://opensource.org/licenses/${license})`;
  }
  return '';
}

// Function to render license link
function renderLicenseLink(license) {
  if (license) {
    return `[License](https://opensource.org/licenses/${license})`;
  }
  return '';
}

// Function to render license section of README
function renderLicenseSection(license) {
  if (license) {
    return `## License

This project is licensed under the ${license} license. See the [LICENSE](https://opensource.org/licenses/${license}) file for details.`;
  }
  return '';
}

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
${renderLicenseLink(data.license)}

## Installation
${data.installation}

## Usage
${data.usage}

## Contributing
${data.contributing}

## Tests
${data.tests}

## Questions
For questions about the project, contact ${data.email}.
${renderLicenseSection(data.license)}
`;
}

module.exports = generateMarkdown;

