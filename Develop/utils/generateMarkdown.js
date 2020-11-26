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
  console.log("First:", screenData);
  if (screenData.confirmScreenshot) {
    return`
    ![${screenData.screenShotDescription}](${screenData.screenShotName})
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

`;
}

module.exports = generateMarkdown;
