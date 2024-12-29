import React, { useState } from 'react';
import Plot from 'react-plotly.js';

const App = () => {
  const scatterData = [
    { id: 1, x: 1, y: 2 },
    { id: 2, x: 2, y: 3 },
    { id: 3, x: 3, y: 4 },
    { id: 4, x: 4, y: 5 },
  ];

  const lineData = [
    { id: 1, x: 1, y: 2 },
    { id: 2, x: 2, y: 3 },
    { id: 3, x: 3, y: 4 },
    { id: 4, x: 4, y: 5 },
  ];

  const [highlightedPoint, setHighlightedPoint] = useState(null);

  const handleScatterClick = (event) => {
    if (event.points.length > 0) {
      const pointId = event.points[0].customdata;
      setHighlightedPoint(pointId);
    }
  };

  const handleLineClick = (event) => {
    if (event.points.length > 0) {
      const pointId = event.points[0].customdata;
      setHighlightedPoint(pointId);
    }
  };

  const scatterTrace = {
    x: scatterData.map((point) => point.x),
    y: scatterData.map((point) => point.y),
    mode: 'markers',
    marker: {
      size: 10,
      color: scatterData.map((point) =>
        highlightedPoint === point.id ? 'red' : 'blue'
      ),
    },
    customdata: scatterData.map((point) => point.id),
    type: 'scatter',
  };

  const lineTrace = {
    x: lineData.map((point) => point.x),
    y: lineData.map((point) => point.y),
    mode: 'lines+markers',
    marker: {
      size: 10,
      color: lineData.map((point) =>
        highlightedPoint === point.id ? 'red' : 'blue'
      ),
    },
    line: { color: 'blue' },
    customdata: lineData.map((point) => point.id),
    type: 'scatter',
  };

  return (
    <div>
      <h1>Interactive Scatter and Line Graph</h1>
      <div style={{ display: 'flex', justifyContent: 'space-around' }}>
        <Plot
          data={[scatterTrace]}
          layout={{
            title: 'Scatter Plot',
            xaxis: { title: 'X-axis' },
            yaxis: { title: 'Y-axis' },
          }}
          onClick={handleScatterClick}
        />

        <Plot
          data={[lineTrace]}
          layout={{
            title: 'Line Graph',
            xaxis: { title: 'X-axis' },
            yaxis: { title: 'Y-axis' },
          }}
          onClick={handleLineClick}
        />
      </div>
    </div>
  );
};

export default App;
