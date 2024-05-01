import { NavbarLand } from "./NavbarLand";
import { SectionOne } from "./SectionOne";
import { SectionThree } from "./SectionThree";
import { SectionTwo } from "./SectionTwo";

export function BaseLanding() {
    return (
        <>
        <div className="flex flex-col">
        <NavbarLand />
        <SectionOne />
        <SectionTwo />
        <SectionThree />
        </div>
        </>
    )
}