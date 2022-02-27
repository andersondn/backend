import { knexConnection } from '../../../../shared/config/knexDB';

class DepartmentRepositoryKnex implements DepartmentRepository {
    async createDepartment(
        department: Omit<Department, 'id' | 'created_at' | 'updated_at'>
    ): Promise<Department> {
        const [id] = await knexConnection('departments').insert({
            ...department,
            created_at: new Date(),
            updated_at: new Date()
        });
        return {
            id,
            ...department,
            created_at: new Date(),
            updated_at: new Date()
        };
    }
}
export default DepartmentRepositoryKnex;
