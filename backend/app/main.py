from fastapi import FastAPI
from app.routers import analize

app = FastAPI(title="Data Analyzes Dashboard API")

app.include_router(analize.router)  

@app.get("/health")
def health_check():
    return {"status": "ok"}