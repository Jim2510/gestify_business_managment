import { useSpring, animated } from "@react-spring/web";
import { useState } from "react";
// import { Link } from "react-router-dom";

function Btn() {
  const buttons = [
    { title: "Home", path: "/homepage" },
    { title: "Dashboard", path: "/dashboard/tables" },
    { title: "Events", path: "/scheduler/calendar" },
    { title: "Storage", path: "" },
  ];

  return (
    <>
      {buttons.map((btn, index) => (
        <Button key={index}>
          {/* <Link to={btn.path}></Link> */}
          {btn.title}
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
      {/* <Link to=></Link> */}
      {btn}
      {children}
      <animated.div
        className="absolute bottom-0 left-1/2 transform -translate-x-1/2 bg-[#02f9ae] h-[2px]"
        style={sidebarSpring}
      ></animated.div>
    </button>
  );
}

export function BtnNav() {
  return (
    <>
      <div className="font-semibold px-4 md:flex hidden justify-center items-center">
        <input
          type="text"
          placeholder="Search..."
          className="w-[200px] min-w-100px rounded-xl px-5 border-2 focus:ring-green-500 focus:border-[#02f9ae] focus:ring-1 focus:outline-none border-gray-400 mr-2 h-8"
        />
        <Btn />
      </div>
    </>
  );
}
