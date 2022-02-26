import { Request, Response } from "express";
import { container } from "tsyringe";
import CreateUserUseCase from "./createUserUseCase";
import {
  Joi,
  Segments,
  validation,
} from "../../../shared/infra/http/express/middleware/Celebrate";
class CreateUserController {
  validate = validation({
    [Segments.BODY]: Joi.object().keys({
      name: Joi.string().required().max(150),
      password: Joi.string().required().min(6),
      email: Joi.string().required().max(150).lowercase(),
      departmentId: Joi.number(),
      role: Joi.string().default("EMPLOYEE"),
    }),
  });

  async handler(request: Request, response: Response) {
    const { name, email, password, departmentId, role } = request.body;
    const createUserUseCase = container.resolve(CreateUserUseCase);
    const result = await createUserUseCase.execute({
      name,
      email,
      password,
      departmentId,
      role,
    });

    return response.status(201).json(result);
  }
}

export default CreateUserController;
