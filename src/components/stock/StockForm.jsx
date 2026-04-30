import { useState } from "react";

export default function StockForm({ onFetch, onPredict, loading }) {
  const [symbol, setSymbol] = useState("AAPL");
  const [model, setModel] = useState("xgboost");
  const [period, setPeriod] = useState("1y");
  const [interval, setInterval] = useState("1d");

  const handleFetch = () => {
    onFetch(symbol, period, interval);
  };

  const handlePredict = () => {
    onPredict({
      symbol,
      model_name: model,
      period,
      interval,
    });
  };

  return (
    <section className="bg-white rounded-2xl shadow p-5">
      <h2 className="text-lg font-semibold mb-4">Search Stock</h2>

      <div className="grid md:grid-cols-4 gap-4">
        <input
          type="text"
          value={symbol}
          onChange={(e) => setSymbol(e.target.value.toUpperCase())}
          placeholder="Enter symbol"
          className="border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
        />

        <select
          value={model}
          onChange={(e) => setModel(e.target.value)}
          className="border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
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
          className="border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="6mo">6 Months</option>
          <option value="1y">1 Year</option>
          <option value="2y">2 Years</option>
          <option value="5y">5 Years</option>
        </select>

        <select
          value={interval}
          onChange={(e) => setInterval(e.target.value)}
          className="border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="1d">1 Day</option>
          <option value="1wk">1 Week</option>
        </select>
      </div>

      <div className="flex gap-3 mt-4">
        <button
          onClick={handleFetch}
          disabled={loading}
          className="bg-blue-600 text-white rounded-xl px-4 py-3 hover:bg-blue-700 disabled:opacity-50"
        >
          {loading ? "Loading..." : "Fetch Data"}
        </button>

        <button
          onClick={handlePredict}
          disabled={loading}
          className="bg-green-600 text-white rounded-xl px-4 py-3 hover:bg-green-700 disabled:opacity-50"
        >
          {loading ? "Loading..." : "Predict"}
        </button>
      </div>
    </section>
  );
}