/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('race_list').del()
  await knex('race_list').insert([
    {id: 1,
      race_name: 'I thought turkeys could fly 5k',
      race_date: 'November 8, 2024',
      distance: '5K',
      finish_time: '24:50.5',
      place: '6',
      county: 'Harnett'

    }
    
  ]);
};
