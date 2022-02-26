import { inject, injectable } from "tsyringe";
import AppError from "../../../shared/helpers/AppError";
import User from "../entities/User";
import UserRepository from "../repositories/UserRepository";
import bcrypt from 'bcryptjs';

type CreateUserParams = {
  name: string;
  email: string;
  password: string;
  department_id: number;
  role: "ADMIN" | "MANAGER" | "EMPLOYEE";
};

@injectable()
class CreateUserUseCase {
  constructor(
    @inject("UserRepository")
    private userRepository: UserRepository
  ) {}
  async execute({
    name,
    email,
    password,
    department_id,
    role,
  }: CreateUserParams): Promise<User> {


    const searchUser = await this.userRepository.getUserByEmail(email);
    if (searchUser) {
        throw new AppError({
            message: "Email já cadastrado",
        });
    }
    const hashedPassword = bcrypt.hashSync(password, 10);
    const user = await this.userRepository.insertUser({
      name,
      email,
      password: hashedPassword,
      role,
      department_id,
    });
    
    delete user.password;
    return user;
  }
}
export default CreateUserUseCase;
