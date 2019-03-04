
const controller=require('app/http/controller/controller')
class homeController extends controller{
    index(req,res){
        res.render('index',{title:"صفحه اصلی"});
    }
}




module.exports=new homeController();