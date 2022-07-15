const app = require('./app');








app.listen(process.env.PORT | 3001 ,()=>{
    console.log("server started on port",process.env.PORT);
    console.log("mode:",process.env.NODE_ENV);
})