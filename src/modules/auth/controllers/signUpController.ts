import { Request, Response } from "express";
import { container } from "tsyringe";
import {
	Joi,
	Segments,
	validation,
} from "../../../shared/infra/http/express/middleware/Celebrate";
import SignUpUseCase from "../useCase/signUpUseCase";

class SignUpController {
    validate = validation({
		[Segments.BODY]: Joi.object().keys({
			name: Joi.string().required().max(150),
			password: Joi.string().required().min(6),
			email: Joi.string().required().max(150).lowercase(),
		}),
	});

	async handler(request: Request, response: Response) {
		const { name, email, password } = request.body;
		const createUserUseCase = container.resolve(SignUpUseCase);
		const result = await createUserUseCase.execute({
			name,
			email,
			password,
		});

		return response.status(201).json(result);
	}
}

export default SignUpController;