import { RespLine } from "../graphs/AllGraphs";

export function ExpDep({ depName, budget, teams }) {
  return (
    <>
      <div className="grid grid-cols-5 p-4 gap-4 h-[300px]">
        <div className="bg-white col-span-1 flex items-center flex-col w-full shadow-2xl h-full justify-around p-5 font-semibold">
          <h2 className="text-[24px]">{depName}DEPNAME</h2>
          <h3 className="text-[20px] w-fit p-2 bg-gradient-to-b from-[#1cdafe] to-[#02f9ae]">
            {budget}2453€
          </h3>
        </div>
        <div className="col-span-3 w-full h-full grid grid-rows-3 items-center gap-5">
          <div className="shadow-2xl w-full h-full grid grid-cols-3 items-center bg-white text-center">
            <h2>Project 1:</h2>
            <h3>Team: {teams}</h3>
            <h3 className="font-semibold w-fit mx-auto p-2 bg-gradient-to-b from-[#1cdafe] to-[#02f9ae]">
              234/1000
            </h3>
          </div>
          <div className="shadow-2xl w-full h-full grid grid-cols-3 items-center bg-white text-center">
            <h2>Project 1:</h2>
            <h3>Team: {teams}</h3>
            <h3 className="font-semibold w-fit mx-auto p-2 bg-gradient-to-b from-[#1cdafe] to-[#02f9ae]">
              436/1000
            </h3>
          </div>
          <div className="shadow-2xl w-full h-full grid grid-cols-3 items-center bg-white text-center">
            <h2>Project 1:</h2>
            <h3>Team: {teams}</h3>
            <h3 className="font-semibold w-fit mx-auto p-2 bg-gradient-to-b from-[#1cdafe] to-[#02f9ae]">
              542/1000
            </h3>
          </div>
        </div>
        <div className="bg-white  col-span-1 w-full h-full shadow-2xl flex justify-center flex-col items-center overflow-visible">
          <h2 className="pb-1 font-semibold">CHART</h2>
          <div className="w-[75%] h-[75%]  relative z-20">
            <RespLine />
          </div>
        </div>
      </div>
    </>
  );
}
