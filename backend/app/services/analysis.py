import pandas as pd


def analyze_dataframe(df: pd.DataFrame) -> dict:
    numeric_df = df.select_dtypes(include="number")

    if numeric_df.empty:
        raise ValueError("CSV sem colunas numéricas")

    result = {}

    for column in numeric_df.columns:
        result[column] = {
            "mean": round(float(numeric_df[column].mean()), 2),
            "median": round(float(numeric_df[column].median()), 2),
            "min": round(float(numeric_df[column].min()), 2),
            "max": round(float(numeric_df[column].max()), 2),
        }

    return result
