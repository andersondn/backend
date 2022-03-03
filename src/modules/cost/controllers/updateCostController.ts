import { Request, Response } from 'express';
import { container } from 'tsyringe';


import {
    Joi,
    Segments,
    validation
} from '../../../shared/infra/http/express/middleware/Celebrate';
import UpdateCostUseCase from '../useCase/updateCostUseCase';

class UpdateCostController {
    validate = validation({
        [Segments.PARAMS]: Joi.object().keys({
            costId: Joi.number().required()
        }),
        [Segments.BODY]: Joi.object().keys({
            title: Joi.string().required(),
            amount: Joi.number().required(),
            date: Joi.date().required(),
            department_id: Joi.number().required()
        })
    });
    async handler(request: Request, response: Response) {
        const { title, amount, date, department_id } = request.body;
        const costId = request.params.costId as unknown as number;
        const createCostUseCase = container.resolve(UpdateCostUseCase);
        const result = await createCostUseCase.execute({
            costId,
            title,
            amount,
            date,
            department_id
        });

        if(!result) {
            return response.status(500).json({
                message: 'Falha ao atualizar custo'
            });
        }

        return response.status(204).send();

    }
}



export default UpdateCostController;
