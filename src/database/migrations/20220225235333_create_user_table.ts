import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable('users', function (table) {
        table.increments();
        table.string('name', 150).notNullable();
        table.string('email', 150).notNullable().unique();
        table.string('password', 255).notNullable();
        table.enum('role', ['ADMIN', 'MANAGER','EMPLOYEE']).notNullable();
        table.integer('department_id')
            .unsigned()
            .index()
            .references('id')
            .inTable('departments');
        table.timestamps();
      })
      
}


export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTable('users');
}

