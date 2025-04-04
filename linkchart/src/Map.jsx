import React, {useEffect, useState} from 'react';
import * as d3 from 'd3';

const MapNC = () => {
    const [geojsonData, setGeojsonData] = useState(null);
  
    useEffect(() => {
      fetch('/path/to/nc.geojson') // Fetch your GeoJSON data
        .then((response) => response.json())
        .then((data) => setGeojsonData(data))
        .catch((error) => console.error('Error fetching GeoJSON:', error));
    }, []);
  
    useEffect(() => {
      if (geojsonData) {
        const width = 1600;
        const height = 1000;
  
        const projection = d3.geoMercator()
          .scale(400)
          .translate([width / 2, height / 2]);
  
        const pathGenerator = d3.geoPath().projection(projection);
  
        const svg = d3.select('#map')
          .attr('width', width)
          .attr('height', height);
  
        svg.selectAll('path')
          .data(geojsonData.features)
          .enter()
          .append('path')
          .attr('d', pathGenerator)
          .attr('fill', 'lightblue')
          .attr('stroke', 'black');
      }
    }, [geojsonData]);
  
    return <svg id="map" style= {{width: "100%", height:"auto"}}></svg>;
  };
  
  export default MapNC; // Change the default export
  