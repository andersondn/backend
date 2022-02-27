import { knexConnection } from '../../../../shared/config/knexDB';
import User from '../../entities/User';
import UserRepository from '../../repositories/UserRepository';

class UserRepositoryKnex implements UserRepository {
    async insertUser(
        user: Omit<User, 'id' | 'created_at' | 'updated_at'>
    ): Promise<User> {
        const [id] = await knexConnection('users').insert({
            ...user,
            created_at: new Date(),
            updated_at: new Date()
        });
        return this.getUserById(id);
    }
    async getUserById(userId: number): Promise<User> {
        const user = await knexConnection('users')
            .where({ id: userId })
            .first();
        return user;
    }

    async getUserByEmail(email: string): Promise<User> {
        const user = await knexConnection('users').where({ email }).first();
        return user;
    }

    async listUsers(): Promise<User[]> {
        const users = await knexConnection('users').select({
            id: 'users.id',
            name: 'users.name',
            email: 'users.email',
            role: 'users.role',
            department_id: 'users.department_id',
            created_at: 'users.created_at',
            updated_at: 'users.updated_at'
        });

        return users;
    }

    async updateUser(
        userId: number,
        user: Omit<User, 'id' | 'created_at' | 'updated_at' | 'password'>
    ): Promise<number> {
        return knexConnection('users')
            .where({ id: userId })
            .update({
                ...user,
                updated_at: new Date()
            });
    }
    async deleteUser(userId: number): Promise<number> {
        return knexConnection('users').where({ id: userId }).del();
    }
}
export default UserRepositoryKnex;
