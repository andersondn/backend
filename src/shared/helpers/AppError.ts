class AppError {
    public statusCode: number;
    public message: string;
    
    constructor(statusCode: number, message: string, stack?: string) {
        this.statusCode = statusCode;
        this.message = message;
    }
}