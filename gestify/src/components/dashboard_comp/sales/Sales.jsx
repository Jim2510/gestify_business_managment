import { TitleSection } from "../../standard_comp/TitleSection";
import {
  NivoBar,
  RAreaChart,
  RBarChart,
  RLineChart,
  RespRadBar,
} from "../graphs/AllGraphs";
import { FLineChart } from "./FLineChart";
import { News } from "./News";
import { ProgressionBar } from "./ProgressionBar";

export function Sales() {
  return (
    <>
      <div className="flex items-center justify-center flex-col gap-4 w-[95%] mt-[150px]">
        <TitleSection titleName={"DASHBOARD SALES"} />
        <div className="grid grid-cols-4 px-4 gap-4 w-full">
          <FLineChart collection={"COLLECTION 1"} earns={2045} />
          <FLineChart collection={"COLLECTION 2"} earns={1355} />
          <FLineChart collection={"COLLECTION 3"} earns={4045} />
          <FLineChart collection={"COLLECTION 4"} earns={1045} />
        </div>
        <div className="grid grid-cols-4 px-4 gap-4 w-full">
          <div className=" col-span-1 h-[300px] shadow-2xl justify-center items-center bg-white flex flex-col">
            <h2 className="mt-[40px] font-semibold">DATO 1</h2>
            <div className="mt-[-20px]">
              <RespRadBar />
            </div>
          </div>
          <div className="col-span-2 h-[300px] shadow-2xl flex justify-center pt-5 bg-white flex-col items-center gap-5">
            <h2 className="font-semibold">DATO 2</h2>
            <div className="">
              <RLineChart />
            </div>
          </div>
          <div className="col-span-1 h-[300px] shadow-2xl flex justify-center pt-5 bg-white relative">
            <h2 className="font-semibold absolute z-10">DATO 3</h2>
            <RBarChart />
          </div>
        </div>
        <div className="grid grid-cols-4 px-4 gap-4 w-full">
          <div className="col-span-1 bg-white h-[400px] shadow-2xl py-4">
            <div className="flex justify-center">
              <div className="p-5 w-[90%] flex flex-col gap-4 shadow-lg">
                <ProgressionBar comp={92} color={"#02f9ae"} pNum={1} />
                <ProgressionBar comp={44} color={"#1cdafe"} pNum={2} />
                <ProgressionBar comp={23} color={"#60aaff"} pNum={3} />
                <ProgressionBar comp={87} color={"#65ffea"} pNum={4} />
                <ProgressionBar comp={57} color={"#6596ff"} pNum={5} />
              </div>
            </div>
          </div>
          <div className="col-span-2 bg-white h-[400px] text-[#6596ff] shadow-2xl">
            <NivoBar />
          </div>
          <div className="col-span-1 bg-white h-[400px] shadow-2xl">
            <News earns={"+243"} />
          </div>
        </div>
      </div>
    </>
  );
}
