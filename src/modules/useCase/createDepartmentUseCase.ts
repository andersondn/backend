import { inject, injectable } from 'tsyringe';

type CreateDepartmentParams = {
    title: string;
};

@injectable()
class CreateDepartmentUseCase {
    constructor(
        @inject('DepartmentRepository')
        private departmentRepository: DepartmentRepository
    ) {}
    async execute({ title }: CreateDepartmentParams): Promise<Department> {
        const department = await this.departmentRepository.createDepartment({
            title
        });

        return department;
    }
}
export default CreateDepartmentUseCase;
