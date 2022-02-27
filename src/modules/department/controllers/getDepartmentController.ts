import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { Joi, Segments, validation } from '../../../shared/infra/http/express/middleware/Celebrate';
import GetDepartmentsUseCase from '../useCase/getDepartmentsUseCase';
import ListDepartmentsUseCase from '../useCase/listDepartmentsUseCase';

class GetDepartmentController {
    validate = validation({
        [Segments.PARAMS]: Joi.object().keys({
          departmentId: Joi.number().required()
        }),
      });

    async handler(request: Request, response: Response) {
        const { departmentId } = request.params;
        const listDepartmentUseCase = container.resolve(GetDepartmentsUseCase);
        const result = await listDepartmentUseCase.execute(+departmentId);

        return response.status(200).json(result);
    }
}

export default GetDepartmentController;
