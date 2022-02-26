import { knexConnection } from "../../../../shared/config/knexDB";
import User from "../../entities/User";
import UserRepository from "../../repositories/UserRepository";

class UserRepositoryKnex implements UserRepository {
    async insertUser(user: Omit<User, "id" | "created_at" | "updated_at">): Promise<User> {
            const [id] = await  knexConnection('users').insert(user)
        return {
            id,
          ...user, 
            created_at: new Date(),
            updated_at: new Date()
    
        }
    }
    async getUserByEmail(email: string): Promise<User> {
        const user = await knexConnection('users').where({ email }).first();
        return user;
    }

}
export default UserRepositoryKnex;