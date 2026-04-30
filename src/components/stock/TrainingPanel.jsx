import { useState } from "react";

export default function TrainingPanel({ onTrain, loading }) {
  const [symbol, setSymbol] = useState("AAPL");
  const [model, setModel] = useState("xgboost");
  const [period, setPeriod] = useState("2y");
  const [interval, setInterval] = useState("1d");

  const handleTrain = () => {
    onTrain({
      symbol,
      model_name: model,
      period,
      interval,
    });
  };

  return (
    <section className="bg-white rounded-2xl shadow p-5">
      <h2 className="text-lg font-semibold mb-4">Train Model</h2>

      <div className="grid md:grid-cols-4 gap-4">
        <input
          type="text"
          value={symbol}
          onChange={(e) => setSymbol(e.target.value.toUpperCase())}
          className="border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-purple-500"
        />

        <select
          value={model}
          onChange={(e) => setModel(e.target.value)}
          className="border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-purple-500"
        >
          <option value="xgboost">XGBoost</option>
          <option value="lightgbm">LightGBM</option>
          <option value="random_forest">Random Forest</option>
          <option value="catboost">CatBoost</option>
          <option value="lstm">LSTM</option>
        </select>

        <select
          value={period}
          onChange={(e) => setPeriod(e.target.value)}
          className="border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-purple-500"
        >
          <option value="1y">1 Year</option>
          <option value="2y">2 Years</option>
          <option value="5y">5 Years</option>
        </select>

        <select
          value={interval}
          onChange={(e) => setInterval(e.target.value)}
          className="border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-purple-500"
        >
          <option value="1d">1 Day</option>
          <option value="1wk">1 Week</option>
        </select>
      </div>

      <button
        onClick={handleTrain}
        disabled={loading}
        className="bg-purple-600 text-white rounded-xl px-4 py-3 hover:bg-purple-700 disabled:opacity-50 mt-4"
      >
        {loading ? "Training..." : "Train Model"}
      </button>
    </section>
  );
}