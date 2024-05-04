

import { Time } from "../components/homepage/Time";
import { Navbar } from "../components/standard_comp/navbar/Navbar";
import { Sidebar } from "../components/standard_comp/sidebar/Sidebar";
import { Activities } from "../pages/Activities";

export function ActivitiesLayout() {
    return (
        <>
        <div className="w-full h-full bg-gradient-to-b from-[#1cdafe] to-[#02f9ae]">
           <Time/>
           <Sidebar />
           <Navbar />
           <Activities />
           </div>
        </>
    )
}