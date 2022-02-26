class AppError {
    public statusCode?: number;
    public message: string;
    
    constructor({statusCode, message}: AppError) {
        this.statusCode = statusCode || 400;
        this.message = message;
    }
}
export default AppError;