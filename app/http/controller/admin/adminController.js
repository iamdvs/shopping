
const controller=require('app/http/controller/controller')
class adminController extends controller{
    index(req,res){
        res.json('hello admin controller');

        
    }
}


module.exports=new adminController();