from fastapi import APIRouter, UploadFile, File, HTTPException
import pandas as pd

from app.services.analysis import analyze_dataframe

router = APIRouter(prefix="/analyze", tags=["Analyze"])


@router.post("/")
async def analyze_csv(file: UploadFile = File(...)):
    if not file.filename.endswith(".csv"):
        raise HTTPException(
            status_code=400,
            detail="O arquivo deve ser CSV"
        )

    try:
        df = pd.read_csv(file.file)
    except Exception:
        raise HTTPException(
            status_code=400,
            detail="Erro ao ler o arquivo CSV"
        )

    try:
        analysis_result = analyze_dataframe(df)
    except ValueError as error:
        raise HTTPException(
            status_code=400,
            detail=str(error)
        )

    return {
        "status": "success",
        "columns": analysis_result
    }
