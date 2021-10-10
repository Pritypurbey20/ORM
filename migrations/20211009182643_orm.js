const tableName = 'tasks';

exports.up = knex => {
    return knex.schema.createTable(tableName ,table =>{
        table.increments('id').primary();
        table.string('Name');
        table.string('is_done').defaultTo(false);
    })
};

exports.down = knex => {
    return knex.schema.dropTable(tableName)
};
