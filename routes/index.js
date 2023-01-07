const routes = require('express').Router();

routes.get('/', (req, res) => {
  res.send('Uriel G. S. D. R. Alves');
});

module.exports = routes;