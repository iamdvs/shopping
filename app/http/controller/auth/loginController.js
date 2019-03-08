const controller=require('app/http/controller/controller');


class loginController extends controller{

    showLoginForm(req,res){
        res.render('auth/login',{
            messages:req.flash('errors'),
            title:"ورود"
        })

    }

    loginProccess(req,res,next){
        this.validationData(req).then(result=>{
            if(result) res.json('login proccess');
            else res.redirect('/login');
        })
    }

    validationData(req,res){
        req.checkBody('email','ایمیل خالی میباشد').notEmpty();
        req.checkBody('email','فرمت ایمیل صحیح نیست').isEmail();
        req.checkBody('password','پسورد خالی میباشد').notEmpty();
        req.checkBody('password','پسورد حداقل هشت کاراکتر').isLength({min:8})

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

module.exports= new loginController();