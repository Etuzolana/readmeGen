const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");
const generateMarkdown = require("./utils/generateMarkdown");
inquirer
  .prompt([
    {
      type: "input",
      name: "title",
      message: "What is the title of your project?",
    },
    {
      type: "input",
      name: "description",
      message: "What is the description of your project?",
    },
    {
      type: "input",
      name: "install",
      message: "How do you install the project?",
    },
    {
      type: "input",
      name: "resource",
      message: "what is the project resource?",
    },
    {
      type: "input",
      name: "developer",
      message: "who is the project developer?",
    },
    {
      type: "input",
      name: "contribution",
      message: "What is the project contribution?",
    },
  ])
  .then((answers) => {
    console.log(answers);
    fs.writeFile(path.join(__dirname, "/output/README.md"), generateMarkdown(answers), "utf8", () => {
      console.log("Success");
    });
  });
