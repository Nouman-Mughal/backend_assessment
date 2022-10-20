// Update with your config settings.
module.exports={
  development:{

    client: 'postgres',
    connection: "postgres://postgres:postgres@localhost:5432/social",
    searchPath: ['knex', 'public']

  }
};


