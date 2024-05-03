import { TitleSection } from "../../standard_comp/TitleSection";
import { BtnExp } from "../sales/BtnExp";
import { BtnSales } from "../sales/BtnSales";
import { BaseTable } from "./BaseTable";

export function Tables() {
  return (
    <>
      <div className="w-full flex flex-col mt-[100px] justify-center ">
        <div className="grid grid-cols-4 justify-center items-center gap-4">
          <div className="col-span-1">
            <BtnSales btnName={"EXPENDITURE"} link={"/dashboard/expenditure"} />
          </div>
          <div className=" col-span-2">
            <TitleSection titleName={"DASHBOARD TABLES"} />
          </div>
          <BtnExp btnName={"SALES"} link={"/dashboard/sales"} />
        </div>
        <BaseTable />
      </div>
    </>
  );
}
