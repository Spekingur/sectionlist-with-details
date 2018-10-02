# Assignment I: Detail Screen

## Set up Expo Project


### Prerequisites
1. Install Expo XDE from [here](https://docs.expo.io/versions/latest/introduction/installation)
2. Install VS Code from [here](https://code.visualstudio.com/Download)
3. Install the plugins `ESLint` by Dirk Bäumer and `Prettier` by Esben Petersen
4. Make sure you reload VS Code after installing
5. In VS Code, add the following to your user settings object: `"prettier.eslintIntegration": true` and `"editor.formatOnSave": true`. Beware, this is a JSON file and cannot have trailing commas (the last line cannot end with a comma). This ensures Prettier takes it's directions from the ESLint configuration and the latter ensures that the editor will perform a formatting when you save your files.

### Create Project

1. Run the Expo XDE
2. Create New Project and choose blank template
3. Name the project something appropriate
4. Copy the provided `data.json` file into the root of the project
5. Copy the provided `eslintrc.json` file into the root of the project and rename it `.eslintrc.json`

### Install packages

* Install the packages required for ESLint. To do this run `yarn add eslint eslint-config-airbnb eslint-plugin-import eslint-plugin-react eslint-plugin-jsx-a11y babel-eslint --dev` in the project folder in you terminal.