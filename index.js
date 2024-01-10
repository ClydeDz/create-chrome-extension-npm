#!/usr/bin/env/node 

import inquirer from 'inquirer';
import ora from 'ora';
import download from 'download-git-repo'

const templateOptions = {
    comprehensive: {
        gitHubRepository: 'chrome-extension-template',
        displayName: 'Comprehensive Chrome extension'
    },
    simple: {
        gitHubRepository: 'simple-chrome-extension-template',
        displayName: 'Simple Chrome extension'
    },
}

const spinner = ora('Downloading...');

const inquirerQuestions = [
    {
      name: 'template-choice',
      type: 'list',
      message: 'What template would you like to generate?',
      choices: [templateOptions.comprehensive.displayName, templateOptions.simple.displayName]
    }
];
 
inquirer.prompt(inquirerQuestions)
    .then(answers => {
        const projectChoice = answers['template-choice'];
        if (projectChoice === templateOptions.comprehensive.displayName) {
            downloadRepository(templateOptions.comprehensive.gitHubRepository)
        } else {
            downloadRepository(templateOptions.simple.gitHubRepository)
        }
    }).catch((e) => {
        spinner.fail('Download failed due to - ' + e)
    });

const downloadRepository = (repository) => {    
    spinner.start();
    download(`clydedz/${repository}`, './', function (err) {
        err ? spinner.fail('Download failed. Please try again later.') : spinner.succeed('Download complete!');
    })
}
