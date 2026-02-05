import React from 'react';

function Results({ results }) {
  if (!results) return null;

  return (
    <div className='results'>
      <h2>Resultados</h2>

      {Object.entries(results).map(([column, stats]) => (
        <div className='result-card' key={column} style={{ marginBottom: "16px" }}>
          <strong>{column}</strong>

          <div>Média: {stats.mean}</div>
          <div>Mínimo: {stats.min}</div>
          <div>Máximo: {stats.max}</div>
        </div>
      ))}
    </div>
  );
}

export default Results;
