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
    <section className="panel upload-box">
      <div className="panel-header">
        <h2>Envie seu CSV</h2>
        <p className="muted">Selecione um arquivo para gerar estatísticas instantâneas.</p>
      </div>
      <div className="upload-controls">
        <label className="file-input">
          <span>{file ? file.name : "Escolha o arquivo"}</span>
          <input
            type="file"
            accept=".csv"
            onChange={(e) => setFile(e.target.files[0])}
          />
        </label>
        <button className="btn" onClick={handleAnalize} disabled={loading}>
          {loading ? "Analisando..." : "Analisar dados"}
        </button>
      </div>
      {error && <p className="error">{error}</p>}
    </section>
  );
}

export default FileUpload;
