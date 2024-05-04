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
