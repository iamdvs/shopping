const express=require('express'),
router=express.Router();



//home router
const homeRouter=require('app/routes/web/home');
router.use('/',homeRouter);


// admin Router
const adminRouter=require('app/routes/web/admin');
router.use('/admin',adminRouter);








module.exports=router;