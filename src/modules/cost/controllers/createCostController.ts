import { container } from 'tsyringe';
import {
    Joi,
    Segments,
    validation
} from '../../../shared/infra/http/express/middleware/Celebrate';
import { AuthRequest, Response } from '../../../shared/infra/http/express/types/express';
import CreateCostUseCase from '../useCase/createCostUseCase';

class CreateCostController {
    validate = validation({
        [Segments.BODY]: Joi.object().keys({
            title: Joi.string().required(),
            amount: Joi.number().required(),
            date: Joi.date().required(),
            department_id: Joi.number().required()
        })
    });

    async handler(request: AuthRequest, response: Response) {
        const { title, amount, date,  department_id } = request.body;
        const user_id = request.user.id;
        const createCostUseCase = container.resolve(CreateCostUseCase);
        const result = await createCostUseCase.execute({
            title,
            amount,
            date,
            user_id,
            department_id
        });

        return response.status(201).json(result);
    }
}

export default CreateCostController;