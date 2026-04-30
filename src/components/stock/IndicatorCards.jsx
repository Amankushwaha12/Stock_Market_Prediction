export default function IndicatorCards({ prediction }) {
  if (!prediction) return null;

  const items = [
    { label: "RSI", value: prediction.rsi },
    { label: "Momentum", value: prediction.momentum },
    { label: "Volatility", value: prediction.volatility },
    { label: "MA7", value: prediction.ma7 },
    { label: "MA10", value: prediction.ma10 },
    { label: "Latest Close", value: prediction.latest_close },
  ];

  return (
    <section className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {items.map((item) => (
        <div key={item.label} className="bg-white rounded-2xl shadow p-5">
          <p className="text-sm text-slate-500">{item.label}</p>
          <p className="text-2xl font-bold text-slate-800 mt-2">{item.value}</p>
        </div>
      ))}
    </section>
  );
}