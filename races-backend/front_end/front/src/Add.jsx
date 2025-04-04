import React, { useState } from 'react';

export default function Add() {
  const [raceName, setRaceName] = useState('');
  const [raceDate, setRaceDate] = useState('');
  const [raceDistance, setRaceDistance] = useState('');
  const [finishTime, setFinishTime] = useState('');
  const [place, setPlace] = useState('');
  const [county, setCounty] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    alert('Race added to your records!')
    setTimeout(()=>{
        e.target.submit();
        console.log('delay');
    }, 3000);

    const entry = {
      race_name: raceName,
      race_date: raceDate,
      distance: raceDistance,
      finish_time: finishTime,
      place: place,
      county: county,
    };

    try {
      const response = await fetch('http://localhost:8081', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json', 
        },
        body: JSON.stringify(entry),
      });

      if (response.ok) {
        console.log('Race entered successfully!');
      } else {
        console.error('Error submitting form:', response.statusText);
      }
    } catch (error) {
      console.error('Network error:', error);
    }
  };

  return (
    <div>
      <h2>Race Information</h2>
      <form onSubmit={handleSubmit}>
        <label>Race Name</label>
        <br />
        <input
          type="text"
          placeholder="Race Name"
          required
          value={raceName}
          onChange={(e) => setRaceName(e.target.value)}
        />
        <br />

        <label>Race Date</label>
        <br />
        <input
          type="date"
          required
          value={raceDate}
          onChange={(e) => setRaceDate(e.target.value)}
        />
        <br />

        <label>Race Distance</label>
        <br />
        <input
          type="text"
          placeholder="Race Distance"
          required
          value={raceDistance}
          onChange={(e) => setRaceDistance(e.target.value)}
        />
        <br />

        <label>Finish Time</label>
        <br />
        <input
          type="text"
          placeholder='HH:MM:SS'
          required
          value={finishTime}
          onChange={(e) => setFinishTime(e.target.value)}
        />
        <br />

        <label>Place</label>
        <br />
        <input
          type="number"
          placeholder="Place"
          required
          value={place}
          onChange={(e) => setPlace(e.target.value)}
        />
        <br />

        <label>County</label>
        <br />
        <input
          type="text"
          placeholder="County"
          required
          value={county}
          onChange={(e) => setCounty(e.target.value)}
        />
        <br />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

