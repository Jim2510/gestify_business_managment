import * as React from "react";

import { CompactTable } from "@table-library/react-table-library/compact";
import { useTheme } from "@table-library/react-table-library/theme";
import { getTheme } from "@table-library/react-table-library/baseline";
import { TitleSection } from "../../standard_comp/TitleSection";
import { BtnSales } from "../sales/BtnSales";
import { ExpDep } from "../sales/ExpDev";
import { BtnExp } from "../sales/BtnExp";

export function Ex() {
  let data = {
    nodes: [
      {
        name: "Task 1",
        deadline: new Date(),
        type: "Type 1",
        isComplete: true,
        nodes: [{}, {}, {}],
      },
      {
        name: "Task 2",
        deadline: new Date(),
        type: "Type 2",
        isComplete: false,
        nodes: [],
      },
    ],
  };

  return (
    <>
      <div className="w-full mt-[100px] px-5 flex flex-col justify-center h-full items-center">
        <div className="grid grid-cols-5 justify-center items-center gap-4">
          <div className="col-span-1">
            <BtnSales btnName={"SALES"} link={"/dashboard/sales"} />
          </div>
          <div className=" col-span-3">
            <TitleSection titleName={"DASHBOARD EXPENDITURES"} />
          </div>
          <div className="col-span-1">
            <BtnExp btnName={"TABLES"} link={"/dashboard/tables"} />
          </div>
        </div>
        <div className="w-full grid grid-cols-1 grid-rows-3 gap-4 p-2 justify-center items-center">
          <ExpDep />
          <ExpDep />
          <ExpDep />
        </div>
      </div>
    </>
  );
}
