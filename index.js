const app = require('./app');




app.get('/data',(req,res)=>{
        res.send(req.t('email_error'));
})



app.listen(process.env.PORT | 3001 ,()=>{
    console.log("server started on port",process.env.PORT);
    console.log("mode:",process.env.NODE_ENV);
})