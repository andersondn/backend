import User from "../entities/User";

interface UserRepository {
    insertUser(user: Omit<User, 'id' | 'created_at' | 'updated_at'>): Promise<User>;
    getUserByEmail(email: string): Promise<User>;
    getUserById(userId: number): Promise<User>;
    listUsers(): Promise<User[]>;
    updateUser(userId: number, user: Omit<User, 'id' | 'created_at' | 'updated_at' | 'password'>): Promise<number>;
}
export default UserRepository;