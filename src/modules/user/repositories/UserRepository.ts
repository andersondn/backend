import User from "../entities/User";

interface UserRepository {
    insertUser(user: Omit<User, 'id' | 'created_at' | 'updated_at' | 'department_title' >): Promise<User>;
    getUserByEmail(email: string): Promise<User>;
    getUserById(userId: number): Promise<User>;
    listUsers(): Promise<User[]>;
    updateUser(userId: number, user: Omit<User, 'id' | 'created_at' | 'updated_at' | 'password' | 'department_title'>): Promise<number>;
    deleteUser(userId: number): Promise<number>;
}

export default UserRepository;