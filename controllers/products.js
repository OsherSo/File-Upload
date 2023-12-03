const { StatusCodes } = require('http-status-codes');

const Product = require('../models/Product');

const getAllProducts = async (req, res) => {
  res.send('getAllProducts');
};

const createProduct = async (req, res) => {
  res.send('uploadProduct');
};

const uploadProductImage = async (req, res) => {
  res.send('uploadProductImage');
};

module.exports = {
  getAllProducts,
  createProduct,
  uploadProductImage,
};
