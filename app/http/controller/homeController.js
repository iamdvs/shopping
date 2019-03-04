
const controller=require('app/http/controller/controller')
class homeController extends controller{
    index(req,res){
        res.render('index');
    }
}


module.exports=new homeController();