import { Request, Response } from 'express';
import { container } from 'tsyringe';
import {
    Joi,
    Segments,
    validation
} from '../../../shared/infra/http/express/middleware/Celebrate';
import CreateDepartmentUseCase from '../useCase/createDepartmentUseCase';

class createDepartmentController {
    validate = validation({
        [Segments.BODY]: Joi.object().keys({
            title: Joi.string().required()
        })
    });

    async handler(request: Request, response: Response) {
        const { title } = request.body;
        const createDepartmentUseCase = container.resolve(
            CreateDepartmentUseCase
        );
        const result = await createDepartmentUseCase.execute({
            title
        });

        return response.status(200).json(result);
    }
}

export default createDepartmentController;
