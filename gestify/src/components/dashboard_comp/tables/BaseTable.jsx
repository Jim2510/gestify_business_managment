import { useState } from "react";
import { DisplayDate } from "./DisplayDate";
import { IntTable } from "./IntTable";
import { TBody } from "./TBody";
import kpi from "../../../data/kpi";
import { useKpi } from "../../../hooks/useKpi";

export function BaseTable() {
  const {
    diffNext1,
    diffNext2,
    diffNext3,
    diffNext4,
    diffNext5,
    diffNext6,
    diffNext7,
    diffNext8,
    diffNext9,
    diffPrev1,
    diffPrev2,
    diffPrev3,
    diffPrev4,
    diffPrev5,
    diffPrev6,
    diffPrev7,
    diffPrev8,
    diffPrev9,
    dispValue,
    setDispValue,
    currentData,
  } = useKpi();

  const handleNextDay = () => {
    const nextDay = new Date(dispValue);
    nextDay.setDate(nextDay.getDate() + 1);
    setDispValue(nextDay);
  };
  const handlePrevDay = () => {
    const nextDay = new Date(dispValue);
    nextDay.setDate(nextDay.getDate() - 1);
    setDispValue(nextDay);
  };

  const handleDateChange = (event) => {
    const selectedDate = new Date(event.target.value);
    setDispValue(selectedDate);
  };

  return (
    <>
      <div className="flex flex-col justify-center items-center w-full pb-10">
        <div className="group relative mb-6">
          <DisplayDate
            dispValue={dispValue.toLocaleDateString()}
            handleNext={handleNextDay}
            handlePrev={handlePrevDay}
          />
          <div className="group-hover:flex absolute hidden left-[8px] top-20">
            <input
              type="date"
              value={dispValue.toISOString().split("T")[0]}
              onChange={handleDateChange}
            />
          </div>
        </div>
        <IntTable
          kp1={"ST"}
          kp2={"SC"}
          kp3={"PR"}
          kp4={"AT"}
          kp5={"UTP"}
          kp6={"BS"}
          kp7={"NC"}
          kp8={"CR"}
          kp9={"GMROI"}
        />
        <TBody
          kp1={currentData?.ST || ""}
          kp2={currentData?.SC || ""}
          kp3={currentData?.PR || ""}
          kp4={currentData?.AT || ""}
          kp5={currentData?.UTP || ""}
          kp6={currentData?.BS || ""}
          kp7={currentData?.NC || ""}
          kp8={currentData?.CR || ""}
          kp9={currentData?.GMROI || ""}
          difp1={diffPrev1}
          difs1={diffNext1}
          difp2={diffPrev2}
          difs2={diffNext2}
          difp3={diffPrev3}
          difs3={diffNext3}
          difp4={diffPrev4}
          difs4={diffNext4}
          difp5={diffPrev5}
          difs5={diffNext5}
          difp6={diffPrev6}
          difs6={diffNext6}
          difp7={diffPrev7}
          difs7={diffNext7}
          difp8={diffPrev8}
          difs8={diffNext8}
          difp9={diffPrev9}
          difs9={diffNext9}
        />
      </div>
    </>
  );
}
