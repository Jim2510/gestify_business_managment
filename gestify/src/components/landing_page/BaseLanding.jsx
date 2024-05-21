import { Footer } from "./Footer";
import Cards from "./Cards";
import Hero from "./Hero";
import Analytics from "./Analytics";
import SectionThree from "./SectionThree";
import { NavbarLand } from "./NavbarLand";

export function BaseLanding() {
    return (
        <>
        <div className="flex flex-col bg-white w-full ">
        <NavbarLand />
        <Hero />
        <Analytics />
        <SectionThree />
        <Cards />
        <Footer />
        </div>
        </>
    )
}