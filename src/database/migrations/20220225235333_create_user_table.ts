import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable('users', function (table) {
        table.increments();
        table.string('name', 50).notNullable();
        table.string('email', 150).notNullable();
        table.string('password', 255).notNullable();
        table.timestamps();
      })
      
}


export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTable('users');
}

