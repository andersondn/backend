import { inject, injectable } from "tsyringe";
import User from "../../entities/User";
import UserRepository from "../../repositories/UserRepository";


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
