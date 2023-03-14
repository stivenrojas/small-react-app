# small-react-app
Displays Newspaper information

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Dependencies
* React
* node
* npm


## Configure dev env ##

Add the following environment value to an .env file with your API key from https://developer.nytimes.com/.

```bash
REACT_APP_SG_NYT_API="<api-key-value>"
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
```
You should see the value printed in the console.

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


## Application demo ##
![Screen Shot 2023-03-13 at 8 41 20 PM](https://user-images.githubusercontent.com/8335006/224879100-4b417889-c134-4a0b-96f1-d34db081c373.png)


