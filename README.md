# Dibz Engineering Interview Exercise

💫 Welcome to the Dibz interview coding exercise! 🎉

This full-stack exercise mainly involves building a submit action on a form component in React that makes a request to the Node.js/Express.js backend.

## Getting Set Up

The exercise requires [Node.js](https://nodejs.org/en/) to be installed. We recommend using the LTS version.

1. Start by forking this repository.

1. In the repo root directory, run `npm install` to gather all dependencies.

1. Next, `npm run seed` will seed the local SQLite database. **Warning: This will drop the database if it exists**. The database lives in a local file `database.sqlite3`.

1. Then run `npm start` which should start both the server and the React client.

## Technical Notes

- The server is running with [nodemon](https://nodemon.io/) which will automatically restart for you when you modify and save a file.
- The frontend was bootstrapped with [Create React App](https://facebook.github.io/create-react-app/docs/getting-started)
- The database provider is SQLite, which will store data in a file local to your repository called `database.sqlite3`. The ORM [Sequelize](http://docs.sequelizejs.com/) is on top of it. You should only have to interact with Sequelize.
- The API client we have set up for you is [axios](https://github.com/axios/axios). You are welcome to swap this out for your favorite client if you prefer.
- The server is running on port 3001 and all AJAX requests from the frontend will automatically proxy to that endpoint. For instance, you can `axios.get('/team')` and it will automatically hit `localhost:3001/team`.

## Acceptance Criteria

Below is a list of user stories corresponding to our acceptance criteria.

1. Filter out `createdAt` and `updatedAt` fields from the `/team` endpoint response.

1. Alphabetically sort the `/team` endpoint response by first name.

1. I can fill out a form with my required team member information as per the data model (see `backend/model.js`).

1. Submitting the form will create a new team member in the database that persists on reload.

1. I can see team member cards for all of the new team members I have created.

Thank you and good luck! 🙏

Application running screenshots: 

![alt text](./Screen%20Shot%202022-05-02%20at%2010.49.12%20PM.png)


![alt text](./Screen%20Shot%202022-05-02%20at%2010.49.25%20PM.png)