import React, { useEffect, useState } from 'react';
import BrowserOnly from '@docusaurus/BrowserOnly';
import { PlotParams } from 'react-plotly.js';

// Definição das interfaces para tipagem dos dados
interface PlotlyData {
  data: Array<any>;
  layout: Partial<Plotly.Layout>;
}

interface PlotlyProps {
  graphData?: PlotlyData;
}

export default function Plotly({ graphData }: PlotlyProps): JSX.Element {
  const [data, setData] = useState<PlotlyData | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!graphData) {
      setData(null);
    } else {
      setData(graphData);
    }
  }, [graphData]);

  if (error) {
    return <div>Error loading the graph data: {error}</div>;
  }

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <BrowserOnly fallback={<div>Loading...</div>}>
      {() => {
        const Plot = require('react-plotly.js').default;
        return <Plot 
          data={data.data} 
          layout={data.layout} 
        />;
      }}
    </BrowserOnly>
  );
}