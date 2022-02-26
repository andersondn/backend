import { inject, injectable } from "tsyringe";
import AppError from "../../../shared/helpers/AppError";
import User from "../entities/User";
import UserRepository from "../repositories/UserRepository";
import bcrypt from 'bcryptjs';


@injectable()
class ListUserUseCase {
  constructor(
    @inject("UserRepository")
    private userRepository: UserRepository
  ) {}
  async execute( ): Promise<User[]> {

    const searchUser = await this.userRepository.listUsers();

    return searchUser;
  }
}
export default ListUserUseCase;
