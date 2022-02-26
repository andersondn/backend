import knex from 'knex';
import knexConfiguration from '../../../knexfile';
import { NODE_ENV } from './constants';

const knexConnection = knex(knexConfiguration[NODE_ENV])

export  { knexConnection };