import httpStatus from "http-status";
const  handleResponse = fn => async(endpoint,data)=>{
    
    let result,error;
    console.log('here')
    await Promise.resolve(fn(endpoint,data))
        .catch(err=>error=err)
        .then(rslt=>result=rslt);
    return {error,result}
}

export default handleResponse




const treatApiErrorState = (status)=>{   

    switch (httpStatus[`${status}_CLASS`]) {
        case httpStatus.classes.INFORMATIONAL: 
                return {
                        errStatus:httpStatus.INTERNAL_SERVER_ERROR,
                        errorMessage: "Erreur Server Veuillez réessayer ultérieurement",
                        }

        case httpStatus.classes.INFORMATIONAL: 
        return {
                errStatus:httpStatus.INTERNAL_SERVER_ERROR,
                errorMessage: "Erreur Server Veuillez réessayer ultérieurement",
                }
        
                                
    
        default:
            break;
    }
}