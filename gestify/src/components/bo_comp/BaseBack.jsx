import { TitleSection } from "../standard_comp/TitleSection";
import { BtnBo } from "./BtnBo";
import { BtnF } from "./BtnF";
import { ListBo } from "./ListBo";

export function BaseBack() {
  return (
    <>
      <div className="mt-[100px] flex flex-col items-center">
        <TitleSection titleName={"BACK OFFICE"} />
        <div className="max-w-[85%] w-full shadow-2xl h-[500px] flex justify-center items-center rounded-2xl">
          <div className="w-[50%] h-full rounded-l-2xl">
            <BtnBo />
          </div>
          <div className="w-[50%] h-full rounded-2xl shadow-2xl overflow-auto">
            <ListBo />
            <div className="sticky bottom-0 w-full h-[50px] bg-white border-t-2 border-gray-400">
              <BtnF />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
