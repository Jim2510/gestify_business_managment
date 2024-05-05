import { useEffect, useState } from "react";
import { TitleSection } from "../standard_comp/TitleSection";
import { BtnBo } from "./BtnBo";
import { ListBo } from "./ListBo";
import { Customers } from "./Customers";
import { Docs } from "./Docs";
import { Time } from "../homepage/Time";

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
      <div className="h-full flex flex-col items-center pt-[70px]">
        <TitleSection titleName={"BACK OFFICE"} />
        <div className=" bg-transparent max-w-[85%] mt-4 w-full h-[500px] flex justify-center items-start">
          <div className="w-[30%] h-fit mr-4">
            <BtnBo arrBtn={arrBtn} handleBtnClick={handleBtnClick} />
          </div>
          <div className="w-[70%] bg-white h-full shadow-2xl overflow-auto scrollbar">
            {renderComponent()}
          </div>
        </div>
      </div>
    </>
  );
}
