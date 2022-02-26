import { Request, Response } from "express";
import { container } from "tsyringe";
import ListUserUseCase from "../useCase/listUserUseCase";


class ListUserController {
    async handler(request: Request, response: Response) {
        const listUserUseCase = container.resolve(ListUserUseCase);
        const result = await listUserUseCase.execute();
        return response.status(200).json(result);
    }
}

export default ListUserController;