# Fantastic Trivia App

## Project Description

The Fantastic Trivia Game (TFTG) is a trivia game application that will allow players to answer a set of 
questions from selected categories and post their score to a leaderboard for other players to see. 
Players can create an account, login with created credentials, and then select a category to answer a question set of that category. 
Players can also view and edit their profile information. Administrators can login, and create question sets by category and difficulty, 
with questions pulled from a trivia API. Administrators can also view leaderboards, and remove players from leaderboards or ban/suspend users for suspicious activity.

## Technologies Used

* Java 8
* Spring web/core
* Spring Data
* PostgreSQL
* Angular
* Boostrap 5
* Maven
* Junit4
* Log4J
* Jenkins
* HTML 5
* TypeScript
* AWS EC2/RDS/S3

## Features

List of features ready and TODOs for future development
* Players can choose between over 20 categories and answer trivia questions     
* Players can post their score to a leaderboard and compete with other players
* Administrators can create custom question sets from a question pool of over 5,000 questions via the https://opentdb.com trivia API

To-do list:
* Players would be able to report specific questions for review 
* Administrators would be able to grant priviliges to players

## Getting Started
   
* Start by clonning the repository
>git clone https://github.com/210419-USF-BSN-Java/Fantastic-Trivia-App.git

* Set enviroment variables for  
> * Database password =  DB_PASS
> * Database username =  DB_USER
> * Database url =  DB_URL
* Compile maven project
* Run jar file
> java -jar FantasticTrivia.jar
* Navigate to Angular frontend folder
* Then build and serve Angular App 
> ng serve


## Usage

> If hosted locally navigate to http://localhost:4200/ to begin to login. Enter user name and password and click login. Then the user is at the homepage where they will
have the option to select a category to be quizzed on. The user will then answer the multiple choice questions and submit their answers. The user will then be able to view their score on a leader board.


## Contributors

> Shackleford Raphael (Team Lead, Frontend)
> Martinez James (Backend)
> Clayton Nolan (Git Flow, Middleware)
> Choy Ryan (Backend)
