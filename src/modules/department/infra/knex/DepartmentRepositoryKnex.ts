class DepartmentRepositoryKnex implements DepartmentRepository {
    createDepartment(department: Omit<Department, "id" | "created_at" | "updated_at">): Promise<Department> {
        throw new Error("Method not implemented.");
    }

}
export default DepartmentRepositoryKnex