# @clydedsouza/create-chrome-extension
An npx command to create a Chrome extension. This project generator supports two templates:
1. [Comprehensive Chrome extension](https://github.com/ClydeDz/chrome-extension-template)
2. [Simple Chrome extension](https://github.com/ClydeDz/simple-chrome-extension-template)

When run in the CLI, you'll be presented with an option to choose one of the two templates to install. Clicking on either option will download the Chrome extension template files into the folder in which this command was run. 

## Installing and running
### First time
You can use the `npx` command to run this project generator. The first time it might prompt you to confirm installing, as shown below. Selecting `y` will install and continue executing the command. 
```zsh
> npx @clydedsouza/create-chrome-extension

Need to install the following packages:
@clydedsouza/create-chrome-extension@version
Ok to proceed? (y) y
```

### Subsequent times
For the subsequent times, you can run the `npx` command directly as shown below. 
```zsh
> npx @clydedsouza/create-chrome-extension

? What extension template would you like to generate? (Use arrow keys)
❯ Comprehensive Chrome Extension (approx. 496 KB)
  Simple Chrome Extension (approx. 12.0 KB)
```
