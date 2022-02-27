interface DepartmentRepository {
    createDepartment(department: Omit<Department, 'id' | 'created_at' | 'updated_at'>): Promise<Department>;
    listDepartments(): Promise<Department[]>;
}