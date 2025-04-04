const express = require('express');
const app = express();
const port = 8081;
const knex= require('knex')(require('../knexfile.js')["development"]);
const cors=require('cors');

app.use(express.json());
app.use(cors());


app.get('/', (request, response)=>{
    response.send('Application is up and running.')
})

app.listen(port,()=>{
    console.log('knex and express are running')
})

app.get('/races', (request, response)=>{
    knex('race_list')
    .select('*')
    .then(data =>{
        var allRaces = data.map(race =>race)
        response.json(allRaces);
    })

})

app.post('/', async (req, res) => {
    try {
      const { race_name, race_date, distance, finish_time, place, county } = req.body;
  
     
      if (!race_name || !race_date || !distance || !finish_time || !place || !county) {
        return res.status(400).json({ error: 'All fields are required' });
      }
  
      await knex('race_list').insert({
        race_name,
        race_date,
        distance,
        finish_time,
        place,
        county
      });
  
      // Success response
      res.status(201).json({ message: 'Race added successfully!' });
    } catch (error) {
      console.error('Error adding race:', error);
      res.status(500).json({ error: 'Failed to add race' });
    }
  });