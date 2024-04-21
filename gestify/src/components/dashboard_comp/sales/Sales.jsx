import {
  MyResponsiveLine,
  MyResponsiveMarimekko,
  MyResponsivePie,
  MyResponsivePie2,
} from "../graphs/AllGraphs";
import { TableSales } from "../graphs/TableSales";

export function Sales() {
  return (
    <>
      <div className="flex items-center justify-center w-full flex-col">
        <h2 className="mt-[150px] text-center drop-shadow-lg shadow-black font-bold text-[40px] animate__backInDown animate__animated py-5">
          DASHBOARD SALES
        </h2>
        <h2 className=" text-center font-bold text-[30px]">LABELS SALES</h2>
        <div className="mt-[50px] w-[80%] h-[440px] overflow-y-hidden overflow-x-auto m-auto shadow-xl rounded-xl">
          <div className="w-fit flex justify-center items-center">
            <div className="">
              <h2 className=" text-center font-bold">PIE 1</h2>
              <div className="h-[390px] w-[400px] shadow-xl rounded-xl mx-10">
                <MyResponsivePie />
              </div>
            </div>
            <div className="">
              <h2 className=" text-center font-bold">PIE 2</h2>
              <div className="h-[390px] w-[500px] shadow-xl rounded-xl mx-10">
                <MyResponsivePie2 />
              </div>
            </div>
            <div className="">
              <h2 className=" text-center font-bold">LINE</h2>
              <div className="h-[390px] w-[600px] shadow-xl rounded-xl mx-10">
                <MyResponsiveMarimekko />
              </div>
            </div>
          </div>
        </div>
        <div className="w-[80%] h-[500px] mt-[100px] mb-[100px] flex justify-center items-center flex-col">
          <h2 className=" text-center font-bold text-[30px] mb-5">
            TABLE SALES
          </h2>
          <TableSales />
        </div>
        <div className="w-[80%] h-[500px] flex justify-center items-center flex-col">
          <h2 className=" text-center font-bold text-[30px]">SECTORS SALES</h2>
          <MyResponsiveLine />
        </div>
      </div>
    </>
  );
}
