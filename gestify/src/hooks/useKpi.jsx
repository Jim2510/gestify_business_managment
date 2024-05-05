import { useState } from "react";
import kpi from "../data/kpi";

export function useKpi() {
  const currentDate = new Date();
  const [dispValue, setDispValue] = useState(currentDate);
  const [data, setData] = useState(kpi);

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

  // CALCOLO ST
  let diffPrev1 = "";
  if (currentDateIndex > 0) {
    const prevData = data[currentDateIndex - 1];
    const diffPrevValue = currentData.ST - prevData.ST; // Sostituisci ST con la tua proprietà KPI desiderata
    diffPrev1 = diffPrevValue >= 0 ? `+${diffPrevValue}` : `${diffPrevValue}`;
  }

  let diffNext1 = "";
  if (currentDateIndex < data.length - 1) {
    const nextData = data[currentDateIndex + 1];
    const diffNextValue = nextData.ST - currentData.ST; // Sostituisci ST con la tua proprietà KPI desiderata
    diffNext1 = diffNextValue >= 0 ? `+${diffNextValue}` : `${diffNextValue}`;
  }

  // CALCOLO SC
  let diffPrev2 = "";
  if (currentDateIndex > 0) {
    const prevData = data[currentDateIndex - 1];
    const diffPrevValue = currentData.SC - prevData.SC; // Sostituisci ST con la tua proprietà KPI desiderata
    diffPrev2 = diffPrevValue >= 0 ? `+${diffPrevValue}` : `${diffPrevValue}`;
  }

  let diffNext2 = "";
  if (currentDateIndex < data.length - 1) {
    const nextData = data[currentDateIndex + 1];
    const diffNextValue = nextData.SC - currentData.SC; // Sostituisci ST con la tua proprietà KPI desiderata
    diffNext2 = diffNextValue >= 0 ? `+${diffNextValue}` : `${diffNextValue}`;
  }

  // CALCOLO PR
  let diffPrev3 = "";
  if (currentDateIndex > 0) {
    const prevData = data[currentDateIndex - 1];
    const diffPrevValue = currentData.PR - prevData.PR; // Sostituisci ST con la tua proprietà KPI desiderata
    diffPrev3 = diffPrevValue >= 0 ? `+${diffPrevValue}` : `${diffPrevValue}`;
  }

  let diffNext3 = "";
  if (currentDateIndex < data.length - 1) {
    const nextData = data[currentDateIndex + 1];
    const diffNextValue = nextData.PR - currentData.PR; // Sostituisci ST con la tua proprietà KPI desiderata
    diffNext3 = diffNextValue >= 0 ? `+${diffNextValue}` : `${diffNextValue}`;
  }

  // CALCOLO AT
  let diffPrev4 = "";
  if (currentDateIndex > 0) {
    const prevData = data[currentDateIndex - 1];
    const diffPrevValue = currentData.AT - prevData.AT; // Sostituisci ST con la tua proprietà KPI desiderata
    diffPrev4 = diffPrevValue >= 0 ? `+${diffPrevValue}` : `${diffPrevValue}`;
  }

  let diffNext4 = "";
  if (currentDateIndex < data.length - 1) {
    const nextData = data[currentDateIndex + 1];
    const diffNextValue = nextData.AT - currentData.AT; // Sostituisci ST con la tua proprietà KPI desiderata
    diffNext4 = diffNextValue >= 0 ? `+${diffNextValue}` : `${diffNextValue}`;
  }

  // CALCOLO UTP
  let diffPrev5 = "";
  if (currentDateIndex > 0) {
    const prevData = data[currentDateIndex - 1];
    const diffPrevValue = currentData.UTP - prevData.UTP;
    diffPrev5 = diffPrevValue >= 0 ? `+${diffPrevValue}` : `${diffPrevValue}`;
  }

  let diffNext5 = "";
  if (currentDateIndex < data.length - 1) {
    const nextData = data[currentDateIndex + 1];
    const diffNextValue = nextData.UTP - currentData.UTP;
    diffNext5 = diffNextValue >= 0 ? `+${diffNextValue}` : `${diffNextValue}`;
  }

  // CALCOLO BS
  let diffPrev6 = "";
  if (currentDateIndex > 0) {
    const prevData = data[currentDateIndex - 1];
    const diffPrevValue = currentData.BS - prevData.BS;
    diffPrev6 = diffPrevValue >= 0 ? `+${diffPrevValue}` : `${diffPrevValue}`;
  }

  let diffNext6 = "";
  if (currentDateIndex < data.length - 1) {
    const nextData = data[currentDateIndex + 1];
    const diffNextValue = nextData.BS - currentData.BS;
    diffNext6 = diffNextValue >= 0 ? `+${diffNextValue}` : `${diffNextValue}`;
  }

  // CALCOLO NC
  let diffPrev7 = "";
  if (currentDateIndex > 0) {
    const prevData = data[currentDateIndex - 1];
    const diffPrevValue = currentData.NC - prevData.NC;
    diffPrev7 = diffPrevValue >= 0 ? `+${diffPrevValue}` : `${diffPrevValue}`;
  }

  let diffNext7 = "";
  if (currentDateIndex < data.length - 1) {
    const nextData = data[currentDateIndex + 1];
    const diffNextValue = nextData.NC - currentData.NC;
    diffNext7 = diffNextValue >= 0 ? `+${diffNextValue}` : `${diffNextValue}`;
  }

  // CALCOLO CR
  let diffPrev8 = "";
  if (currentDateIndex > 0) {
    const prevData = data[currentDateIndex - 1];
    const diffPrevValue = currentData.CR - prevData.CR;
    diffPrev8 = diffPrevValue >= 0 ? `+${diffPrevValue}` : `${diffPrevValue}`;
  }

  let diffNext8 = "";
  if (currentDateIndex < data.length - 1) {
    const nextData = data[currentDateIndex + 1];
    const diffNextValue = nextData.CR - currentData.CR;
    diffNext8 = diffNextValue >= 0 ? `+${diffNextValue}` : `${diffNextValue}`;
  }

  // CALCOLO GMROI
  let diffPrev9 = "";
  if (currentDateIndex > 0) {
    const prevData = data[currentDateIndex - 1];
    const diffPrevValue = currentData.GMROI - prevData.GMROI;
    diffPrev9 = diffPrevValue >= 0 ? `+${diffPrevValue}` : `${diffPrevValue}`;
  }

  let diffNext9 = "";
  if (currentDateIndex < data.length - 1) {
    const nextData = data[currentDateIndex + 1];
    const diffNextValue = nextData.GMROI - currentData.GMROI;
    diffNext9 = diffNextValue >= 0 ? `+${diffNextValue}` : `${diffNextValue}`;
  }

  return {
    data,
    setData,
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
    currentDateIndex,
    dispValue,
    setDispValue,
    currentDate,
    currentData,
  };
}
