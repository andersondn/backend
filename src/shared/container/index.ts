import { container } from "tsyringe";
import UserRepositoryKnex from '../../modules/user/infra/knex/UserRepositoryKnex';
import UserRepository from "../../modules/user/repositories/UserRepository";

container.registerSingleton<UserRepository>(
    'UserRepository',
    UserRepositoryKnex    
)