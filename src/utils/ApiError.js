class ApiError extends Error{
    super()
    constructor(status,message){
        this.status=status
        this.message=message;
    }
}