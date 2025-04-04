import React, { useEffect, useState } from 'react';
import * as d3 from 'd3';

const NCMap = () => {
  const [geojsonData, setGeojsonData] = useState(null);

  useEffect(() => {
    fetch('/home/skinnyj/projects/linkchart/public/NC.geojson')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to load GeoJSON');
        }
        return response.json();
      })
      .then((data) => {
        setGeojsonData(data);
      })
      .catch((error) => {
        console.error('Error fetching GeoJSON:', error);
      });
  }, []);

  useEffect(() => {
    if (geojsonData && geojsonData.features) {
      const width = window.innerWidth * 0.8;
      const height = window.innerHeight * 0.5;

      const projection = d3.geoAlbers()
        .fitSize([width, height], geojsonData)
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
        .attr('class', 'County')
        .attr('fill', 'lightblue')
        .attr('stroke', 'black')
        .on('mouseover', function () {
          d3.select(this).attr('fill', 'orange');
        })
        .on('mouseout', function () {
          d3.select(this).attr('fill', 'lightblue');
        })
        .on('click', function (event, d) {
          console.log('Clicked on county:', d.properties.name);
        });
    }
  }, [geojsonData]);

  return (
    <div>
      <svg id="map"></svg>
    </div>
  );
};

export default NCMap;

