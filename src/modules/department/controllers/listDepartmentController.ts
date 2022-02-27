import { Request, Response } from 'express';
import { container } from 'tsyringe';
import ListDepartmentsUseCase from '../../useCase/listDepartmentsUseCase';

class ListDepartmentController {
    async handler(request: Request, response: Response) {
        const listDepartmentUseCase = container.resolve(ListDepartmentsUseCase);
        const result = await listDepartmentUseCase.execute();
        return response.status(200).json(result);
    }
}

export default ListDepartmentController;
