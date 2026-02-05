import React, {useState} from 'react'
import FileUpload from './components/FileUpload'
import Results from './components/Results'
import Chart from './components/Chart';

function App() {

  const [results, setResults] = useState(null);

  return (
       <div className="container">
        <div className="app-shell">
          <header className="app-header">
            <p className="eyebrow">Data insights</p>
            <h1>Data Analysis Dashboard</h1>
            <p className="subtle">
              Faça o upload do seu CSV e visualize estatísticas de forma simples.
            </p>
          </header>
          <main className="app-content">
            <FileUpload setResults={setResults} />
            <Results results={results} />
            <Chart results={results} />
          </main>
        </div>
       </div>
  )
}

export default App
