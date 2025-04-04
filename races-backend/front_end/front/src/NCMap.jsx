import React, { useEffect, useState } from 'react';
import * as d3 from 'd3';
import jsonData from './NC.geo.json'; // GeoJSON data
import './App.css';

const NCMap = () => {
  const geojsonData = jsonData; // Directly use imported JSON
  const [dimensions, setDimensions] = useState({
    width: Math.min(window.innerWidth * 0.8, 800),
    height: Math.min(window.innerHeight * 0.5, 500),
  });

  // Resize event listener to update map size
  useEffect(() => {
    const handleResize = () => {
      setDimensions({
        width: Math.min(window.innerWidth * 0.8, 800),
        height: Math.min(window.innerHeight * 0.5, 500),
      });
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    if (geojsonData && geojsonData.features) {
      const { width, height } = dimensions;

      // Log to verify the data and the dimensions
      console.log("GeoJSON Data:", geojsonData);
      console.log("SVG Dimensions:", dimensions);

      const projection = d3.geoAlbersUsa()
        .fitSize([width, height], geojsonData)
        .translate([-1000, -50]).scale(6000);

      const pathGenerator = d3.geoPath().projection(projection);

      // Make sure we can select the SVG and it's being appended properly
      const svg = d3.select('#map')
        .attr('viewBox', `0 0 ${width} ${height}`)
        .attr('preserveAspectRatio', 'xMidYMid meet');

      // Clear any previous SVG paths before adding new ones
      svg.selectAll('*').remove(); // Clear SVG before re-adding paths

      // Append map paths
      svg.selectAll('path')
        .data(jsonData.features)
        .enter()
        .append('path')
        .attr('d', pathGenerator)
        .attr('class', 'County')
        .attr('fill', 'lightblue')
        .attr('stroke', 'black')
        .style('cursor', 'pointer')
        .on('mouseover', function () {
          d3.select(this).attr('fill', 'orange');
        })
        .on('mouseout', function () {
          d3.select(this).attr('fill', 'lightblue');
        })
        .on('click', function (event, d) {
          alert(`Clicked on county: ${d.properties.County}`);
        });

    } else {
      console.error('GeoJSON data is not available or incorrectly formatted');
    }
  }, [dimensions]);

  return (
    <div>
      <h2>North Carolina Map</h2>
      <div className="container">
        <svg id="map"></svg>
      </div>
    </div>
  );
};

export default NCMap;

