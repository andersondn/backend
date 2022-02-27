import { inject, injectable } from 'tsyringe';
import DepartmentRepository from '../department/repositories/DepartmenRepository';

@injectable()
class GetDepartmentsUseCase {
    constructor(
        @inject('DepartmentRepository')
        private departmentRepository: DepartmentRepository
    ) {}
    async execute(departmentId: number): Promise<Department> {
        const department = await this.departmentRepository.getDepartmentById(
            departmentId
        );

        return department;
    }
}
export default GetDepartmentsUseCase;
