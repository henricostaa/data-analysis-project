import React from 'react';

function Results({ results }) {
  if (!results) return null;

  return (
    <section className='results panel'>
      <div className="panel-header">
        <h2>Resumo estatístico</h2>
        <p className="muted">Métricas principais por coluna numérica.</p>
      </div>

      <div className="results-grid">
        {Object.entries(results).map(([column, stats]) => (
          <div className='result-card' key={column}>
            <strong>{column}</strong>
            <div className="result-metric">
              <span>Média</span>
              <span>{stats.mean}</span>
            </div>
            <div className="result-metric">
              <span>Mínimo</span>
              <span>{stats.min}</span>
            </div>
            <div className="result-metric">
              <span>Máximo</span>
              <span>{stats.max}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Results;
