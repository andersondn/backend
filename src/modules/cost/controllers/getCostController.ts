import { Request, Response } from 'express';
import { container } from 'tsyringe';
import GetCostUseCase from '../useCase/getCostUseCase';
import { Joi, Segments, validation } from "../../../shared/infra/http/express/middleware/Celebrate";

class GetCostController {
    validate = validation({
        [Segments.PARAMS]: Joi.object().keys({
          costId: Joi.number().required()
        }),
      });

    async handler(request: Request, response: Response) {
        const { costId } = request.params;
        const getCostUseCase = container.resolve(GetCostUseCase);
        const result = await getCostUseCase.execute(+costId);
        return response.status(200).json(result);
    }
}

export default GetCostController;