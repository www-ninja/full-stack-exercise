const express = require('express');
const bodyParser = require('body-parser');
const { TeamMember } = require('./model');

const app = express();

// parse application/json
app.use(bodyParser.json())

app.get('/team', async (req, res, next) => {
    // Please filter out createdAt and updatedAt properties
    // Please sort alphabetically by first name
    const team = await TeamMember.findAll();

    return res.json(team);
});

// Please create an endpoint for adding team members here

module.exports = app;
