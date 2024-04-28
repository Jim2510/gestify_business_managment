import { useEffect, useState } from "react";
import { TitleSection } from "../standard_comp/TitleSection";
import { BtnBo } from "./BtnBo";
import { ListBo } from "./ListBo";
import { Customers } from "./Customers";
import { Docs } from "./Docs";

const arrBtn = ["Clienti", "Documenti", "Fatture"];

export function BaseBack() {
  const [data, setData] = useState([]);
  const [selBtn, setSelBtn] = useState("Fatture");

  const handleBtnClick = (btnName) => {
    setSelBtn(btnName);
  };

  const renderComponent = () => {
    switch (selBtn) {
      case "Clienti":
        return <Customers />;
      case "Documenti":
        return <Docs />;
      default:
        return <ListBo />;
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("http://localhost:3000/api/products");
        if (res.ok) {
          const datag = await res.json();
          setData(datag);
          console.log(datag);
        }
      } catch (error) {
        console.error("Errore nella richiesta:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <div className="mt-[100px] flex flex-col items-center">
        <TitleSection titleName={"BACK OFFICE"} />
        <div className="max-w-[85%] w-full shadow-2xl h-[500px] flex justify-center items-center rounded-2xl">
          <div className="w-[50%] h-full rounded-l-2xl">
            <BtnBo arrBtn={arrBtn} handleBtnClick={handleBtnClick} />
          </div>
          <div className="w-[50%] h-full rounded-2xl shadow-2xl overflow-auto">
            {renderComponent()}
          </div>
        </div>
      </div>
    </>
  );
}
