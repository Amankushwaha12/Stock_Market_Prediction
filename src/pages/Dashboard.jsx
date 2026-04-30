import Navbar from "../components/layout/Navbar";
import StockForm from "../components/stock/StockForm";
import PriceChart from "../components/stock/PriceChart";
import IndicatorCards from "../components/stock/IndicatorCards";
import PredictionCard from "../components/stock/PredictionCard";
import TrainingPanel from "../components/stock/TrainingPanel";
import useStockData from "../hooks/useStockData";

export default function Dashboard() {
  const {
    history,
    prediction,
    trainingResult,
    loading,
    error,
    fetchHistory,
    predictPrice,
    trainModel,
  } = useStockData();

  return (
    <div className="min-h-screen bg-slate-100">
      <Navbar />

      <main className="max-w-7xl mx-auto px-4 py-6 space-y-6">
        {error && (
          <div className="bg-red-100 text-red-700 border border-red-200 rounded-xl px-4 py-3">
            {error}
          </div>
        )}

        <StockForm
          onFetch={fetchHistory}
          onPredict={predictPrice}
          loading={loading}
        />

        <PriceChart data={history} />

        <PredictionCard prediction={prediction} />

        <IndicatorCards prediction={prediction} />

        <TrainingPanel onTrain={trainModel} loading={loading} />

        {trainingResult && (
          <section className="bg-white rounded-2xl shadow p-5">
            <h2 className="text-lg font-semibold mb-4">Training Result</h2>
            <pre className="text-sm bg-slate-50 rounded-xl p-4 overflow-auto">
              {JSON.stringify(trainingResult, null, 2)}
            </pre>
          </section>
        )}
      </main>
    </div>
  );
}