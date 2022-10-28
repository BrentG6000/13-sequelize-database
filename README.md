13-sequelize-database

## Description

This app is designed to act as an e-commerce server using a database. The purpose of this app was for me to learn how to use sequelize to maintain a mySQL database. 
This program allows information about products to be keep in a database along with categories and tags that can be associated with those products. While building this app,
I learned how to use routes and models with sequelize and how to create associations.

## Installation

To install this app, download the code from this repo and then, through a terminal, go to the /Develop folder and run "npm i" to install all the required node modules.
To run this app you will need a running mysql service on your system. Add a .env file with a database variable "DB_NAME=", a mysql username variable "DB_USER=", and a password
for that user "DB_PASSWORD=". Run the Develop/db/schema.sql file in mySQL to create the database and then run "npm run seed" in the terminal at the /Develop folder to seed the tables with example entries.

## Usage

This app simply creates example database entries that can be tested through Postman or Insomnia.

Here is a video showing all of the routes: https://drive.google.com/file/d/1bOltO_oES37aEak9JXj1wGmXaI7d7Qzf/view


## License

MIT License

---
