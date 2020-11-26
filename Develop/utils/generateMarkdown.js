//Determin weteher or not to use Table Of Contents
const tableOfContents = (tableData) => {
  if (tableData) {
    return `## Table Of Contents
    * [Installation](#installation)
    * [Usage](#installation)
    * [Credits](#installation)
    * [License](#installation)
    `;
    
  } else {
    return "";
  };
};

const screenShots = (screenData) => {
  if (screenData.confirmScreenshot) {
    return`
    ![${screenData.screenShotDescription}](${screenData.screenShotName})
    `;
  } else {
    return "";
  };
};

const creditAdd = (creditData) => {
  if(creditData){
    return `
    ## Credits
    ${creditData.creditsNames}
    * ${creditData.creditsLink}
    `;
  } else {
    return "";
  };
};

const featureAdd = (featureData) => {
  if (featureData.features) {
    return `
    ## Features
    ${featureData.features}
    `;
  } else {
    return "";
  };
};

// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ## Description
  ${data.description}
  ${tableOfContents(data)}
  ## Usage
  ${data.usage}
  ${screenShots(data)}
  ${creditAdd(data)}
  ## Licenses
  ${data.license}
  ${featureAdd(data)}

`;
}

module.exports = generateMarkdown;
