const express = require('express');

const routes = express.Router();
const devController = require('./controllers/devController')

routes.post('/devs', (req, res) => {

    return res.json(req.body);
});

module.exports = routes;