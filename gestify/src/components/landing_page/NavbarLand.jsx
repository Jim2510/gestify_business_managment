import { useSpring, animated } from "@react-spring/web";
import logo from "../../assets/gestify__1_-removebg-preview_1.png";
import { useState } from "react";

export function NavbarLand() {
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

  const btn = ['Home', 'Products', 'Video', 'Info']

  return (
    <>
      <nav className="w-full h-[60px] shadow-2xl flex justify-between sticky top-0 bg-white font-semibold z-20">
        <div className="w-[200px] h-[60px]">
          <img className="w-[200px] h-[190px] mt-[-65px]" src={logo} alt="" />
        </div>
        <div className="flex justify-center gap-12 px-12">
          { btn && btn.map(title => <button
            className="text-[16px] relative flex flex-col justify-center items-center h-full rounded-xl dark:hover:shadow-gray-100 px-5 py-1 text-black dark:text-white"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            {title}
            <animated.div
              className="absolute bottom-0 left-1/2 transform -translate-x-1/2 bg-[#89f9ea] h-[4px]"
              style={sidebarSpring}
            ></animated.div>
          </button>)}
        </div>
      </nav>
    </>
  );
}
