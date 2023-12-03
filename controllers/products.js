const path = require('path');
const { StatusCodes } = require('http-status-codes');

const Product = require('../models/Product');
const { BadRequestError } = require('../errors');

const getAllProducts = async (req, res) => {
  const products = await Product.find({});

  res.status(StatusCodes.OK).json({
    products,
  });
};

const createProduct = async (req, res) => {
  const product = await Product.create(req.body);
  res.status(StatusCodes.CREATED).json({
    product,
  });
};

const uploadProductImage = async (req, res) => {
  if (!req.files) throw new BadRequestError('No File Uploaded');

  const productImage = req.files.image;
  if (!productImage.mimetype.startsWith('image'))
    throw new BadRequestError('Please Upload Image');
  const maxSize = 1024 * 1024;
  if (productImage.size > maxSize)
    throw new BadRequestError('PLease upload image smaller 1KB');

  const name = productImage.name;
  const imagePath = path.join(__dirname, '../public/uploads/' + `${name}`);
  await productImage.mv(imagePath);

  res.status(StatusCodes.OK).json({
    image: {
      src: `/uploads/${name}`,
    },
  });
};

module.exports = {
  getAllProducts,
  createProduct,
  uploadProductImage,
};
