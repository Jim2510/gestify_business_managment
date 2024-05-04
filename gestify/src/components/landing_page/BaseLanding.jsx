import { NavbarLand } from "./NavbarLand";
import { SectionOne } from "./SectionOne";
import { SectionThree } from "./SectionThree";
import { SectionTwo } from "./SectionTwo";

export function BaseLanding() {
    return (
        <>
        <div className="flex flex-col bg-gradient-to-b from-[#1cdafe] to-[#02f9ae] ">
        <NavbarLand />
        <SectionOne />
        <SectionTwo />
        <SectionThree />
        </div>
        </>
    )
}