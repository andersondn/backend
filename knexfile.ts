import type { Knex } from "knex";

// Update with your config settings.

const config: { [key: string]: Knex.Config } = {
  development: {
    client: "sqlite3",
    connection: {
      filename: "./src/database/db.sqlite3"
    },
    useNullAsDefault: true,
    migrations: {
      directory: "./src/database/migrations"
    }
  },

  test: {
    client: "sqlite3",
    connection: {
      filename: "./src/database/db.sqlite3"
    },
    useNullAsDefault: true,

    migrations: {
      directory: "./src/database/migrations"
    }
  },

  production: {
    client: "sqlite3",
    connection: {
      filename: "./src/database/db.sqlite3"
    },
    useNullAsDefault: true,
    migrations: {
      directory: "./src/database/migrations"
    }
  }

};

export default config;
