import { useState } from "react";
import { TitleSection } from "../standard_comp/TitleSection";
import { BtnBo } from "./BtnBo";
import { BtnF } from "./BtnF";
import { ListBo } from "./ListBo";

const arrBtn = ["Clienti", "Documenti", "Fatture"];

export function BaseBack() {
  const [selBtn, setSelBtn] = useState("Fatture");

  const handleBtnClick = (btnName) => {
    setSelectedBtn(btnName);
  };

  const renderComponent = () => {
    switch (selBtn) {
      case "Clienti":
        return;
      case "Documenti":
        return;
      default:
        return <ListBo />;
    }
  };

  return (
    <>
      <div className="mt-[100px] flex flex-col items-center">
        <TitleSection titleName={"BACK OFFICE"} />
        <div className="max-w-[85%] w-full shadow-2xl h-[500px] flex justify-center items-center rounded-2xl">
          <div className="w-[50%] h-full rounded-l-2xl">
            <BtnBo arrBtn={arrBtn} />
          </div>
          <div className="w-[50%] h-full rounded-2xl shadow-2xl overflow-auto">
            <ListBo />
          </div>
        </div>
      </div>
    </>
  );
}
