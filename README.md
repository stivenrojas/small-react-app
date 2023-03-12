# small-react-app
Displays Newspaper information

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Dependencies
* React
* node
* npm


## Configure dev env ##

Add the following environment value to an .env file.

```bash
REACT_APP_SG_NYT_API="oTUELa3Pr9VvpyOPb5W8NVJydATjewn3"
```

## Build and run ##

- Install Node dependencies
- Use nvm to install node and npm. Tested with versions 18.12.0 and 9.4.2 respectively.
```bash
$ nvm install 18.12.0
```
- Run `npm install`.
```bash
$ npm install
```
- Export the api key from the .env file manually.
```
$ export REACT_APP_NYT_API
```
Alternatively, if you have direnv installed you can run:
```
$ direnv allow
```
If you want to check if the variable was loaded successfully, run:
```
$ echo $REACT_APP_NYT_API
You should see "oTUELa3Pr9VvpyOPb5W8NVJydATjewn3" printed in the console.
```
- Run the app in the development mode
```
$ npm start
```
- Open http://localhost:3000 to view it in the browser

## Unit tests ##

To run unit tests, run the following command:
```
$ npm test
```
You should see unit tests for the differente components in the app.
## Environment Variables

**Note** Env vars meant to be included within the app start with `REACT_APP`.