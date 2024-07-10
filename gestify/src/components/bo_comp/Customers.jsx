import { Intst } from "./Ints";
import clients from "../../data/clienti";
import { RowF } from "./RowF";

const clientTable = ["Name", "Status", "Date"];

export function Customers() {
  return (
    <>
      <div className="relative">
        <div className=" sticky top-0 bg-white ">
          <Intst
            first={clientTable[0]}
            second={clientTable[1]}
            third={clientTable[2]}
          />
        </div>
        {clients &&
          clients.map((el) => (
            <RowF
              description={el.cliente}
              tot={el.stato}
              number={el.data_acquisizione}
              key={el.id}
            />
          ))}
      </div>
    </>
  );
}
