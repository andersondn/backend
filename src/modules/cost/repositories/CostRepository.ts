import Cost from "../entities/Cost";

interface CostRepository {
    createCost(cost: Omit<Cost, 'id' | 'created_at' | 'updated_at'>): Promise<Cost>;
    listCosts(): Promise<Cost[]>;
    getCostById(id: number): Promise<Cost>;
    updateCost(costId: number, cost: Pick<Cost, 'title' | 'amount' | 'date' | 'department_id'>): Promise<boolean>;
    deleteCost(costId: number): Promise<boolean>;
}

export default CostRepository;