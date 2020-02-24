const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

const characterRouter = require('../Routes/characterRouter');

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());

server.use('/', characterRouter);


module.exports = server;