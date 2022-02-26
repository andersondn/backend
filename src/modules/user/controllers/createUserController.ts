import { Request, Response } from "express";
import { container } from "tsyringe";
import CreateUserUseCase from "../useCase/createUserUseCase";
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
			department_id: Joi.number(),
			role: Joi.string().default("EMPLOYEE"),
		}),
	});

	async handler(request: Request, response: Response) {
		const { name, email, password, department_id, role } = request.body;
		const createUserUseCase = container.resolve(CreateUserUseCase);
		const result = await createUserUseCase.execute({
			name,
			email,
			password,
			department_id,
			role,
		});

		return response.status(201).json(result);
	}
}

export default CreateUserController;
