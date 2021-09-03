const { Router } = require('express');
const express=require('express');
const orderController=require('../controllers/order.controller');
const auth = require('../middlewares/auth');

//create route
const router=express.Router();

router.get('/myOrders',auth,orderController.myOrders);
router.post('/placeOrder',auth,orderController.placeOrder);
router.get('/getAllOrders',auth,orderController.getAllOrders);

module.exports=router;