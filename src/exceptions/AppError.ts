class AppError extends Error{
    public readonly message: string;
    public readonly httpStatusCode: number
    
    constructor(message: string, httpStatusCode: number){
        super(message)
        this.message = message
        this.httpStatusCode = httpStatusCode
    }
}

export default AppError;