import { inject, injectable } from "tsyringe";
import AppError from "../../../shared/helpers/AppError";
import User from "../entities/User";
import UserRepository from "../repositories/UserRepository";

type CreateUserParams = {
  name: string;
  email: string;
  password: string;
  departmentId: number;
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
    departmentId,
    role,
  }: CreateUserParams): Promise<User> {

    const searchUser = await this.userRepository.getUserByEmail(email);
    if (searchUser) {
        throw new AppError({
            message: "Email já cadastrado",
        });
    }

    const user = await this.userRepository.insertUser({
      name,
      email,
      password,
      role,
      department_id: departmentId,
    });

    return user;
  }
}
export default CreateUserUseCase;
