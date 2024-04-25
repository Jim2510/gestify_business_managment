import { RowF } from "./RowF";
import dataFiles from "../../data/documents";
import { Intst } from "./Ints";

const docTable = ["Name", "File", "Date"];

export function Docs() {
  return (
    <>
      <div className="relative">
        <div className=" sticky top-0 bg-white ">
          <Intst first={docTable[0]} second={docTable[1]} third={docTable[2]} />
        </div>
        {dataFiles &&
          dataFiles.map((el) => (
            <RowF
              description={el.name}
              tot={el.fileType}
              number={el.date}
              key={el.id}
            />
          ))}
      </div>
    </>
  );
}
