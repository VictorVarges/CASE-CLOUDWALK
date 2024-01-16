Antifraud System 🚫💳
=====================

Description ℹ️
--------------

This project is about creating an antifraud system, implemented through a CRUD using Node.js for the MSC architecture. The system uses a MySQL relational database to store transactions, querying and inserting data into the 'transactions' table.

Database 🛢️
------------

For the project's conception, it was necessary to create a database called DB\_TRANSACTIONS. Database requests were made through the 'transactions' table.

Endpoints 🛣️
-------------

It's important to note that all requests were made through the '/transactions' route. To check all case validations, access the following endpoints:

*   GET /transactions
*   POST /transactions

Tools 🧰
--------

*   Node.js with Express.js
*   MySQL
*   REST API CRUD

Installation of Dependencies ⚙️
-------------------------------

Clone this project and install all dependencies:

`npm install`

Create a .env file with the following structure:

MYSQL\_USER=root
MYSQL\_PASSWORD=senha\_mysql
MYSQL\_DATABASE=transactions
MYSQL\_HOST='127.0.0.1'
    

After downloading the project, access the path and enter the folder:

`src`

Upon entering the folder, execute the following command to create the database tables and perform validations:

`npx nodemon app.js`

For database integration, execute this SQL script using your preferred framework that runs MYSQL12:

CREATE DATABASE IF NOT EXISTS DB\_TRANSACTIONS;

USE DB\_TRANSACTIONS;

CREATE TABLE \`transactions\` 
(
    \`transaction\_id\` INT,
    \`merchant\_id\` INT,
    \`user\_id\` INT,
    \`card\_number\` VARCHAR(512),
    \`transaction\_date\` DATETIME,
    \`transaction\_amount\` DOUBLE,
    \`device\_id\` INT,
    \`has\_cbk\` BOOLEAN
);

INSERT INTO \`transactions\` (\`transaction\_id\`, \`merchant\_id\`, \`user\_id\`, \`card\_number\`, \`transaction\_date\`, \`transaction\_amount\`, \`device\_id\`, \`has\_cbk\`) VALUES
    ('21320398', '29744', '97051', '434505\*\*\*\*\*\*9116', '2019-12-01T23:16:32.812632', '374.56', '285475', FALSE);
    

You can use [Postman](https://www.postman.com/), [Thunder Client](https://www.thunderclient.com/), or [Insomnia](https://insomnia.rest/) to make requests to the endpoints. Also, check the [Sequelize Setup Cheatsheet](https://bootcamp.rocketacademy.co/4-backend-structure/4.1-orm-sequelize/4.1.9-sequelize-setup-cheatsheet) created by Rocket Academy.

### Project Achievements 🏆

*   **Integration with MySQL and Node.js** 🚀
*   **Rendering of JSON through Express** 🎨
*   **Use of Insomnia for tests with POST and GET** 🧪
*   **Validation of each field (whether filled or not, returning the suggested response)** ✅
*   **Validation of character size sent in the payload by the 'card\_number' key (if a card number is sent without the standard number of characters for a credit card, it will be denied)** 📏
*   **Rejection of a transaction if a customer makes up to 5 attempts within 1 hour** ⏰
*   **Denial of more than 3 transactions with a value greater than or equal to X within 1 hour** 🚫💸

