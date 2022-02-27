import { container } from 'tsyringe';
import DepartmentRepositoryKnex from '../../modules/department/infra/knex/DepartmentRepositoryKnex';
import UserRepositoryKnex from '../../modules/user/infra/knex/UserRepositoryKnex';
import UserRepository from '../../modules/user/repositories/UserRepository';

container.registerSingleton<UserRepository>(
    'UserRepository',
    UserRepositoryKnex
);

container.registerSingleton<DepartmentRepository>(
    'DepartmentRepository',
    DepartmentRepositoryKnex
);
