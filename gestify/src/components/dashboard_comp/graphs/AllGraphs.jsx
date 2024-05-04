import { ResponsivePie } from "@nivo/pie";
import { ResponsiveBar } from "@nivo/bar";
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
import dataBar from "../../../data/datab";
import dataRPie from "../../../data/dataRPie";

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

export function NivoBar() {
  return (
    <>
      <ResponsiveBar
        data={dataBar}
        keys={["hot dog", "burger", "sandwich", "kebab", "fries", "donut"]}
        indexBy="country"
        margin={{ top: 50, right: 0, bottom: 50, left: 50 }}
        padding={0.3}
        groupMode="grouped"
        valueScale={{ type: "linear" }}
        indexScale={{ type: "band", round: true }}
        colors={{ scheme: "blues" }}
        defs={[
          {
            id: "dots",
            type: "patternDots",
            background: "inherit",
            color: "#38bcb2",
            size: 4,
            padding: 1,
            stagger: true,
          },
          {
            id: "lines",
            type: "patternLines",
            background: "inherit",
            color: "#eed312",
            rotation: -45,
            lineWidth: 6,
            spacing: 10,
          },
        ]}
        fill={[
          {
            match: {
              id: "fries",
            },
            id: "dots",
          },
          {
            match: {
              id: "sandwich",
            },
            id: "lines",
          },
        ]}
        borderWidth={1}
        borderColor={{
          from: "color",
          modifiers: [["darker", 1.6]],
        }}
        axisTop={null}
        axisRight={null}
        axisBottom={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: "country",
          legendPosition: "middle",
          legendOffset: 32,
          truncateTickAt: 0,
        }}
        axisLeft={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: "food",
          legendPosition: "middle",
          legendOffset: -40,
          truncateTickAt: 0,
        }}
        enableLabel={false}
        labelSkipWidth={12}
        labelSkipHeight={12}
        labelTextColor={{
          from: "color",
          modifiers: [["darker", 1.6]],
        }}
        legends={[]}
        role="application"
        ariaLabel="Nivo bar chart demo"
        barAriaLabel={(e) =>
          e.id + ": " + e.formattedValue + " in country: " + e.indexValue
        }
      />
    </>
  );
}

export function RespLine() {
  return (
    <>
      <ResponsivePie
        data={dataRPie}
        margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
        activeOuterRadiusOffset={12}
        colors={{ scheme: "blues" }}
        borderWidth={2}
        borderColor={{
          from: "color",
          modifiers: [["darker", "0.6"]],
        }}
        enableArcLinkLabels={false}
        arcLinkLabelsTextOffset={9}
        arcLinkLabelsTextColor="#333333"
        arcLinkLabelsThickness={2}
        arcLinkLabelsColor={{ from: "color" }}
        arcLabelsRadiusOffset={0.65}
        arcLabelsTextColor={{
          from: "color",
          modifiers: [["darker", "3"]],
        }}
        motionConfig="wobbly"
        legends={[]}
      />
    </>
  );
}
