import { inject, injectable } from 'tsyringe';
import AppError from '../../../shared/helpers/AppError';
import UserRepository from '../../user/repositories/UserRepository';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { JWT_SECRET } from '../../../shared/config/constants';

type LoginParams = {
    email: string;
    password: string;
};

@injectable()
class LoginUseCase {
    constructor(
        @inject('UserRepository')
        private userRepository: UserRepository
    ) {}

    async execute({ email, password }: LoginParams): Promise<string> {
        const user = await this.userRepository.getUserByEmail(email);
        if (user) {
            if (await bcrypt.compare(password, user.password)) {
                const token = jwt.sign(
                    {
                        id: user.id,
                        email: user.email,
                        name: user.name,
                        role: user.role
                    },
                    JWT_SECRET,
                    {
                        expiresIn: '60m'
                    }
                );
                return token;
            }
        }
        throw new AppError({
            message: 'Usuário e senha incorretos',
            statusCode: 200
        });
    }
}

export default LoginUseCase;
