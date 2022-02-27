import { inject, injectable } from 'tsyringe';
import DepartmentRepository from '../repositories/DepartmentRepository';
import AppError from '../../../shared/helpers/AppError';

@injectable()
class DeleteDepartmentUseCase {
    constructor(
        @inject('DepartmentRepository')
        private departmentRepository: DepartmentRepository
    ) {}
    async execute(departmentId: number): Promise<boolean> {
        const checkDepartment =
            await this.departmentRepository.getDepartmentById(departmentId);
        if (!checkDepartment) {
            throw new AppError({
                message: 'Departamento não encontrado',
                statusCode: 404
            });
        }

        const department = await this.departmentRepository.deleteDepartment(
            departmentId
        );

        return department;
    }
}
export default DeleteDepartmentUseCase;
