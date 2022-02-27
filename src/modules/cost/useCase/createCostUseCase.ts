import { inject, injectable } from 'tsyringe';
import CostRepository from '../repositories/CostRepository';
import Cost from '../entities/Cost';


@injectable()

class CreateCostUseCase {

    constructor(
        @inject('CostRepository')
        private costRepository: CostRepository
    ) {}

    async execute({ title, amount, date, user_id, department_id } ): Promise<Cost> {
        const cost = await this.costRepository.createCost({
            title,
            amount,
            date,
            user_id,
            department_id
        });

        return cost;

    }
}

export default CreateCostUseCase;