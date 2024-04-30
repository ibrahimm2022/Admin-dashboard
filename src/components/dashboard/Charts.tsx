"use client";
import {
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
const data = [
  {
    name: "Sun",
    visit: 3000,
    click: 2398,
  },
  {
    name: "Mon",
    visit: 2000,
    click: 2650,
  },
  {
    name: "Tue",
    visit: 2780,
    click: 3807,
  },
  {
    name: "Wed",
    visit: 2780,
    click: 2146,
  },
  {
    name: "Thur",
    visit: 2547,
    click: 1458,
  },
  {
    name: "Fri",
    visit: 2240,
    click: 2745,
  },
  {
    name: "Sat",
    visit: 2145,
    click: 1956,
  },
];

const Charts = () => {
  return (
    <>
      <h2 className="text-text-soft mb-5">Weekly Recap</h2>
      <ResponsiveContainer width="100%" height={350}>
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip
            contentStyle={{ backgroundColor: "#151c2c", border: "none" }}
          />
          <Legend />
          <Line
            type="monotone"
            dataKey="visit"
            stroke="#8884d8"
            strokeDasharray="5 5"
          />
          <Line
            type="monotone"
            dataKey="click"
            stroke="#82ca9d"
            strokeDasharray="3 4 5 2"
          />
        </LineChart>
      </ResponsiveContainer>
    </>
  );
};

export default Charts;
