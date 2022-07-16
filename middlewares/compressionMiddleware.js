const compression = require('compression');

const LEVEL_OF_COMPRESSION=6
const MINIMUM_SIZE_TO_COMPRESS=0;  //in kilobyte



//skip compression if the 'x-no-compression' is specified in the request header
const filter =(req,res)=>{
    if(req.headers['x-no-compression'])
        return false;
    else 
        return compression.filter(req,res);
}


const options= {
    level:LEVEL_OF_COMPRESSION,
    filter

}

module.exports = compression(options);