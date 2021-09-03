const express=require("express");
const userController=require("../controllers/user.api");
const auth=require("../middlewares/auth");
//create router
const router=express.Router();

router.post("/signUp",userController.signUp);
router.post("/login",userController.login);
router.get("/getAllUsers",userController.getAllUsers);
router.get("/getAUser/:token",auth,userController.getAUser);
router.put(`/updateUser`,auth,userController.updateUser);

module.exports=router;