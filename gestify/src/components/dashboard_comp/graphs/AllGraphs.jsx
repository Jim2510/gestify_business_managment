import { ResponsiveRadialBar } from "@nivo/radial-bar";
import dataPie from "../../../data/dataPie";
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  Pie,
  PieChart,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import dataM from "../../../data/dataMarimekko";
import datab from "../../../data/dataBar";
import dataT from "../../../data/dataT";

export function RespRadBar() {
  return (
    <>
      <PieChart width={330} height={300}>
        <Pie
          data={dataPie}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          outerRadius={50}
          fill="#02f9ae"
        />
        <Pie
          data={dataPie}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          innerRadius={60}
          outerRadius={80}
          fill="#60aaff"
          label
        />
      </PieChart>
    </>
  );
}

export function RLineChart() {
  return (
    <>
      <AreaChart
        width={650}
        height={230}
        data={dataM}
        margin={{ top: 20, right: 30, left: 0, bottom: 0 }}
      >
        <defs>
          <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#02f9ae" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#02f9ae" stopOpacity={0} />
          </linearGradient>
          <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#1cdafe" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#1cdafe" stopOpacity={0} />
          </linearGradient>
        </defs>
        <XAxis fontSize={12} dataKey="name" />
        <YAxis fontSize={12} />
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip />
        <Area
          type="monotone"
          dataKey="uv"
          stroke="#02f9ae"
          fillOpacity={1}
          fill="url(#colorUv)"
        />
        <Area
          type="monotone"
          dataKey="pv"
          stroke="#1cdafe"
          fillOpacity={1}
          fill="url(#colorPv)"
        />
      </AreaChart>
    </>
  );
}

export function RBarChart() {
  return (
    <>
      <BarChart
        width={350}
        height={300}
        data={datab}
        margin={{ right: 15, bottom: 20 }}
      >
        <XAxis fontSize={12} dataKey="name" />
        <YAxis fontSize={12} />
        <Tooltip />
        <Bar dataKey="pv" fill="#02f9ae" />
        <Bar dataKey="uv" fill="#60aaff" />
      </BarChart>
    </>
  );
}

export function RAreaChart() {
  return (
    <>
      <AreaChart
        width={200}
        height={80}
        data={dataT}
        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
      >
        <XAxis
          padding={"gap"}
          fontSize={10}
          height={20}
          tickCount={1}
          tickLine={false}
          tickSize={3}
        />
        <defs>
          <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#1cdafe" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#1cdafe" stopOpacity={0} />
          </linearGradient>
          <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#02f9ae" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#02f9ae" stopOpacity={0} />
          </linearGradient>
        </defs>
        <Tooltip />
        <Area
          type="monotone"
          dataKey="uv"
          stroke="#1cdafe"
          fillOpacity={1}
          fill="url(#colorUv)"
        />
        <Area
          type="monotone"
          dataKey="pv"
          stroke="#02f9ae"
          fillOpacity={1}
          fill="url(#colorPv)"
        />
      </AreaChart>
    </>
  );
}
