const {format,createLogger,transports} = require('winston');
const {timestamp,combine,printf}= format



const enumerateErrorFormat = format(info=>{
    //adding stack to logs info
    if(info instanceof Error) Object.assign(info,{message:info.stack});
    return info;
})


//format example (2022-07-15T12:19:07.566Z): error ==> data
const logFormat = printf(({timestamp,level,message})=>`[${timestamp}]: ${level} ==> ${message}`)

const logger = createLogger({
    //level : logs types levels to show 
    level:'debug', // or debug in development 
    format:combine(
        format.colorize(),
        timestamp({format:'YYYY-MM-DD HH:mm:ss'}),
        enumerateErrorFormat(),
        format.splat(),
        logFormat
    ),
    transports:[new transports.Console()],
})



module.exports=logger;