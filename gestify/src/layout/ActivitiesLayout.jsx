

import { Navbar } from "../components/standard_comp/navbar/Navbar";
import { Sidebar } from "../components/standard_comp/sidebar/Sidebar";
import { Activities } from "../pages/Activities";

export function ActivitiesLayout() {
    return (
        <>
           <Sidebar />
           <Navbar />
           <Activities />
        </>
    )
}