import { useEffect, useState } from "react";
import { DisplayDate } from "./DisplayDate";
import { IntTable } from "./IntTable";
import { TBody } from "./TBody";
import kpi from "../../../data/kpi";

export function BaseTable() {
  const currentDate = new Date();
  const [dispValue, setDispValue] = useState(currentDate);
  const [data, setData] = useState(kpi);

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

  const currentData = data.find((item) => {
    const itemDate = new Date(item.date);
    return (
      itemDate.getDate() === dispValue.getDate() &&
      itemDate.getMonth() === dispValue.getMonth() &&
      itemDate.getFullYear() === dispValue.getFullYear()
    );
  });

  return (
    <>
      <div className="flex flex-col justify-center items-center w-full pb-10">
        <DisplayDate
          dispValue={dispValue.toLocaleDateString()}
          handleNext={handleNextDay}
          handlePrev={handlePrevDay}
        />
        <IntTable
          kp1={"ST"}
          kp2={"SC"}
          kp3={"PR"}
          kp4={"AT"}
          kp5={"UTP"}
          kp6={"BS"}
          kp7={"NC"}
        />
        <TBody
          kp1={currentData ? currentData.ST : "" + "%"}
          kp2={currentData ? currentData.SC : ""}
          kp3={currentData ? currentData.PR : ""}
          kp4={currentData ? currentData.AT : ""}
          kp5={currentData ? currentData.UTP : ""}
          kp6={currentData ? currentData.BS : ""}
          kp7={currentData ? currentData.NC : ""}
        />
      </div>
    </>
  );
}
