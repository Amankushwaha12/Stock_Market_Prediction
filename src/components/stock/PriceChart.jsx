import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

export default function PriceChart({ data }) {
  if (!data || data.length === 0) {
    return (
      <section className="bg-white rounded-2xl shadow p-5">
        <h2 className="text-lg font-semibold mb-4">Historical Price</h2>
        <p className="text-slate-500">No chart data available.</p>
      </section>
    );
  }

  const chartData = data.map((item) => ({
    date: item.Date ? new Date(item.Date).toLocaleDateString() : "",
    close: Number(item.Close || 0),
    ma7: item.ma7 === "" ? null : Number(item.ma7),
    ma10: item.ma10 === "" ? null : Number(item.ma10),
  }));

  return (
    <section className="bg-white rounded-2xl shadow p-5">
      <h2 className="text-lg font-semibold mb-4">Historical Price</h2>

      <div className="w-full h-90">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" minTickGap={24} />
            <YAxis domain={["auto", "auto"]} />
            <Tooltip />
            <Line type="monotone" dataKey="close" stroke="#2563eb" dot={false} strokeWidth={2} />
            <Line type="monotone" dataKey="ma7" stroke="#16a34a" dot={false} strokeWidth={2} />
            <Line type="monotone" dataKey="ma10" stroke="#9333ea" dot={false} strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </section>
  );
}