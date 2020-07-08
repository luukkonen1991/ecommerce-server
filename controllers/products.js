const asyncHandler = require('../middleware/async');
const Product = require('../models/product');


//@desc       Get all products
//@route      GET /api/v1/products
//@access     Public
// exports.getProducts = asyncHandler(async (req, res, next) => {
//   const products = await

//     res
//       .status(200)
//       .json({ success: true, count: products.length, data: products });
// });

//@desc       Create product
//@route      POST /api/v1/products
//@access     Public
exports.createProduct = asyncHandler(async (req, res, next) => {
  const { title, description, price } = req.body;
  const product = await Product.create({
    title: title,
    description: description,
    price: price
  });
  res.status(201).json({
    success: true,
    data: product
  });
});