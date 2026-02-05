from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.routers import analize

app = FastAPI(title="Data Analyzes Dashboard API")

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",
        "http://127.0.0.1:5173"
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(analize.router)  

@app.get("/health")
def health_check():
    return {"status": "ok"}