import { useSpring, animated } from "@react-spring/web";
import { useState } from "react";
import { Link } from "react-router-dom";

function Btn() {
  const buttons = [
    { title: "HOME", path: "/homepage" },
    { title: "DASHBOARD", path: "/dashboard/sales" },
    { title: "EVENTS", path: "/scheduler/calendar" },
    { title: "BACKOFFICE", path: "/backoffice" },
    { title: "STORAGE", path: "/storage" },
    { title: "ORDERS", path: "/orderhistory" },
  ];

  return (
    <>
      {buttons.map((btn, index) => (
        <Button key={index}>
          <Link to={btn.path}>{btn.title}</Link>
        </Button>
      ))}
    </>
  );
}

function Button({ children, btn }) {
  const [onHover, setOnHover] = useState(false);
  const sidebarSpring = useSpring({
    width: onHover ? "70%" : "0%",
    transformOrigin: "center",
  });

  const handleMouseEnter = () => {
    setOnHover(true);
  };

  const handleMouseLeave = () => {
    setOnHover(false);
  };

  return (
    <button
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="text-[14px] relative flex flex-col justify-center items-center h-full rounded-xl dark:hover:shadow-gray-100 px-5 py-1 text-black dark:text-white"
    >
      <Link to={btn}>{children}</Link>
      <animated.div
        className="absolute bottom-0 left-1/2 transform -translate-x-1/2 bg-[#89f9ea] h-[4px]"
        style={sidebarSpring}
      ></animated.div>
    </button>
  );
}

export function BtnNav() {
  return (
    <>
      <div className="font-semibold px-4 md:flex hidden justify-center items-center">
        <Btn />
      </div>
    </>
  );
}
