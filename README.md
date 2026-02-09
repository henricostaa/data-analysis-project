# Analisador de CSV com Python e React

Projeto **full stack** para análise de dados a partir de arquivos CSV. A aplicação permite fazer upload de um CSV, processar os dados no backend em Python e visualizar estatísticas e gráficos no frontend em React.

> Projeto desenvolvido com foco em **portfólio**, boas práticas de organização de código e integração front-end + back-end.

---

## Funcionalidades

* Upload de arquivos CSV
* Leitura e tratamento de dados com **Pandas**
* Cálculo automático de estatísticas:

  * Média
  * Valor mínimo
  * Valor máximo
* Visualização dos dados em:

  * Lista textual
  * Gráfico de barras (média por coluna)
* Interface limpa e responsiva

---

## Exemplo de uso

1. O usuário faz upload de um arquivo CSV
2. O backend processa apenas colunas numéricas
3. As estatísticas são retornadas via API
4. O frontend exibe os dados e o gráfico

Exemplo de CSV utilizado:

```csv
idade,salario,anos_experiencia
22,1800,0
30,3500,4
45,8000,15
```

---

## Tecnologias utilizadas

### Frontend

* React
* Vite
* Axios
* Recharts
* CSS puro

### Backend

* Python
* FastAPI
* Pandas
* Uvicorn
* CORS Middleware

---

## Estrutura do projeto (Frontend)

```text
src/
├── components/
│   ├── FileUpload.jsx
│   ├── Results.jsx
│   └── Chart.jsx
├── services/
│   └── api.js
├── App.jsx
├── main.jsx
└── index.css
```

---

## Como rodar o projeto localmente

### 🔹 Backend

```bash
# criar ambiente virtual
python -m venv venv

# ativar o ambiente
# Windows
venv\\Scripts\\activate
# Linux / Mac
source venv/bin/activate

# instalar dependências
pip install -r requirements.txt

# rodar o servidor
uvicorn app.main:app --reload
```

Backend disponível em:

```
http://127.0.0.1:8000
```

---

### 🔹 Frontend

```bash
# instalar dependências
npm install

# rodar o projeto
npm run dev
```

Frontend disponível em:

```
http://localhost:5173
```

---

## Autor

Desenvolvido por **Henrique Costa**

GitHub: [https://github.com/henricostaa](https://github.com/henricostaa)

---

⭐ Se esse projeto te ajudou ou te chamou atenção, considere deixar uma estrela!
