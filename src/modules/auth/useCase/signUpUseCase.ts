import { inject, injectable } from 'tsyringe';
import User from '../../user/entities/User';
import UserRepository from '../../user/repositories/UserRepository';
import bcrypt from 'bcryptjs';
import AppError from '../../../shared/helpers/AppError';

@injectable()
class SignUpUseCase {
    constructor(
        @inject('UserRepository')
        private userRepository: UserRepository
    ) {}

    async execute({name, email, password}): Promise<User> {
        const user = await this.userRepository.getUserByEmail(email);
        if (user) {
            throw new AppError({message: 'Email já cadastrado'});
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        const userCreated = await this.userRepository.insertUser({
            name,
            email,
            password: hashedPassword,
            role: 'EMPLOYEE',
            department_id: null
        });

        delete userCreated.password;
        return userCreated;
    }

}

export default SignUpUseCase;