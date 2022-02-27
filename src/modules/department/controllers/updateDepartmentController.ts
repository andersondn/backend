import { Request, Response } from 'express';
import { container } from 'tsyringe';
import {
    Joi,
    Segments,
    validation
} from '../../../shared/infra/http/express/middleware/Celebrate';
import UpdateDepartmentUseCase from '../useCase/updateDepartmentUseCase';

class UpdateDepartmentController {
    validate = validation({
        [Segments.PARAMS]: Joi.object().keys({
            departmentId: Joi.number().required()
        }),
        [Segments.BODY]: Joi.object().keys({
            title: Joi.string().required()
        })
    });

    async handler(request: Request, response: Response) {
        const { title } = request.body;
        const departmentId = request.params.departmentId as unknown as number;
        const updateDepartmentUseCase = container.resolve(
            UpdateDepartmentUseCase
        );
        const result = await updateDepartmentUseCase.execute({
            title,
            departmentId
        });
        if(!result) {
            return response.status(500).json({
                message: 'Falha ao atualizar departamento'
            });
        }

        return response.status(204).send();
    }
}

export default UpdateDepartmentController;
