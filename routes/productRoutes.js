const express = require('express');

const {
  getAllProducts,
  createProduct,
  uploadProductImage,
} = require('../controllers/products');

const router = express.Router();

router.route('/').get(getAllProducts).post(createProduct);
router.route('/uploads').post(uploadProductImage);

module.exports = router;
