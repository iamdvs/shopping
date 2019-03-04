
const controller=require('app/http/controller/controller');
class registerController extends controller{

    showRegisterForm(req,res){
        res.render('auth/register',{
             messages :req.flash('errors'),
             title:"ثبت نام"
            });
    }

    registerProccess(req,res,next){
        this.validationData(req).then(result=>{
            if(result) res.json('register proccess');
            else res.redirect('/register');
        })
    }


    validationData(req,res){
        req.checkBody('name','فیلد نام خالی میباشد').notEmpty();
        req.checkBody('email','فیلد ایمیل خالی میباشد').notEmpty();
        req.checkBody('name','فیلد نام کم تر از ۵ کاراکتر است').isLength({min:5});
        req.checkBody('email','فرمت ایمیل صحیح نیست').isEmail();
        req.checkBody('password','پسورد باید حداقل هشت کاراکتر باشد').isLength({min:8});


         return req.getValidationResult().then(result=>{
            const errors=result.array();
            const messages=[];
            errors.forEach(err=> messages.push(err.msg));

            if(errors.length==0)
                return true;
            req.flash('errors',messages)
            return false;    
        }).catch(err=>console.log(err));
        

    }

}
module.exports=new registerController();


