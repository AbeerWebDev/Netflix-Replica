# Netflix Replica
Link to project deployed with netlify. Live demo [here](https://abeers-netflix.netlify.app/)

## Table of Content
* General Information
* Technologies Used
* Features
* Screenshot
* Installation and Setup Instructions
* Usage
* Project Status
* Room for Improvement
* Acknowledgements
* Contact

## General Information
I created this administration panel that shows user profiles, products, and user transactions. This project uses react-routing, react hooks such as: useContext/useState/useReducer, and SCSS.

### Purpose of this project
To practice web design and routing.

## Technologies Used
* ReactJS
* HTML
* CSS
* JavaScript
* Material UI
* React Hooks
* Rechart
* Webkit

## Features
* React-routing.
* A Home page.
* A Login page => to access add: /login
* A users page => to access add: /users
* A user profile page => to access add: /users/any id e.g. 123
* Add new user page => to access add: /users/new
* Add new product page => to access add: /productss/new
* A dynamic logo button.
* A dynamic dark/light mode button.
* A dynamic add new user button.
* A dynamic upload image button.
* A dynamic delete user button.

## Screenshot
Home Page - Light Mode
![project screenshot](home-light-mode.png)

Home Page - Dark Mode
![project screenshot](home-dark-mode.png)

Users Page - Light Mode
![project screenshot](users-page-light-mode.png)

Add New Product Page - Light Mode
![project screenshot](add-new-product-light-mode.png)

## Installation and Setup Instructions

Clone down this repository. You will need node and `npm` installed globally on your machine.

### Installation:

`npm install`

To Run Test Suite:

`npm test`

To Start Server:

`npm start`

To Visit App:

`localhost:3000/`

## Usage

**Dynamic Logo**

* The Logo will always direct you to the home page.

**Dark/Light Mode**

* The dark/light mode buttons in both the side bar and the navigation bar will toggle between the two theme options.

**Dynamic Users Button**

* The users button present in the sidebar will take you to a page with a users list.

**Dynamic Products Button**

* The products button present in the sidebar will take you to a page with a products list, this could be confirmed by checking the URL.

**URL Routing**

* To access all website pages look URL extensions in features.

**Dynamic Add New User Button**

* The add new user button present above the users list will allow you to add new users.

**Dynamic Delete User Button**

* The delete user button will delete the user's information from the users table.

**Single User Profile**

* By adding any ID to the URL from the users page (e.g. /users/123) you will be directed to a single user profile.

## Project Status
Project is: Completed

## Room for Improvement
* Make all buttons dynamic.
* Add authentication page.

## Acknowledgements
* Many thanks to LamaDev.

## Contact
Created by Abeer Ahmed [LinkedIn profile](add url) - feel free to contact me.

