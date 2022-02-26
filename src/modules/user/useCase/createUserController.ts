import { Request, Response } from "express";

class CreateUserController {
    async handler(request: Request, response: Response) {
        return response.json( {
            user: {
                id: 1,
                name: 'John Doe',
            
        }})
    }
}

export default CreateUserController;