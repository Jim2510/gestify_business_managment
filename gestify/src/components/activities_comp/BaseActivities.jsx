import { TitleSection } from "../standard_comp/TitleSection";
import { TableActivities } from "./TableActivities";

export function BaseActivities() {
    return (
        <>
         <div className="w-[100vw] flex justify-center flex-col items-center ">
            <TitleSection titleName={'ORDER HISTORY'} />
            <div className="w-[85%] h-[500px] mt-[20px] shadow-2xl rounded-xl flex justify-center">
               <TableActivities />
            </div>
           
         </div>
        </>
    )
}