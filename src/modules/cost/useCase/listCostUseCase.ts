import { inject, injectable } from 'tsyringe';
import CostRepository from '../repositories/CostRepository';


@injectable()
class ListCostUseCase {
    constructor(
        @inject('CostRepository')
        private costRepository: CostRepository
    ) {}
    async execute() {
        const costs = await this.costRepository.listCosts();

        return costs;

    }
}
export default ListCostUseCase;