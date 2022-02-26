import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable('costs', function (table) {
        table.increments();
        table.string('title', 50).notNullable();
        table.integer('amount').notNullable();
        table.integer('department_id')
            .unsigned()
            .index()
            .references('id')
            .inTable('departments');
        table.integer('user_id')
            .unsigned()
            .index()
            .references('id')
            .inTable('users');
        table.timestamps();
      })
}


export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTable('costs');
}

