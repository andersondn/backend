import { container } from 'tsyringe';
import DepartmentRepositoryKnex from '../../modules/department/infra/knex/DepartmentRepositoryKnex';
import DepartmentRepository from '../../modules/department/repositories/DepartmentRepository';
import UserRepositoryKnex from '../../modules/user/infra/knex/UserRepositoryKnex';
import UserRepository from '../../modules/user/repositories/UserRepository';
import CostRepository from '../../modules/cost/repositories/CostRepository';
import CostRepositoryKnex from '../../modules/cost/infra/knex/CostRepositoryKnex';

container.registerSingleton<UserRepository>(
    'UserRepository',
    UserRepositoryKnex
);

container.registerSingleton<DepartmentRepository>(
    'DepartmentRepository',
    DepartmentRepositoryKnex
);

container.registerSingleton<CostRepository>(
    'CostRepository',
    CostRepositoryKnex
)