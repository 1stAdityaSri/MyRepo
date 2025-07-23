const express = require('express');
const router = express.Router();    

  
const { createProduct, getProducts } = require('../controller/productController');

router.post('/products', createProduct);
router.get('/products', getProducts);
router.put('/products/:id', putProduct);
router.delete('/products/:id', deleteProduct);

module.exports = router;
