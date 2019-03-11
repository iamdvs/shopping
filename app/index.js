const http=require('http'),
express=require('express'),
app=express(),
validator=require('express-validator'),
bodyParser=require('body-parser'),
session=require('express-session'),
flash=require('connect-flash'),
MongoStore=require('connect-mongo')(session),
mongoose=require('mongoose'),
cookieParser=require('cookie-parser'),
path=require('path'),
passport=require('passport');


module.exports=class Application{
    constructor(){
        this.setMongoConnection();
        this.setupServer();
        this.setConfig();
        this.setRouters();

    }

    setMongoConnection(){

        mongoose.Promise=global.Promise;
        mongoose.connect('mongodb://localhost/pro1', { useNewUrlParser: true });

    }
    setupServer(){
        const server=http.createServer(app);
        server.listen(3000,console.log('server is 3000 port'));

    }
    setConfig(){
        require('app/passport/passport-local');
        app.use(express.static('public'));
        app.set('views',path.resolve('./resource/views'));
        app.set('view engine','ejs');
        app.use(bodyParser.json());
        app.use(bodyParser.urlencoded({extended:true}));
        app.use(session({
            secret:"pro1",
            resave:true,
            saveUninitialized:true,
            store:new MongoStore({mongooseConnection:mongoose.connection})
        }));
        app.use(validator());
        app.use(cookieParser('pro1'));
        app.use(flash());
        app.use(passport.initialize());
        app.use(passport.session());

    }
    setRouters(){

        app.use(require('app/routes/web'));
        app.use(require('app/routes/api'));


    }
}