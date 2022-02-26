import { inject, injectable } from "tsyringe";
import UserRepository from "../repositories/UserRepository";

@injectable()
class CreateUserUseCase {
    constructor (
        @inject('UserRepository')
        private userRepository: UserRepository
    ) {}
    async execute(){
        const user = await this.userRepository.insertUser({
            name: 'John Doe',
            email: 'aaa',
            password: '',
            role: 'ADMIN',
            department_id: 1
        });

        return user
    }
}
export default CreateUserUseCase;