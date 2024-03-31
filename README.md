
React Routing & Authentication Assignment
Problem Statement
Create the following application the boilerplate code provided .

Submission Instructions [Please note]
Maximum Marks - 18
The Submission should not contain spaces, for example /rct-101 folder/eval will not work
Do not push node_modules and package_lock.json to github
 ✅ able to submit the app - 1 mark ( minimum score )
 ✅ Check if navbar is present on all pages - 2 mark
 ✅ Check if page is redirected to home component correctly on clicking Home - 2 marks
 ✅ Check if page is redirected to about component correctly on clicking About - 2 marks
 ✅ Check if page is redirected to contact component correctly on clicking Contact - 2 marks
 ✅ Check if products page is private - 3 marks
 ✅ Check if auth is working properly, and login page is redirecting to home after authentication - 3 marks
 ✅ Check if products page is working properly - 3 marks
Installation
Use node version(LTS) should be v16.16.0

Don't change/override package.json

please make sure you do not push package-lock.json

Download and unzip the boilerplate file and then copy the "contents" of the unzipped file in the Masai Folder.

Run the following commands inside,

npm install --engine-strict
npm start
npm run server -> to start the json-server
Note:

Libraries needs to be installed by yourself
Not following the above instructions will lead your testcases to fail
Problem
Understanding Component Structure
App
Login (should be rendered on route "/login")
Home (should be rendedered on default route "/")
About (should be rendered on route "/about")
Contact (should be rendered on route "/contact")
Products (should be rendered on route "/products")
Context
AuthContextProvider
Routes
AllRoutes
PrivateRoute
Note - Make sure you use only the given components and dont create new files and folders. Changing component name, structures might result in giving you zero marks.

Features to build
Create a navbar which has the following links (strcitly should have the same order as below)
Login
Home
About
Contact
Products
Authentication will be done using this API : https://reqres.in/api/login (POST request).
Use fetch to make the API request.
Read the API docs to find the credentials for login: https://reqres.in/
Clicking on the navbar link should redirect the user to that component and update url at the same time

Navbar component should be visible on every page

Products page should only be accesible only after login

Use this api to fetch the products data: https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-products

redirect the user to login page if the user tries to access product page without loging in

User should always be redirected to home when the login form is successfully submitted

Login page should be accessible after loging in, rather redirect the user to "/" page (Use Private Route component to achieve this)

Use context api to maintain state in the application:

Your initial state should have isAuth as false
Screenshot 2022-12-22 at 3 17 16 PM

Screenshot 2022-12-22 at 3 17 43 PM

Screenshot 2022-12-22 at 3 17 49 PM

Screenshot 2022-12-22 at 3 17 55 PM

Screenshot 2022-12-22 at 3 18 02 PM

General Instructions (IMPORTANT)
Do not use Global CSS, instead use <componentName>.module.css convention for Css in that file.
Do Not Remove data-cy="xxxx" from anywhere, this are used by testing tools to test your code, removal of this will lead to low score.
Make sure you use only the given components and dont create new files and folders as chaging component name, structures might result in giving you zero marks
Note - This might not be all the things, you are free to use other components.

General guidelines
The system on cp.masaischool.com may take between 1-20 minutes for responding,
so we request you to read the problem carefully and debug before itself
we also request you not to just submit it last minute
try to keep one submission at a time
