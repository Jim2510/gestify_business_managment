import { NavbarLand } from "./NavbarLand";

import { SectionThree } from "./SectionThree";

import { Footer } from "./Footer";
import Cards from "./Cards";
import Hero from "./Hero";
import Analytics from "./Analytics";

export function BaseLanding() {
    return (
        <>
        <div className="flex flex-col bg-white">
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