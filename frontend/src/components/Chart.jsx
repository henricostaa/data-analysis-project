import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

function Chart({ results }) {
  if (!results) return null;

  const data = Object.entries(results).map(([column, stats]) => ({
    name: column,
    mean: stats.mean,
  }));

  return (
    <section className="chart-container panel">
      <div className="panel-header">
        <h2>Média por coluna</h2>
        <p className="muted">Visualização rápida das médias calculadas.</p>
      </div>

      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="mean" fill="#6366f1" radius={[8, 8, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </section>
  );
}

export default Chart;
