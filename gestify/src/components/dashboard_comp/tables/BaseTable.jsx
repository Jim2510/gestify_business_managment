import { useState } from "react";
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

  const handleDateChange = (event) => {
    const selectedDate = new Date(event.target.value);
    setDispValue(selectedDate);
  };

  const currentData = data.find((item) => {
    const itemDate = new Date(item.date);
    return (
      itemDate.getDate() === dispValue.getDate() &&
      itemDate.getMonth() === dispValue.getMonth() &&
      itemDate.getFullYear() === dispValue.getFullYear()
    );
  });

  const currentDateIndex = data.findIndex((item) => {
    const itemDate = new Date(item.date);
    return (
      itemDate.getDate() === dispValue.getDate() &&
      itemDate.getMonth() === dispValue.getMonth() &&
      itemDate.getFullYear() === dispValue.getFullYear()
    );
  });

  // Calcolo della differenza con il giorno precedente
  let diffPrev1 = "";
  if (currentDateIndex > 0) {
    const prevData = data[currentDateIndex - 1];
    const diffPrevValue = currentData.ST - prevData.ST; // Sostituisci ST con la tua proprietà KPI desiderata
    diffPrev1 = diffPrevValue >= 0 ? `+${diffPrevValue}` : `${diffPrevValue}`;
  }

  // Calcolo della differenza con il giorno successivo
  let diffNext1 = "";
  if (currentDateIndex < data.length - 1) {
    const nextData = data[currentDateIndex + 1];
    const diffNextValue = nextData.ST - currentData.ST; // Sostituisci ST con la tua proprietà KPI desiderata
    diffNext1 = diffNextValue >= 0 ? `+${diffNextValue}` : `${diffNextValue}`;
  }
  let diffPrev2 = "";
  if (currentDateIndex > 0) {
    const prevData = data[currentDateIndex - 1];
    const diffPrevValue = currentData.SC - prevData.SC; // Sostituisci ST con la tua proprietà KPI desiderata
    diffPrev2 = diffPrevValue >= 0 ? `+${diffPrevValue}` : `${diffPrevValue}`;
  }

  // Calcolo della differenza con il giorno successivo
  let diffNext2 = "";
  if (currentDateIndex < data.length - 1) {
    const nextData = data[currentDateIndex + 1];
    const diffNextValue = nextData.SC - currentData.SC; // Sostituisci ST con la tua proprietà KPI desiderata
    diffNext2 = diffNextValue >= 0 ? `+${diffNextValue}` : `${diffNextValue}`;
  }
  let diffPrev3 = "";
  if (currentDateIndex > 0) {
    const prevData = data[currentDateIndex - 1];
    const diffPrevValue = currentData.SC - prevData.SC; // Sostituisci ST con la tua proprietà KPI desiderata
    diffPrev3 = diffPrevValue >= 0 ? `+${diffPrevValue}` : `${diffPrevValue}`;
  }

  // Calcolo della differenza con il giorno successivo
  let diffNext3 = "";
  if (currentDateIndex < data.length - 1) {
    const nextData = data[currentDateIndex + 1];
    const diffNextValue = nextData.SC - currentData.SC; // Sostituisci ST con la tua proprietà KPI desiderata
    diffNext3 = diffNextValue >= 0 ? `+${diffNextValue}` : `${diffNextValue}`;
  }
  let diffPrev4 = "";
  if (currentDateIndex > 0) {
    const prevData = data[currentDateIndex - 1];
    const diffPrevValue = currentData.SC - prevData.SC; // Sostituisci ST con la tua proprietà KPI desiderata
    diffPrev4 = diffPrevValue >= 0 ? `+${diffPrevValue}` : `${diffPrevValue}`;
  }

  // Calcolo della differenza con il giorno successivo
  let diffNext4 = "";
  if (currentDateIndex < data.length - 1) {
    const nextData = data[currentDateIndex + 1];
    const diffNextValue = nextData.SC - currentData.SC; // Sostituisci ST con la tua proprietà KPI desiderata
    diffNext4 = diffNextValue >= 0 ? `+${diffNextValue}` : `${diffNextValue}`;
  }

  let diffPrev5 = "";
  if (currentDateIndex > 0) {
    const prevData = data[currentDateIndex - 1];
    const diffPrevValue = currentData.SC - prevData.SC; // Sostituisci ST con la tua proprietà KPI desiderata
    diffPrev5 = diffPrevValue >= 0 ? `+${diffPrevValue}` : `${diffPrevValue}`;
  }

  // Calcolo della differenza con il giorno successivo
  let diffNext5 = "";
  if (currentDateIndex < data.length - 1) {
    const nextData = data[currentDateIndex + 1];
    const diffNextValue = nextData.SC - currentData.SC; // Sostituisci ST con la tua proprietà KPI desiderata
    diffNext5 = diffNextValue >= 0 ? `+${diffNextValue}` : `${diffNextValue}`;
  }

  let diffPrev6 = "";
  if (currentDateIndex > 0) {
    const prevData = data[currentDateIndex - 1];
    const diffPrevValue = currentData.SC - prevData.SC; // Sostituisci ST con la tua proprietà KPI desiderata
    diffPrev6 = diffPrevValue >= 0 ? `+${diffPrevValue}` : `${diffPrevValue}`;
  }

  // Calcolo della differenza con il giorno successivo
  let diffNext6 = "";
  if (currentDateIndex < data.length - 1) {
    const nextData = data[currentDateIndex + 1];
    const diffNextValue = nextData.SC - currentData.SC; // Sostituisci ST con la tua proprietà KPI desiderata
    diffNext6 = diffNextValue >= 0 ? `+${diffNextValue}` : `${diffNextValue}`;
  }

  let diffPrev7 = "";
  if (currentDateIndex > 0) {
    const prevData = data[currentDateIndex - 1];
    const diffPrevValue = currentData.SC - prevData.SC; // Sostituisci ST con la tua proprietà KPI desiderata
    diffPrev7 = diffPrevValue >= 0 ? `+${diffPrevValue}` : `${diffPrevValue}`;
  }

  // Calcolo della differenza con il giorno successivo
  let diffNext7 = "";
  if (currentDateIndex < data.length - 1) {
    const nextData = data[currentDateIndex + 1];
    const diffNextValue = nextData.SC - currentData.SC; // Sostituisci ST con la tua proprietà KPI desiderata
    diffNext7 = diffNextValue >= 0 ? `+${diffNextValue}` : `${diffNextValue}`;
  }

  let diffPrev8 = "";
  if (currentDateIndex > 0) {
    const prevData = data[currentDateIndex - 1];
    const diffPrevValue = currentData.SC - prevData.SC; // Sostituisci ST con la tua proprietà KPI desiderata
    diffPrev8 = diffPrevValue >= 0 ? `+${diffPrevValue}` : `${diffPrevValue}`;
  }

  // Calcolo della differenza con il giorno successivo
  let diffNext8 = "";
  if (currentDateIndex < data.length - 1) {
    const nextData = data[currentDateIndex + 1];
    const diffNextValue = nextData.SC - currentData.SC; // Sostituisci ST con la tua proprietà KPI desiderata
    diffNext8 = diffNextValue >= 0 ? `+${diffNextValue}` : `${diffNextValue}`;
  }

  let diffPrev9 = "";
  if (currentDateIndex > 0) {
    const prevData = data[currentDateIndex - 1];
    const diffPrevValue = currentData.SC - prevData.SC; // Sostituisci ST con la tua proprietà KPI desiderata
    diffPrev9 = diffPrevValue >= 0 ? `+${diffPrevValue}` : `${diffPrevValue}`;
  }

  // Calcolo della differenza con il giorno successivo
  let diffNext9 = "";
  if (currentDateIndex < data.length - 1) {
    const nextData = data[currentDateIndex + 1];
    const diffNextValue = nextData.SC - currentData.SC; // Sostituisci ST con la tua proprietà KPI desiderata
    diffNext9 = diffNextValue >= 0 ? `+${diffNextValue}` : `${diffNextValue}`;
  }

  return (
    <>
      <div className="flex flex-col justify-center items-center w-full pb-10">
        <div className="group relative">
          <DisplayDate
            dispValue={dispValue.toLocaleDateString()}
            handleNext={handleNextDay}
            handlePrev={handlePrevDay}
          />
          <div className="group-hover:flex absolute hidden left-2">
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
          kp1={currentData ? currentData.ST : ""}
          kp2={currentData ? currentData.SC : ""}
          kp3={currentData ? currentData.PR : ""}
          kp4={currentData ? currentData.AT : ""}
          kp5={currentData ? currentData.UTP : ""}
          kp6={currentData ? currentData.BS : ""}
          kp7={currentData ? currentData.NC : ""}
          kp8={currentData ? currentData.CR : ""}
          kp9={currentData ? currentData.GMROI : ""}
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
