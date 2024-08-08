# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

## Project Setup

1. Download the project from github.
2. npm i command do install all necessary libraries
3. create a .env file and put your token as REACT_APP_AUTH_TOKEN , I did not include it to avoid leaks but if required please email me and I will provide my token
4. npm start runs the app , after it is loaded you can check the application

## Project Features

### Project Pages

Project consists of 3 pages /users , /createUser , /users/id.
The /users and / are the same page
As a React App this is a single page application so no navigation with links was used.

### Content of Pages

#### The layout

All pages have the same layout consisting of a navigation bar and a footer
Also there is a modal component that can be accessed from the entire website

#### Users page

The users page contains a couple of cards that are filled with API data.
The page has pagination ,loading screen and popup in case of deletion.
Each card has an update and a delete button both functional.
The Delete button displays a popup and if you again press delete the item is removed from the list , if canceled the popup goes away without any change to the users list
The update button will send you to the /users/id page where you will find a form with all the data ready to be edited , but more on that later.

#### Create page

The create user page has a form that is dynamically generated with validations that are also dynamically generated. You fill the form correctly and a popup shows up to tell you that the user has been added successfully, on the other hand if there is an error like if you try to resubmit the same user , the API gives back an error message that is going to be displayed in the popup with fail css style

#### Users/id page

This is the same page as create page , since they both do the same job it would be ashame not to reuse the entire page, since this is the entire idea of React.
The page does not create users however , it's functionality is in updating a current user.

### Application Features

1. The website is mostly dynamic , with a lot of reusable componets, and even pages.
   It also has a lot of functions that allow you to mass produce dynamically the code that you need.
2. The most important libraries are :
   2.1) Tailwind for styling
   2.2) Yup and React-Hook-Form for form handling and validation
   2.3) Axios for api calls
   2.4) Typescript for type checking the entire application
   2.5) React-router-dom for application routing
   2.6) And a special shoutout to React itself since it made all of this possible
3. Because of the dynamic nature and sticking to typescript it is fairly easy to navigate the project and create bigger components, f.e if you wanted to build another form from scratch you could reuse the form component in the project and give it an array to build an entirely new form with ready to go handling and validation

