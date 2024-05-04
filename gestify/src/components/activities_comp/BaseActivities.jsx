import { Time } from "../homepage/Time";
import { TitleSection } from "../standard_comp/TitleSection";
import { TableActivities } from "./TableActivities";

export function BaseActivities() {
    return (
        <>
         <div className="w-[100vw] h-[100vh] flex justify-center flex-col items-center bg-gradient-to-b from-[#1cdafe] to-[#02f9ae]">
            <TitleSection titleName={'ORDER HISTORY'} />
            <div className="w-[85%] h-[500px] mt-[20px] shadow-2xl rounded-xl flex justify-center">
               <TableActivities />
            </div>
           
         </div>
        </>
    )
}