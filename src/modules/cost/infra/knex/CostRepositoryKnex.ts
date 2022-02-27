import { knexConnection } from '../../../../shared/config/knexDB';
import Cost from '../../entities/Cost';
import CostRepository from '../../repositories/CostRepository';

class CostRepositoryKnex implements CostRepository {
    async createCost(
        cost: Omit<Cost, 'id' | 'created_at' | 'updated_at'>
    ): Promise<Cost> {
        const [id] = await knexConnection('costs').insert({
            ...cost,
            created_at: new Date(),
            updated_at: new Date()
        });
        return this.getCostById(id);
    }
    async listCosts(): Promise<Cost[]> {
        const costs = await knexConnection('costs').select({
            id: 'costs.id',
            title: 'costs.title',
            amount: 'costs.amount',
            date: 'costs.date',
            department_id: 'costs.department_id',
            user_id: 'costs.user_id',
            created_at: 'costs.created_at',
            updated_at: 'costs.updated_at'
        });

        return costs;
    }
    async getCostById(id: number): Promise<Cost> {
        const cost = await knexConnection('costs').where({ id }).first();
        return cost;
    }
    async updateCost(
        costId: number,
        cost: Pick<
            Cost,
            'title' | 'amount' | 'date' | 'department_id' | 'user_id'
        >
    ): Promise<boolean> {
        const updated = await knexConnection('costs')
            .where({ id: costId })
            .update({
                ...cost,
                updated_at: new Date()
            });
        return updated > 0;
    }
    async deleteCost(costId: number): Promise<boolean> {
        const deleted = await knexConnection('costs')
            .where({ id: costId })
            .del();
        return deleted > 0;
    }
}

export default CostRepositoryKnex;
