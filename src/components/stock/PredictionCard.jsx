export default function PredictionCard({ prediction }) {
  if (!prediction) return null;

  return (
    <section className="bg-white rounded-2xl shadow p-5">
      <h2 className="text-lg font-semibold mb-4">Prediction</h2>

      <div className="grid md:grid-cols-4 gap-4">
        <div className="bg-slate-50 rounded-xl p-4">
          <p className="text-sm text-slate-500">Symbol</p>
          <p className="text-xl font-bold">{prediction.symbol}</p>
        </div>

        <div className="bg-slate-50 rounded-xl p-4">
          <p className="text-sm text-slate-500">Model</p>
          <p className="text-xl font-bold">{prediction.model}</p>
        </div>

        <div className="bg-slate-50 rounded-xl p-4">
          <p className="text-sm text-slate-500">Next Price</p>
          <p className="text-xl font-bold">{prediction.next_price}</p>
        </div>

        <div className="bg-slate-50 rounded-xl p-4">
          <p className="text-sm text-slate-500">Confidence</p>
          <p className="text-xl font-bold">{prediction.confidence}%</p>
        </div>
      </div>
    </section>
  );
}