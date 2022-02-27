import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { Joi, Segments, validation } from '../../../shared/infra/http/express/middleware/Celebrate';
import DeleteDepartmentUseCase from '../useCase/deleteDepartmentUseCase';

class DeleteDepartmentController {
    validate = validation({
        [Segments.PARAMS]: Joi.object().keys({
          departmentId: Joi.number().required()
        }),
      });

    async handler(request: Request, response: Response) {
        const { departmentId } = request.params;
        const deleteDepartmentUseCase = container.resolve(DeleteDepartmentUseCase);
        const result = await deleteDepartmentUseCase.execute(+departmentId);
        
        if(!result) {
            return response.status(500).json({
                message: 'Falha ao apagar departamento'
            });
        }

        return response.status(204).send();
    }
}

export default DeleteDepartmentController;
