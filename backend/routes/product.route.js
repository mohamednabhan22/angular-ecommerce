const router = require("express").Router();
const authGuard=require('./guards/auth.guard')

const productController = require("../controllers/product.controller");

router.get("/:id", productController.getProductById);

module.exports = router;
