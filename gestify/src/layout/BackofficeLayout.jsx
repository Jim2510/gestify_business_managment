import { NavDash } from "../components/nav_dashboard/NavDash";
import { Navbar } from "../components/standard_comp/navbar/Navbar";
import { Sidebar } from "../components/standard_comp/sidebar/Sidebar";
import { BackO } from "../pages/BackO";

export function BackofficeLayout() {
  return (
    <>
      <div className="w-full h-full bg-gradient-to-b from-[#1cdafe] to-[#02f9ae]">
        <Sidebar />
        <Navbar />
        <BackO />
      </div>
    </>
  );
}
