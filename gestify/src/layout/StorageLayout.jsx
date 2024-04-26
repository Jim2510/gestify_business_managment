import { NavDash } from "../components/nav_dashboard/NavDash";
import { Navbar } from "../components/standard_comp/navbar/Navbar";
import { Sidebar } from "../components/standard_comp/sidebar/Sidebar";
import { Storage } from "../pages/Storage";

export function StorageLayout() {
    return (
        <>
            <div className="w-full h-full">
                <Sidebar />
                <Navbar />
                <NavDash />
                <Storage />
            </div>
        </>
    );
}
