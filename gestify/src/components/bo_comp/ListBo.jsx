import { Intst } from "./Ints";
import fatt from "../../data/fatture";
import { RowF } from "./RowF";

export function ListBo() {
  return (
    <>
      <div className="">
        <div className=" sticky top-0 bg-white ">
          <Intst />
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
      </div>
    </>
  );
}
