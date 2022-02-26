import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable('departments', function (table) {
        table.increments();
        table.string('title', 50).notNullable();
        table.timestamps();
      })
      
}


export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTable('departments');
}

