/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('county_list').del()
  await knex('county_list').insert([
    {id: 1, county: 'Harnett'},
    {id: 2, county: 'Wake'}
  ]);
};
