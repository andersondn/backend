import { inject, injectable } from 'tsyringe';
import CostRepository from '../repositories/CostRepository';


@injectable()

class DeleteCostUseCase {
    constructor(
        @inject('CostRepository')
        private costRepository: CostRepository
    ) {}

    async execute(costId: number){
            
            const cost = await this.costRepository.deleteCost(costId);
    
            return cost;
    
        }

}

export default DeleteCostUseCase;