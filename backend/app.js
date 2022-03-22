const express = require('express');
const { TeamMember } = require('./model');

const app = express();

app.get('/team', async (req, res, next) => {
    const team = await TeamMember.findAll();

    // Please filter out createdAt and updatedAt properties
    return res.json(team);
});

// Please create an endpoint for adding team members here

module.exports = app;
