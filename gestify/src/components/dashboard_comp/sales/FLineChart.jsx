import dataT from "../../../data/dataT";
import { RAreaChart } from "../graphs/AllGraphs";

export function FLineChart({ collection, earns }) {
  return (
    <>
      <div className="col-span-1 h-[100px] bg-white shadow-xl flex justify-center items-center w-full gap-5">
        <div className="w-fit font-semibold py-2 px-4 flex flex-col gap-2">
          <h2 className="w-[120px]">{collection}</h2>
          <h2 className="p-2 bg-gradient-to-b from-[#1cdafe] to-[#02f9ae] w-fit">
            {earns}€
          </h2>
        </div>
        <RAreaChart dataT={dataT} />
      </div>
    </>
  );
}
