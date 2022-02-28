import { inject, injectable } from 'tsyringe';
import CostRepository from '../repositories/CostRepository';

@injectable()
class GetCostUseCase {
    constructor(
        @inject('CostRepository')
        private costRepository: CostRepository
    ) {}
    async execute(costId: number){

        const cost = await this.costRepository.getCostById(costId);

        return cost;

    }
}

export default GetCostUseCase;
