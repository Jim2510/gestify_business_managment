import { Intst } from "../../bo_comp/Ints";
import { TitleSection } from "../../standard_comp/TitleSection";
import {
  NivoBar,
  RBarChart,
  RLineChart,
  RespRadBar,
} from "../graphs/AllGraphs";
import { FLineChart } from "./FLineChart";
import { News } from "./News";
import { ProgressionBar } from "./ProgressionBar";
import documents from "../../../data/documents";
import { RowF } from "../../bo_comp/RowF";
import { BtnExp } from "./BtnExp";
import { BtnSales } from "./BtnSales";

export function Sales() {
  return (
    <>
      <div className="flex items-center justify-center flex-col gap-4 w-[95%] mt-[100px] relative ">
        <div className="grid grid-cols-4 justify-center items-center gap-4">
          <div className="col-span-1">
            <BtnSales btnName={"TABLES"} link={"/dashboard/tables"} />
          </div>
          <div className=" col-span-2">
            <TitleSection titleName={"DASHBOARD SALES"} />
          </div>
          <BtnExp btnName={"EXPENDITURE"} link={"/dashboard/expenditure"} />
        </div>
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
            <h2 className="font-semibold absolute z-10 bg-white px-2">
              DATO 3
            </h2>
            <RBarChart />
          </div>
        </div>
        <div className="grid grid-cols-4 px-4 gap-4 w-full">
          <div className="col-span-1 bg-white h-[400px] shadow-2xl py-4">
            <div className="flex justify-center">
              <div className="p-5 w-[90%] flex flex-col gap-4 shadow-lg">
                <ProgressionBar
                  comp={92}
                  color={"#02f9ae"}
                  pNum={1}
                  animateOnRender={true}
                />
                <ProgressionBar
                  comp={44}
                  color={"#1cdafe"}
                  pNum={2}
                  animateOnRender={true}
                />
                <ProgressionBar
                  comp={23}
                  color={"#60aaff"}
                  pNum={3}
                  animateOnRender={true}
                />
                <ProgressionBar
                  comp={87}
                  color={"#65ffea"}
                  pNum={4}
                  animateOnRender={true}
                />
                <ProgressionBar
                  comp={57}
                  color={"#6596ff"}
                  pNum={5}
                  animateOnRender={true}
                />
              </div>
            </div>
          </div>
          <div className="col-span-2 bg-white h-[400px] text-[#02f9d8] shadow-2xl">
            <NivoBar />
          </div>
          <div className="col-span-1 bg-white h-[400px] shadow-2xl">
            <News />
          </div>
        </div>
        <div className="w-full px-4">
          <div className="grid grid-cols-4 scrollbar gap-4 w-full h-[400px] overflow-auto my-4">
            <div className="col-span-4 h-fit bg-white">
              <div className="sticky top-0">
                <Intst first={"Description"} second={"type"} third={"Date"} />
              </div>
              <div className="flex flex-col">
                {documents &&
                  documents.map((el, index) => (
                    <RowF
                      description={el.name}
                      tot={el.fileType}
                      number={el.date}
                      key={index}
                    />
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
