/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('food_type').del()
  await knex('food_type').insert([
    {id: 1, name: 'kibble', description: 'dry, dull, hard'},
    {id: 2, name: 'live feed',description: 'living crickets, mice ect'},
    {id: 3, name: 'seed', description: 'sunflower mixes, ect'},
  ]);
};
