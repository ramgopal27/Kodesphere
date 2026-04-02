import React, { useEffect, useState } from "react";
import axios from "axios";
import { PieChart, Pie, Cell, Tooltip } from "recharts";

function Dashboard() {
  const [stats, setStats] = useState({
    total: 0,
    completed: 0,
    pending: 0
  });

  useEffect(() => {
    axios.get("http://localhost:8080/api/tasks/stats")
      .then(res => setStats(res.data));
  }, []);

  const data = [
    { name: "Completed", value: stats.completed },
    { name: "Pending", value: stats.pending }
  ];

  const COLORS = ["#00C49F", "#FF8042"];

  return (
    <div>
      <h2>Dashboard</h2>

      <div className="card-container">
        <div className="card">Total: {stats.total}</div>
        <div className="card">Completed: {stats.completed}</div>
        <div className="card">Pending: {stats.pending}</div>
      </div>

      <h3>Task Distribution</h3>

      <PieChart width={300} height={300}>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          outerRadius={100}
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={index} fill={COLORS[index]} />
          ))}
        </Pie>
        <Tooltip />
      </PieChart>
    </div>
  );
}

export default Dashboard;