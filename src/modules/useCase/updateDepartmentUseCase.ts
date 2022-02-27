import { inject, injectable } from 'tsyringe';
import DepartmentRepository from '../department/repositories/DepartmentRepository';
import AppError from '../../shared/helpers/AppError';

type UpdateDepartmentParams = {
    title: string;
    departmentId: number;
};

@injectable()
class UpdateDepartmentUseCase {
    constructor(
        @inject('DepartmentRepository')
        private departmentRepository: DepartmentRepository
    ) {}
    async execute({
        title,
        departmentId
    }: UpdateDepartmentParams): Promise<boolean> {
        const checkDepartment =
            await this.departmentRepository.getDepartmentById(departmentId);
        if (!checkDepartment) {
            throw new AppError({
                message: 'Departamento não encontrado',
                statusCode: 404
            });
        }

        const department = await this.departmentRepository.updateDepartment(
            departmentId,
            { title }
        );

        return department;
    }
}
export default UpdateDepartmentUseCase;
