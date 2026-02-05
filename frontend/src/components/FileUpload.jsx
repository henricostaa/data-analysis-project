import { useState } from "react";
import api from "../services/api";  

function FileUpload({setResults}) {

    const [file, setFile] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    async function handleAnalize() {
        if (!file) {
            alert("Please select a file first!");
            return;
        }
        
        const formData = new FormData();
        formData.append("file", file);

        console.log(formData.get("file"));
        
        setLoading(true);
        setError(null);

         try {
            const response = await api.post("/analyze", formData);
            console.log("Resultado da análise:", response.data);
            setResults(response.data.columns);
        } catch (err) {
            setError("Erro ao analisar o arquivo");
            console.error(err);
        } finally {
            setLoading(false);
        }
    }

  return (
    <div className="upload-box">
      <h2>Upload your CSV file</h2>
      <input type="file" accept=".csv" onChange={(e) => setFile(e.target.files[0])} />
      <button className="btn" onClick={handleAnalize} disabled={loading}>{loading ? "Analisando..." : "Analizar"}</button>
      {error && <p className="error">{error}</p>}
    </div>
  );
}

export default FileUpload;