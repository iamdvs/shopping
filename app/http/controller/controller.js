const autoBind=require('auto-bind'),
Recaptcha=require('express-recaptcha').Recaptcha;

module.exports=class controller {
    constructor(){
        autoBind(this);
        this.recaptchaConfig();
    }

    recaptchaConfig(){
        this.recaptcha=new Recaptcha(
            '6LeyhZUUAAAAAD4GbI3jcgi0KRXEILpMtI4cv0FQ',
            '6LeyhZUUAAAAANOkAptjyN9DOyFSMCJsrWbecFzD',
            {hl:'fa'}
        );
    }

    recaptchaValidation(req,res){
        return new Promise((resolve,reject)=>{
            this.recaptcha.verify(req,(err,data)=>{
                if(err){
                    req.flash('errors','گزینه امنیتی را فعال کنید');
                    res.redirect(req.url);
                }else resolve(true);
            })
        })

    }
}

