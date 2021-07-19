# Full-Stack-BMI-Calculator-Web-App
BMI calculator web app built using Node.js &amp; Javascript.

## BMI Calculator Web App
- This is a full-stack web app built using:
  - HTML, CSS & Javascript (Front-End)
  - Node.js & Express.js (Back-End)
  
- This web app requests height and weight of the user to calculate their BMI and informs what category they belong to: Underweight, Normal, Over weight & Obese. 

## Steps to set-up web development environment using command prompt
1. Make a new directory: `mkdir DIRECTORY_PATH`
2. Change the current directory to the newly created directory: `cd NEW_DIRECTORY_PATH`
3. Create a new javascript file: `touch bmiCalculator.js`
4. initialize the npm: `npm init`
5. Create a new HTML file: `touch index.html`
6. Create a new styles sheet: `touch styles.css`
7. Install Express.js: `npm install express`
8. Install body parser: `npm install body-parser`

## Steps to set Express - Node.js web application framework

### To create an Express application.
`const express = require('express');` <br>
`const app = express();`

### To bind and listen the connections on the specified host and port.
`app.listen(PREFERRED_PORT_NUMBER);`

### To run the website
After performing the above steps and editing the contents in HTML, CSS and Javascript files: <br>
- Type in command prompt:
  - `node bmiCalculator.js` or
  - `nodemon bmiCalculator.js` 
  
- Open your preferred browser:
  - search for `localhost:PORT_NUMBER`
