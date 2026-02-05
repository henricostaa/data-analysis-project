import React, {useState} from 'react'
import FileUpload from './components/FileUpload'
import Results from './components/Results'

function App() {

  const [results, setResults] = useState(null);

  return (
       <div style={{ padding: "20px" }}>
        <h1>Data Analyzes Dashboard</h1>
        <FileUpload setResults={setResults} />
        <Results results={results} />
       </div>
  )
}

export default App
