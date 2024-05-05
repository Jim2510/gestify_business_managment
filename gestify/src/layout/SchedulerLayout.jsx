import { Navbar } from "../components/standard_comp/navbar/Navbar";
import { Sidebar } from "../components/standard_comp/sidebar/Sidebar";
import { Scheduler } from "../pages/Scheduler";


export function SchedulerLayout() {
    return (
        <>
            <div className="w-full h-full">
                <Sidebar />
                <Navbar />
                <Scheduler />
            </div>
        </>
    );
}
