import { Request, Response } from 'express';
import { container } from 'tsyringe';
import {
    Joi,
    Segments,
    validation
} from '../../../shared/infra/http/express/middleware/Celebrate';
import LoginUseCase from '../useCase/loginUseCase';

class LoginController {

    validate = validation({
        [Segments.BODY]: Joi.object().keys({
            email: Joi.string().required(),
            password: Joi.string().required()
        })
    });

    async handler(request: Request, response: Response) {

        const { email, password } = request.body;

        const loginUseCase = container.resolve(LoginUseCase);

        const token = await loginUseCase.execute({
            email,
            password
        });

        return response.status(200).json({ token });

    }
}

export default LoginController;
