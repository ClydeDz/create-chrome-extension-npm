#!/usr/bin/env/node 

import ora from 'ora';

const spinner = ora('Downloading...');
spinner.start();

setTimeout(() => {
    spinner.succeed('Download complete');
}, 5000);
