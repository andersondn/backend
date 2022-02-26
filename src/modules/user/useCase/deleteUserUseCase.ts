import { inject, injectable } from 'tsyringe';
import AppError from '../../../shared/helpers/AppError';
import User from '../entities/User';
import UserRepository from '../repositories/UserRepository';

@injectable()
class deleteUserUseCase {
    constructor(
        @inject('UserRepository')
        private userRepository: UserRepository
    ) {}
    async execute(userId: number): Promise<void> {
        const user = await this.userRepository.getUserById(userId);

        if (!user) {
            throw new AppError({
                message: 'Usuário não encontrado',
                statusCode: 404
            });
        }

       await this.userRepository.deleteUser(userId);

        return ;
    }
}
export default deleteUserUseCase;
