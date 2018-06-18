const productController = require('../controllers/products');
const path = require('path');

const router = require('express').Router();

router
  .get('/products', productController.index)
  .get('/products/:productID', productController.show)
  .post('/products', productController.create)
  .put('/products/:productID', productController.update)
  .delete('/products/:productID', productController.destroy)

module.exports = router;
