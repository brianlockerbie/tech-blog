<h1 align="center">Talking Tech</h1>

## Description
This application allows you to create posts and comment on other posts to express your thoughts in the tech community. Users can make an account, log in, and immediately view our database of blog posts made by other users. 


## Technologies
* JavaScript
* CSS
* Handlebars.js
* MySQL
* Node.js
* Express

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Screenshot](#screenshot)
- [License](#license)


## User Story
AS A developer who writes about tech<br>
I WANT a CMS-style blog site<br>
SO THAT I can publish articles, blog posts, and my thoughts and opinions

## Acceptance Criteria
GIVEN a CMS-style blog site<br>
WHEN I visit the site for the first time<br>
THEN I am presented with the homepage, which includes existing blog posts if any have been posted; navigation links for the homepage and the dashboard; and the option to log in<br>
WHEN I click on the homepage option<br>
THEN I am taken to the homepage<br>
WHEN I click on any other links in the navigation<br>
THEN I am prompted to either sign up or sign in<br>
WHEN I choose to sign up<br>
THEN I am prompted to create a username and password<br>
WHEN I click on the sign-up button<br>
THEN my user credentials are saved and I am logged into the site<br>
WHEN I revisit the site at a later time and choose to sign in<br>
THEN I am prompted to enter my username and password<br>
WHEN I am signed in to the site<br>
THEN I see navigation links for the homepage, the dashboard, and the option to log out<br>
WHEN I click on the homepage option in the navigation<br>
THEN I am taken to the homepage and presented with existing blog posts that include the post title and the date created<br>
WHEN I click on an existing blog post<br>
THEN I am presented with the post title, contents, post creator’s username, and date created for that post and have the option to leave a comment<br>
WHEN I enter a comment and click on the submit button while signed in<br>
THEN the comment is saved and the post is updated to display the comment, the comment creator’s username, and the date created<br>
WHEN I click on the dashboard option in the navigation<br>
THEN I am taken to the dashboard and presented with any blog posts I have already created and the option to add a new blog post<br>
WHEN I click on the button to add a new blog post<br>
THEN I am prompted to enter both a title and contents for my blog post<br>
WHEN I click on the button to create a new blog post<br>
THEN the title and contents of my post are saved and I am taken back to an updated dashboard with my new blog post<br>
WHEN I click on one of my existing posts in the dashboard<br>
THEN I am able to delete or update my post and taken back to an updated dashboard<br>
WHEN I click on the logout option in the navigation<br>
THEN I am signed out of the site<br>
WHEN I am idle on the site for more than a set time<br>
THEN I am able to view comments but I am prompted to log in again before I can add, update, or delete comments


## Installation
First clone the repository from GitHub. Run npm i in the terminal to install the following packages: Node.js, Express.js, Sequelize, mysql2, connection-session/express-session, and Jest. In the teriminal connect to the database by entering mysql -u root -p. Then enter the password located in the .env file. After that source the schema.sql. Connect to the server by entering npm start in the terminal.

## Usage
Live Heroku link [here](https://shrouded-headland-93448.herokuapp.com)


## Screenshots
<img src="assets/images/talking-tech-ss.png">
<img src="assets/images/talking-tech-ss1.png">

## License
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)<br>
This project is licensed under the MIT License - see the [license info](https://opensource.org/licenses/MIT) for more details.