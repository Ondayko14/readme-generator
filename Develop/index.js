const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the name of your project?(Required)',
            validate: titleInput => {
                if(titleInput) {
                    return true;
                } else {
                    console.log("Please insert a title!");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'description',
            message: 'Insert a description of your project.(Required)',
            validate: descriptionInput => {
                if(descriptionInput) {
                    return true;
                } else {
                    console.log("Please insert a description of your project!");
                    return false;
                }
            }
        },
        {
          type: 'confirm',
          name: 'confirmTableOfContents',
          message: 'Would you like to add a table of contents?',
          default: true  
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Provide information on how to use this program'
        },
        {
            type: 'confirm',
            name: 'confirmScreenshot',
            message: 'Would you like to add screenshots?',
            default: false
        },
        {
            type: 'confirm',
            name: 'creditsConfirm',
            message: 'Were there any contributions made by collaberators?',
            default: false
        },
        {
            type: 'input',
            name: 'creditsNames',
            message: 'Please insert the names of the contributers',
            when: ({creditsConfirm}) => {
                if(creditsConfirm) {
                    return true;
                } else {
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'creditsLink',
            message: 'Please insert the links to your contributers',
            when: ({creditsConfirm}) => {
                if(creditsConfirm) {
                    return true;
                } else {
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'license',
            message: 'Please insert a license type'
        },
        {
            type: 'confirm',
            name: 'confirmFeatures',
            message: 'Would you like to insert additional features?',
            default: false
        },
        {
            type: 'input',
            name: 'features',
            message: 'Please insert your features here',
            when: ({confirmFeatures}) => {
                if(confirmFeatures) {
                    return true;
                } else {
                    return false;
                }
            }
        }

    ]);
};


// function call to initialize program
init()
.then(readMeData => {
    return generateMarkdown(readMeData);
});
