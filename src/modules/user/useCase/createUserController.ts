import { Request, Response } from "express";
import { container } from "tsyringe";
import CreateUserUseCase from "./createUserUseCase";

class CreateUserController {
  async handler(request: Request, response: Response) {
    const createUserUseCase = container.resolve(CreateUserUseCase);
    const result = await createUserUseCase.execute();
    return response.json(result);
  }
}

export default CreateUserController;
