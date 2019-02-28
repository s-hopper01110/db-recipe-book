const express = require('express');
const helmet = require('helmet');

// const recipeData = require('./routes/cohortRouter.js');

const server = express();

server.use(helmet());
server.use(express.json());

// server.use('/api/recipes', recipeData);


module.exports = server;