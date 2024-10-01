/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('profiles', table => {
        table.increments('id').primary()
        table.string('name').unique()
        table.json('permissions')
    }).then(() => {
        return knex('profiles').insert([
            { name: "Administrator", permissions: '["ALL"]' },
            { name: "Default", permissions: '["NONE"]' },
            { name: "Support", permissions: '["READ", "UPDATE"]' }
        ])
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('profiles')
};
