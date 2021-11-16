function generateMarkdown(data) {
  return `# ${data.title}

## Description

${data.description}

## Install

${data.install}

## Resource

${data.resource}

## Developer

${data.developer}

## Contribution

${data.contribution}
`;
}

module.exports = generateMarkdown;
