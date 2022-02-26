import { inject, injectable } from 'tsyringe';
import AppError from '../../../shared/helpers/AppError';
import User from '../entities/User';
import UserRepository from '../repositories/UserRepository';
import bcrypt from 'bcryptjs';

type UpdateUserParams = {
    userId: number;
    name: string;
    email: string;
    department_id: number;
    role: 'ADMIN' | 'MANAGER' | 'EMPLOYEE';
};

@injectable()
class UpdateUserUseCase {
    constructor(
        @inject('UserRepository')
        private userRepository: UserRepository
    ) {}
    async execute({
        userId,
        name,
        email,
        department_id,
        role
    }: UpdateUserParams): Promise<boolean> {
        const searchUser = await this.userRepository.getUserById(userId);
        if (!searchUser) {
            throw new AppError({
                message: 'Usuário não encontrado',
                statusCode: 404
            });
        }
        // const hashedPassword = bcrypt.hashSync(password, 10);
        await this.userRepository.updateUser(userId, {
            name,
            email,
            //   password: hashedPassword,
            role,
            department_id
        });

        return true;
    }
}
export default UpdateUserUseCase;
