import User from "../../entities/User";
import UserRepository from "../../repositories/UserRepository";

class UserRepositoryKnex implements UserRepository {
    insertUser(user: User): Promise<User> {
        throw new Error("Method not implemented.");
    }

}