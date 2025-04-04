import React, { useEffect, useState } from 'react'

export default function History() {
    const [results ,setResults]=useState([]);

    useEffect(() => {
        // Fetch data when the component mounts
        const fetchData = async () => {
          try {
            const response = await fetch('http://localhost:8081/races');
            if (!response.ok) {
              throw new Error('Could not get race data');
            }
            const jsonRace = await response.json();
            setResults(jsonRace);
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        };
    
        fetchData();
      }, []); 

  return (
     
    <div>
        <h2>Your Race History</h2>
       
        <div>
            <ul>

    {results.map((result) => (
        <li key={result.id}>{result.race_name}<br></br> Distance: {result.distance} |Place: {result.place}<br></br>Time: {result.finish_time}</li>
    ))}
    </ul>
  </div>
    </div>
  )
}
