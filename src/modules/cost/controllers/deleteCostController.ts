import { container } from "tsyringe";
import { Request, Response } from "express";
import { Joi, Segments, validation } from "../../../shared/infra/http/express/middleware/Celebrate";
import DeleteCostUseCase from "../useCase/deleteCostUseCase";

class DeleteCostController {
    validate = validation({
        [Segments.PARAMS]: Joi.object().keys({
          costId: Joi.number().required()
        }),
      });

      async handler(request: Request, response: Response) {
        const { costId } = request.params;
        const deleteCostUseCase = container.resolve(DeleteCostUseCase);
        const result = await deleteCostUseCase.execute(+costId);

        if(!result) {
            return response.status(500).json({
                message: 'Falha ao apagar custo'
            });
        }

        return response.status(204).send();
    }
}

export default DeleteCostController;