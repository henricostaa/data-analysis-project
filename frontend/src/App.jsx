import React, {useState} from 'react'
import FileUpload from './components/FileUpload'
import Results from './components/Results'
import Chart from './components/Chart';

function App() {

  const [results, setResults] = useState(null);

  return (
       <div className="container">
        <h1>Data Analyzes Dashboard</h1>
        <FileUpload setResults={setResults} />
        <Results results={results} />
        <Chart results={results} />
       </div>
  )
}

export default App
