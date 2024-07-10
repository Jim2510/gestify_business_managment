import { ResponsiveRadialBar } from "@nivo/radial-bar";
import dataSalesSx from "../../data/dataSalesSx";

export function GraphHomeSx() {
  return (
    <>
      <ResponsiveRadialBar
        data={dataSalesSx}
        maxValue={100}
        valueFormat=" >-.2f"
        innerRadius={0.15}
        margin={{ top: 40, right: 120, bottom: 40, left: 40 }}
        colors={{ scheme: "blue_green" }}
        borderWidth={1}
        borderColor={{
          from: "color",
          modifiers: [["darker", "0.6"]],
        }}
        enableTracks={false}
        enableRadialGrid={false}
        radialAxisStart={{ tickSize: 5, tickPadding: 5, tickRotation: 0 }}
        circularAxisOuter={{ tickSize: 5, tickPadding: 12, tickRotation: 0 }}
        legends={[
          {
            anchor: "right",
            direction: "column",
            justify: false,
            translateX: 80,
            translateY: 0,
            itemsSpacing: 6,
            itemDirection: "left-to-right",
            itemWidth: 100,
            itemHeight: 18,
            itemTextColor: "#999",
            symbolSize: 18,
            symbolShape: "square",
            effects: [
              {
                on: "hover",
                style: {
                  itemTextColor: "#000",
                },
              },
            ],
          },
        ]}
      />
    </>
  );
}
