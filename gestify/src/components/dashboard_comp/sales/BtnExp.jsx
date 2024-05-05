import { Link } from "react-router-dom";
import { useState } from "react";
import { useSpring, animated } from "@react-spring/web";
import { useAnimation } from "../../../hooks/useAnimation";

export function BtnExp({ btnName, link }) {
  const { handleHover, styleBtn } = useAnimation();
  return (
    <>
      <div className="mb-[16px] col-span-1 flex justify-center items-center text-[24px] w-full font-semibold ">
        <Link to={link}>
          <animated.button
            onMouseEnter={handleHover}
            onMouseLeave={handleHover}
            style={styleBtn}
            className="group w-fit bg-transparent text-white py-2 px-4 flex justify-center items-center gap-4"
          >
            {btnName}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fillRule="currentColor"
              className="bi bi-caret-right-fill fill-white group-hover:fill-black"
              viewBox="0 0 16 16"
            >
              <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
            </svg>
          </animated.button>
        </Link>
      </div>
    </>
  );
}
