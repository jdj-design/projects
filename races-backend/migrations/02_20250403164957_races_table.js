/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('race_list',table =>{
        table.increments();
        table.string('race_name', 50);
        table.date('race_date');
        table.string('distance');
        table.time('finish_time');
        table.integer('place');
        table.string('county');
        table.foreign('county').references('county_list.county');
      });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.alterTable('race_list', table =>{
        table.dropForeign('county')
    })
    .then(function (){
        return knex.schema.dropTableIfExists('race_list');
    });
};
