const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

const cartoonRouter = require('../Routes/90sCartoon/characterRouter');
// const animeRouter = require('');
// const avengersRouter = require('');
// const familyguyRouter = require('');
// const rickmortyRouter = require('');

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());

server.use('/', cartoonRouter);
// server.use('/anime', animeRouter);
// server.use('/avengers', avengersRouter);
// server.use('/familyguy', familyguyRouter);
// server.use('/rickmorty', rickmortyRouter);


module.exports = server;