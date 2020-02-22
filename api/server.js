const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

// const cartoonRouter = require('');
// const animeRouter = require('');
// const avengersRouter = require('');
// const familyguyRouter = require('');
// const rickmortyRouter = require('');

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());

module.exports = server;