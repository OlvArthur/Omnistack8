const express = require('express');
const ClientController = require('./Controllers/ClientController');
const LikeController = require('./Controllers/LikeController');
const DislikeController = require('./Controllers/DislikeController');
const ProductController = require('./Controllers/ProductController');

const routes = express.Router();

//Principais metodos de uma API : GET, POST, PUT, DELETE

routes.get('/clients', ClientController.index);
routes.post('/clients', ClientController.store);
routes.post('/products', ProductController.store);
routes.post('/clients/:clientId/likes', LikeController.store);
routes.post('/clients/:clientId/dislikes', DislikeController.store);


module.exports = routes;