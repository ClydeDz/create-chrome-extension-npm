#!/usr/bin/env node

import inquirer from 'inquirer';
import ora from 'ora';
import download from 'download-git-repo'

const templateOptions = {
    comprehensive: {
        gitHubRepository: 'chrome-extension-template',
        displayName: 'Comprehensive Chrome Extension (approx. 496 KB)'
    },
    simple: {
        gitHubRepository: 'simple-chrome-extension-template',
        displayName: 'Simple Chrome Extension (approx. 12.0 KB)'
    },
};

const spinner = ora('Downloading...');

const promptQuestions = [
    {
      name: 'template-choice',
      type: 'list',
      message: 'What extension template would you like to generate?',
      choices: [templateOptions.comprehensive.displayName, templateOptions.simple.displayName]
    }
];
 
inquirer.prompt(promptQuestions)
    .then(answers => {
        if (answers['template-choice'] === templateOptions.comprehensive.displayName) {
            downloadRepository(templateOptions.comprehensive.gitHubRepository);
        } else {
            downloadRepository(templateOptions.simple.gitHubRepository);
        }
    }).catch((e) => {
        spinner.fail('Download failed due to - ' + e);
    });

const downloadRepository = (repository) => {    
    spinner.start();
    const fileExclusionFilter = { filter: file => file.path.indexOf("docs") < 0 };

    download(`clydedz/${repository}`, './', fileExclusionFilter, function (err) {
        err ? spinner.fail('Download failed. Please try again later.') : spinner.succeed('Template generated!');
    });
}
