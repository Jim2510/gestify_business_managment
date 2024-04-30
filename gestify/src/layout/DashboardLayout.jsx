import { Outlet } from "react-router-dom";
import { NavDash } from "../components/nav_dashboard/NavDash";
import { Navbar } from "../components/standard_comp/navbar/Navbar";
import { Sidebar } from "../components/standard_comp/sidebar/Sidebar";

export function DashboardLayout() {
  return (
    <>
      <div className="w-[100vw] h-full bg-gradient-to-b from-[#1cdafe] to-[#02f9ae]">
        <Sidebar />
        <Navbar />
        <NavDash />
        <Outlet />
      </div>
    </>
  );
}
