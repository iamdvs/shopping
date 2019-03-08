const express=require('express'),
router=express.Router();



const homeController=require('app/http/controller/homeController');
const registerController=require('app/http/controller/auth/registerController');
const loginController=require('app/http/controller/auth/loginController');


//-----

router.get('/',homeController.index);
router.get('/register',registerController.showRegisterForm);
router.post('/register',registerController.registerProccess);
router.get('/login',loginController.showLoginForm);
router.post('/login',loginController.loginProccess);




//-----






module.exports=router;