import type { Knex } from "knex";

// Update with your config settings.

const config: { [key: string]: Knex.Config } = {
  development: {
    client: "sqlite3",
    connection: {
      filename: "./src/database/db.sqlite3"
    },
    migrations: {
      directory: "./src/database/migrations"
    }
  },

  staging: {
    client: "sqlite3",
    connection: {
      filename: "./src/database/db.sqlite3"
    },
    migrations: {
      directory: "./src/database/migrations"
    }
  },

  production: {
    client: "sqlite3",
    connection: {
      filename: "./src/database/db.sqlite3"
    },
    migrations: {
      directory: "./src/database/migrations"
    }
  }

};

export default config;
