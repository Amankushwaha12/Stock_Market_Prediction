import { useState } from "react";
import api from "../api/client";

export default function useStockData() {
  const [history, setHistory] = useState([]);
  const [prediction, setPrediction] = useState(null);
  const [trainingResult, setTrainingResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchHistory = async (symbol, period = "1y", interval = "1d") => {
    setLoading(true);
    setError("");
    try {
      const res = await api.get("/api/stock/history", {
        params: { symbol, period, interval },
      });
      setHistory(res.data.data || []);
    } catch (err) {
      setError(err?.response?.data?.detail || "Failed to fetch stock history");
    } finally {
      setLoading(false);
    }
  };

  const predictPrice = async ({ symbol, model_name, period = "2y", interval = "1d" }) => {
    setLoading(true);
    setError("");
    try {
      const res = await api.post("/api/predict", {
        symbol,
        model_name,
        period,
        interval,
      });
      setPrediction(res.data);
    } catch (err) {
      setError(err?.response?.data?.detail || "Prediction failed");
    } finally {
      setLoading(false);
    }
  };

  const trainModel = async ({ symbol, model_name, period = "2y", interval = "1d" }) => {
    setLoading(true);
    setError("");
    try {
      const res = await api.post("/api/train", {
        symbol,
        model_name,
        period,
        interval,
      });
      setTrainingResult(res.data);
    } catch (err) {
      setError(err?.response?.data?.detail || "Training failed");
    } finally {
      setLoading(false);
    }
  };

  return {
    history,
    prediction,
    trainingResult,
    loading,
    error,
    fetchHistory,
    predictPrice,
    trainModel,
  };
}