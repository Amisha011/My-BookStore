const express=require("express");
const productController=require("../controllers/product.controller");
const auth = require('../middlewares/auth');

//create router
const router=express.Router();

//controllers
router.post(`/addProduct`,productController.addProduct);
router.get(`/getAllProducts`,productController.getAllProducts);
router.put(`/updateProduct/:id`,productController.updateProduct);
router.delete(`/deleteProduct/:id`,productController.deleteProduct);

module.exports=router;