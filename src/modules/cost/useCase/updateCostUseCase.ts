import { inject, injectable } from 'tsyringe';
import CostRepository from '../repositories/CostRepository';
import AppError from '../../../shared/helpers/AppError';

@injectable()
class UpdateCostUseCase {

    constructor(
        @inject('CostRepository')
        private costRepository: CostRepository
    ) {}
 
    async execute({ costId, title, amount, date, user_id, department_id } ): Promise<boolean> {

        const getCost = await this.costRepository.getCostById(user_id);

        if(!getCost) {
            throw new AppError({ message: 'Cost not found', statusCode: 404 });
        }

        const cost = await this.costRepository.updateCost(costId, {
            title,
            amount,
            date,
            user_id,
            department_id
        });

        return cost;

    }

}

export default UpdateCostUseCase;