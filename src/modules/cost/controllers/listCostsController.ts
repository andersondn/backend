import { Request, Response } from 'express';
import { container } from 'tsyringe';
import ListCostUseCase from '../useCase/listCostUseCase';

class ListCostController {
    async handler(request: Request, response: Response) {

        const listCostUseCase = container.resolve(ListCostUseCase);
        const result = await listCostUseCase.execute();
        return response.status(200).json(result);
    }
}

export default ListCostController;