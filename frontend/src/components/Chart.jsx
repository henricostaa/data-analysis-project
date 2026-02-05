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
    <div className="chart-container">
      <h2>Média por coluna</h2>

      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="mean" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default Chart;
