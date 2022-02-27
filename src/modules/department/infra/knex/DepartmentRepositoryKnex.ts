import { knexConnection } from '../../../../shared/config/knexDB';
import DepartmentRepository from '../../repositories/DepartmentRepository';

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
    async listDepartments(): Promise<Department[]> {
        const departments = await knexConnection('departments').select({
            id: 'departments.id',
            title: 'departments.title',
            created_at: 'departments.created_at',
            updated_at: 'departments.updated_at'
        });

        return departments;
    }
    async getDepartmentById(id: number): Promise<Department> {
        const department = await knexConnection('departments')
            .where({ id })
            .first();
        return department;
    }
    async updateDepartment(
        departmentId: number,
        department: Pick<Department, 'title'>
    ): Promise<boolean> {
        const updated = await knexConnection('departments')
            .where({ id: departmentId })
            .update({
                ...department,
                updated_at: new Date()
            });
        return updated > 0;
    }
    async deleteDepartment(departmentId: number): Promise<boolean> {
        const deleted = await knexConnection('departments')
            .where({ id: departmentId })
            .del();
        return deleted > 0;
    }
}

export default DepartmentRepositoryKnex;
