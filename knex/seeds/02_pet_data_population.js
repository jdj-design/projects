/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('pet').del()
  await knex('pet').insert([
    {id: 1, name: 'Max', pet_type_id: 1 },
    {id: 2, name: 'Ruff', pet_type_id: 3},
    {id: 3, name: 'Lucky', pet_type_id: 2},
    {id: 4, name: 'Bubbles', pet_type_id: 4},
  ]);
};
