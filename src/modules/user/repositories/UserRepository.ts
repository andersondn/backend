import User from "../entities/User";

interface UserRepository {
    insertUser(user: User): Promise<number>;
}
export default UserRepository;