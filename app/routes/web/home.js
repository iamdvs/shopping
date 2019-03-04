const express=require('express'),
router=express.Router();



const homeController=require('app/http/controller/homeController');
const registerController=require('app/http/controller/auth/registerController');




router.get('/',homeController.index);
router.get('/register',registerController.showRegisterForm);
router.post('/register',registerController.registerProccess);









module.exports=router;