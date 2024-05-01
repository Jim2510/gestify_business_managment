import { Sidebar } from "../components/standard_comp/sidebar/Sidebar";
import { Navbar } from "../components/standard_comp/navbar/Navbar";
import { Homepage } from "../components/homepage/Homepage";

export function Home({ children }) {
  return (
    <>
      <div className="w-full h-full bg-gradient-to-b from-[#1cdafe] to-[#02f9ae]">
        <Sidebar />
        <Navbar />
        <Homepage />
      </div>
    </>
  );
}
