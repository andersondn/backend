import { Request, Response } from 'express';
import { container } from 'tsyringe';
import {
    Joi,
    Segments,
    validation
} from '../../../shared/infra/http/express/middleware/Celebrate';
import DeleteUserUseCase from '../useCase/deleteUserUseCase';

class DeleteUserController {
    validate = validation({
        [Segments.PARAMS]: Joi.object().keys({
            userId: Joi.number().required()
        })
    });

    async handler(request: Request, response: Response) {
        const { userId } = request.params;
        const deleteUserUseCase = container.resolve(DeleteUserUseCase);
        await deleteUserUseCase.execute(+userId);
        return response.status(204).send();
    }
}

export default DeleteUserController;
