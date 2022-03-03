import { inject, injectable } from 'tsyringe';
import AppError from '../../../shared/helpers/AppError';
import CostRepository from '../repositories/CostRepository';

@injectable()
class GetCostUseCase {
    constructor(
        @inject('CostRepository')
        private costRepository: CostRepository
    ) {}
    async execute(costId: number){

        const cost = await this.costRepository.getCostById(costId);

        if(!cost) {
            throw new AppError({ message: 'Custo não encontrado', statusCode: 404 });
        }

        return cost;

    }
}

export default GetCostUseCase;
