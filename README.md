# PROJECT TITLE: Forex On The Go

## DESCRIPTION: 
This REACT application allows a user to access exchangerate-api to access currency conversion rates. Users will have the ability to toggle through three different views (To Home, To Host, All Rates). To Home and To Host routes will allow users to convert the value of their input to which ever currency they select. If they wish, they can then invert the conversion by pressing the "Switch" button.

### Example: 
To Home route will convert the currency in To Host(country you are visiting) to the equivalent value in To Home (Country you are from). The "Switch" button will invert this conversion from To Home to To Host.

## SET UP INSTRUCTIONS: 
### Initializing Application:
1. cd forex on the go
2. npm install
3. npm run dev
4. if yout get this response: Failed to resolve import "react-router-dom" from "src/App.jsx". Does the file exist? 
    run: npm install react-router-dom

### API used and endpoint(s):
#### Exchange Rate API:
https://app.exchangerate-api.com/sign-in

### NOTE: 
1. Must sign up to gain access to API key
2. Must update API_Key variable in src/api.js to allow application to work

#### Example API Access Key Integration Template:
https://v6.exchangerate-api.com/v6/YOUR-API-KEY/codes

## CHALLENGES AND KNOWN BUGS: 
1. Users must click "convert" button again after clicking the "Switch" button to see the inverted conversion.
