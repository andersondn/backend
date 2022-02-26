import { Request, Response } from 'express';
import { container } from 'tsyringe';
import {
    Joi,
    Segments,
    validation
} from '../../../shared/infra/http/express/middleware/Celebrate';
import UpdateUserUseCase from '../useCase/updateUserUseCase';

class UpdateUserController {
    validate = validation({
        [Segments.BODY]: Joi.object().keys({
            name: Joi.string().max(150),
            password: Joi.string().min(6),
            email: Joi.string().max(150).lowercase(),
            department_id: Joi.number(),
            role: Joi.string().default('EMPLOYEE')
        }),
        [Segments.PARAMS]: Joi.object().keys({
            userId: Joi.number().required()
        })
    });

    async handler(request: Request, response: Response) {
        const { name, email, department_id, role } = request.body;
        const userId = request.params.userId as unknown as number;
        const updateUserUseCase = container.resolve(UpdateUserUseCase);
        const result = await updateUserUseCase.execute({
            userId,
            name,
            email,
            department_id,
            role
        });

        return response.status(204).send();
    }
}
export default UpdateUserController;
