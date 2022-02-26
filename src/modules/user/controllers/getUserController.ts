import { Request, Response } from "express";
import { container } from "tsyringe";
import { Joi, Segments, validation } from "../../../shared/infra/http/express/middleware/Celebrate";
import GetUserUseCase from "../useCase/getUserUseCase";

class GetUserController {
    validate = validation({
        [Segments.PARAMS]: Joi.object().keys({
          userId: Joi.number().required()
        }),
      });
      
  async handler(request: Request, response: Response) {
    const { userId } = request.params;
    const getUserUseCase = container.resolve(GetUserUseCase);
    const result = await getUserUseCase.execute(+userId);
    return response.status(200).json(result);
  }
}

export default GetUserController;
