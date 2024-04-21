import { InfoButton } from "./InfoButton";
import { LabelUser } from "./LabelUser";
import { MenuSidebar } from "./MenuSidebar";
import { useSpring, animated } from "@react-spring/web";
import { useState } from "react";

export function Sidebar() {
  const [isHidden, setIsHidden] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleHidden = () => {
    setIsHidden(!isHidden);
  };

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  const sidebarSpring = useSpring({
    transform: isHidden ? "translateX(-0%)" : "translateX(-100%)",
  });

  const btnSidebar = useSpring({
    transform: isOpen
      ? "translateX(-100%) rotate(180deg)"
      : "translateX(0%) rotate(0deg)",
  });
  return (
    <>
      <animated.div
        style={sidebarSpring}
        className="min-w-[330px] md:w-[25%] w-full h-full shadow-2xl sidebar fixed flex flex-col dark:bg-slate-800 bg-white transition-transform duration-500 ease-in-out transform translate-x-0 z-[250]"
        id="sidebar"
      >
        <LabelUser />
        <InfoButton />
        <div className="border-b"></div>
        <MenuSidebar />
        <animated.div
          style={btnSidebar}
          className="dark:bg-slate-800 dark:text-white transition-colors ease-in delay-200 hover:text-[#02f9ae] w-[30px] border-black fixed translate-y-1/2 -right-7 top-[50%] flex justify-center items-center bg-white p-2 rounded-r-2xl shadow-2xl"
        >
          <button
            onClick={() => {
              handleHidden();
              handleOpen();
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-caret-right-fill"
              viewBox="0 0 16 16"
            >
              <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
            </svg>
          </button>
        </animated.div>
      </animated.div>
    </>
  );
}
