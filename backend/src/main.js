const express = require('express');
const routes = require('./routes');
const mongoose = require('mongoose');
//const cors = require('cors');


const server = express();

mongoose.connect('mongodb+srv://olvarthur:luanny2509@cluster0-l2pep.mongodb.net/omnistack8?retryWrites=true&w=majority',{ 
    useNewUrlParser: true
})

server.use(express.json());
//server.use(cors());
server.use(routes);

server.listen(3333);