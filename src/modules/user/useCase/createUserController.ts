import { Request, Response } from "express";
import { container } from "tsyringe";
import CreateUserUseCase from "./createUserUseCase";
import { Joi, Segments, validation } from "../../../shared/infra/http/express/middlewares/Celebrate";
class CreateUserController {
  validate = validation(
    {
      [Segments.BODY]: Joi.object().keys({
        name: Joi.string().required(),
        password: Joi.string().required(),
        email: Joi.string().required(),
        departmentId: Joi.number(),
        role: Joi.string().default("EMPLOYEE"),
      }),
    },
 
  );

  async handler(request: Request, response: Response) {
    const createUserUseCase = container.resolve(CreateUserUseCase);
    const result = await createUserUseCase.execute();
    return response.json(result);
  }
}

export default CreateUserController;
