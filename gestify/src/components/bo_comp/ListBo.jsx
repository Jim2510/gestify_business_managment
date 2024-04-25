import { Intst } from "./Ints";
import fatt from "../../data/fatture";
import { RowF } from "./RowF";
import { BtnF } from "./BtnF";
import { FormF } from "./FormF";

const titleTable = ["Descrizione", "QT", "N°"];

export function ListBo() {
  const handleForm = () => {
    const form = document.getElementById("form");
    form.classList.toggle("hidden");
    form.classList.toggle("flex");
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
        {fatt &&
          fatt.map((el) => (
            <RowF
              description={el.description}
              tot={el.tot}
              number={el.number}
              key={el.id}
            />
          ))}
        <div className="sticky bottom-0 w-full h-[50px] bg-white border-t-2 border-gray-400">
          <BtnF handleForm={handleForm} />
        </div>
        <div id="form" className="absolute w-full h-full top-0 bg-white hidden">
          <div className="fixed ml-4 mt-4">
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
