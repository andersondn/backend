import { inject, injectable } from 'tsyringe';
import DepartmentRepository from '../repositories/DepartmentRepository';

@injectable()
class ListDepartmentsUseCase {
    constructor(
        @inject('DepartmentRepository')
        private departmentRepository: DepartmentRepository
    ) {}
    async execute(): Promise<Department[]> {
        const departments = await this.departmentRepository.listDepartments();

        return departments;
    }
}
export default ListDepartmentsUseCase;
