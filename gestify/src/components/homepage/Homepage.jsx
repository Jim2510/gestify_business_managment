import { animated } from "@react-spring/web";
import { useAnimation } from "../../hooks/useAnimation";
import { Time } from "./Time";
import { GraphHome } from "./GraphHome";
import { GraphHomeSx } from "./GraphHomeSx";
export function Homepage({ name }) {
  const { springs, springs2, springs3 } = useAnimation();



  return (
    <>
      <div className=" h-full flex justify-center items-center pt-10  z-20 flex-col dark:bg-gradient-to-b dark:from-slate-900 dark:to-slate-500 bg-white overflow-hidden">
        <div className="z-20 p-4 sm:p-0 w-full sm:w-[100%] md:h-[250px] h-[230px] bg-gradient-to-b from-[#1cdafe] to-[#02f9ae] overflow-hidden relative">
          <animated.div
            style={springs3}
            className="absolute m-auto w-full text-white"
          >
            <Time />
          </animated.div>

          <div className="flex relative w-full z-10">
            <animated.div style={springs} className="w-[100%] mt-20">
              <p className="text-white font-extrabold pl-16 md:text-[40px] sm:text-[30px] text-[34px] drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
                Welcome {name},
              </p>
              <p className="text-white font-bold pl-16 md:text-[30px] sm:text-[20px] text-[22px] drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
                Ready to manage your daily tasks
              </p>
            </animated.div>
            <div className=" drop-shadow-2xl w-[50%] relative z-0 sm:flex hidden h-[250px] justify-center items-center">
              <animated.div
                style={springs2}
                className="drop-shadow-2xl w-full h-[80px] overflow-hidden justify-center items-center"
              >
                <img
                  className="top-[-210px] relative flex justify-center items-center z-0"
                  src="..\src\assets\gestify__1_-removebg-preview_1.png"
                  alt=""
                />
              </animated.div>
            </div>
          </div>
        </div>

        <div className="w-full h-full flex ">

          <div className="w-[40%] mt-10 flex flex-col justify-center items-center">
          <h2 className="text-[24px] font-semibold">Goals</h2>
           <GraphHomeSx />
          </div>

          <div className="w-[900px] h-[400px] mt-10 flex flex-col justify-center items-center">
          <h2 className="text-[24px] font-semibold">Daily Entries</h2>
          <GraphHome/>
          </div>

        </div>
      </div>
    </>
  );
}
