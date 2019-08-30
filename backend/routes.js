const express = require('express');
const defController = require('./controllers/deficienciaController');

const routes = express.Router();

routes.post('/def', defController.store);
routes.get('/def', defController.getByGroup);
routes.get('/def/search', defController.search);
routes.patch('/def/addespecialista', defController.addEspecialista);
routes.patch('/def/addassociacao', defController.addAssociacao)

module.exports = routes;