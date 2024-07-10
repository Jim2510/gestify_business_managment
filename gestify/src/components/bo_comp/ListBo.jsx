import { Intst } from "./Ints";
import { RowF } from "./RowF";
import { BtnF } from "./BtnF";
import { FormF } from "./FormF";
import { useFetchInvoices } from "../../hooks/useFetchInvoices";
import { LoadingCircle } from "../../components/storage_comp/LoadingCircle";
import { useState } from "react";

const titleTable = ["Descrizione", "QT", "N°"];

export function ListBo() {
  const [selectedInvoices, setSelectedInvoices] = useState([]);
  const { data, isLoading } = useFetchInvoices();
  data.forEach((invoice) => {
    invoice.isSelected = false;
  });

  const handleForm = () => {
    const form = document.getElementById("form");
    form.classList.toggle("hidden");
    form.classList.toggle("flex");
  };
  console.log(isLoading);

  const handleCheckboxChange = (index) => {
    const updatedData = [...data];
    updatedData[index].isSelected = !updatedData[index].isSelected;
    setSelectedInvoices(
      updatedData.filter((invoice) => invoice.isSelected === true)
    );
  };

  const handleRemove = async () => {
    try {
      const promises = selectedInvoices.map((invoice) =>
        fetch(`http://localhost:3000/api/delete/${invoice.id}`, {
          method: "DELETE",
        })
      );
      await Promise.all(promises);
      // Effettua un refresh dei dati dopo la rimozione
      // Aggiorna lo stato o chiama nuovamente l'hook per caricare i dati aggiornati
    } catch (error) {
      console.error("Error removing invoices:", error);
    }
  };

  return (
    <>
      <div className="relative">
        <div className=" sticky top-0 bg-white ">
          <Intst
            first={titleTable[0]}
            second={titleTable[1]}
            third={titleTable[2]}
          />
        </div>
        {data &&
          data.map((el, index) => (
            <RowF
              description={el.description}
              tot={el.tot}
              number={el.number}
              isSelected={el.isSelected}
              onCheckboxChange={() => handleCheckboxChange(index)}
              key={el.id}
            />
          ))}
        {isLoading && (
          <div className="w-full h-full flex justify-center items-center">
            <LoadingCircle />
          </div>
        )}
        <div className="sticky bottom-0 w-full h-[50px] bg-white border-t-2 border-gray-400">
          <BtnF handleAdd={handleForm} />
        </div>
        <div id="form" className="absolute w-full h-full top-0 bg-white hidden">
          <div className="absolute left-4 top-4">
            <button onClick={handleForm}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fillRule="currentColor"
                className="bi bi-x-lg"
                viewBox="0 0 16 16"
              >
                <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z" />
              </svg>
            </button>
          </div>
          <FormF />
        </div>
      </div>
    </>
  );
}
