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
      <div className="mt-[80px] h-full flex flex-col items-center ">
        <TitleSection titleName={"BACK OFFICE"} />
        <div className=" bg-transparent max-w-[85%] w-full h-[500px] flex justify-center items-start">
          <div className="w-[30%] bg-white h-fit shadow-2xl mr-4">
            <BtnBo arrBtn={arrBtn} handleBtnClick={handleBtnClick} />
          </div>
          <div className="w-[70%] bg-white h-full shadow-2xl overflow-auto">
            {renderComponent()}
          </div>
        </div>
      </div>
    </>
  );
}
