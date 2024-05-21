import { animated } from "@react-spring/web";
import { useAnimation } from "../../hooks/useAnimation";
import ProgressBar from "@ramonak/react-progress-bar";
import { Link } from "react-router-dom";

export function Homepage({ name = "User" }) {
  const { springs, springs2, springs3 } = useAnimation();

  return (
    <>
      <div className="h-full mt-[-33px] flex justify-center items-center pt-10  z-20 flex-col dark:bg-gradient-to-b dark:from-slate-900 dark:to-slate-500 bg-transparent overflow-hidden">
        <div className=" z-20 p-4 sm:p-0 w-full sm:w-[100%] md:h-[250px] h-[230px] overflow-hidden relative ">
          <div className="flex relative w-full z-10 pt-8">
            <animated.div style={springs} className="w-[100%] mt-20 ">
              <p className="text-white mt-[-30px] font-extrabold pl-16 text-[60px] drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
                WELCOME{" "}
                <span className="text-[#e6e6cd] underline ml-4">
                  {name.toLocaleUpperCase()}
                </span>
              </p>
              <p className="p-5 mt- text-white font-bold pl-16 md:text-[30px] sm:text-[20px] text-[22px] drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
                READY TO MANAGE YOUR DAILY TASKS !
              </p>
            </animated.div>

            <div className=" drop-shadow-2xl w-full relative sm:flex hidden h-[250px] justify-center items-center pr-44">
              {/* <div className="drop-shadow-2xl w-full h-[80px] overflow-hidden justify-center items-center absolute right-[240px]"> */}
              <img
                className="relative flex justify-center items-center"
                src="..\src\assets\gestify__1_-removebg-preview_1.png"
                alt=""
              />
              {/* </div> */}
            </div>
          </div>
        </div>

        <div className="w-[95%] h-full flex justify-center items-center gap-6">
          <div className="w-[40%] gap-4 h-[400px] p-4 mt-10 grid grid-rows-2 grid-cols-1 justify-center items-center ">
            <div className="grid grid-cols-3 h-full gap-4 font-semibold justify-between items-center text-[20px] text-center">
              <div className="shadow-2xl col-span-1 py-6 h-full flex justify-around items-center flex-col bg-white">
                <Link
                  to="/dashboard/sales"
                  className="flex flex-col justify-around w-full h-full items-center"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="50"
                    height="50"
                    fillRule="currentColor"
                    className="bi bi-pie-chart-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M15.985 8.5H8.207l-5.5 5.5a8 8 0 0 0 13.277-5.5zM2 13.292A8 8 0 0 1 7.5.015v7.778zM8.5.015V7.5h7.485A8 8 0 0 0 8.5.015" />
                  </svg>
                  <button className="">DASHBOARD</button>
                </Link>
              </div>

              <div className="shadow-2xl col-span-1 py-6 h-full flex justify-around items-center flex-col bg-white">
                <Link
                  to="/scheduler/calendar"
                  className="flex flex-col justify-around w-full h-full items-center"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="50"
                    height="50"
                    fillRule="currentColor"
                    className="bi bi-calendar2-event-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5m9.954 3H2.545c-.3 0-.545.224-.545.5v1c0 .276.244.5.545.5h10.91c.3 0 .545-.224.545-.5v-1c0-.276-.244-.5-.546-.5M11.5 7a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5z" />
                  </svg>
                  <button className="">EVENTS</button>
                </Link>
              </div>

              <div className="shadow-2xl py-6 h-full flex justify-around items-center flex-col bg-white">
                <Link
                  to="/backoffice"
                  className="flex flex-col justify-around w-full h-full items-center"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="50"
                    height="50"
                    fillRule="currentColor"
                    className="bi bi-pen-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001" />
                  </svg>
                  <button className="">BACKOFFICE</button>
                </Link>
              </div>
            </div>

            <div className="grid grid-cols-2 h-full gap-4 font-semibold justify-between items-center text-[20px] text-center ">
              <div className="shadow-2xl col-span-1 py-6 h-full flex justify-around items-center flex-col bg-white">
                <Link
                  to="/storage"
                  className="flex flex-col justify-around w-full h-full items-center"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="50"
                    height="50"
                    fillRule="currentColor"
                    className="bi bi-boxes"
                    viewBox="0 0 16 16"
                  >
                    <path d="M7.752.066a.5.5 0 0 1 .496 0l3.75 2.143a.5.5 0 0 1 .252.434v3.995l3.498 2A.5.5 0 0 1 16 9.07v4.286a.5.5 0 0 1-.252.434l-3.75 2.143a.5.5 0 0 1-.496 0l-3.502-2-3.502 2.001a.5.5 0 0 1-.496 0l-3.75-2.143A.5.5 0 0 1 0 13.357V9.071a.5.5 0 0 1 .252-.434L3.75 6.638V2.643a.5.5 0 0 1 .252-.434zM4.25 7.504 1.508 9.071l2.742 1.567 2.742-1.567zM7.5 9.933l-2.75 1.571v3.134l2.75-1.571zm1 3.134 2.75 1.571v-3.134L8.5 9.933zm.508-3.996 2.742 1.567 2.742-1.567-2.742-1.567zm2.242-2.433V3.504L8.5 5.076V8.21zM7.5 8.21V5.076L4.75 3.504v3.134zM5.258 2.643 8 4.21l2.742-1.567L8 1.076zM15 9.933l-2.75 1.571v3.134L15 13.067zM3.75 14.638v-3.134L1 9.933v3.134z" />
                  </svg>
                  <button className="">STORAGE</button>
                </Link>
              </div>

              <div className="shadow-2xl col-span-1 py-6 h-full flex justify-around items-center flex-col bg-white active:shadow-none">
                <Link
                  to="/orderhistory"
                  className="flex flex-col justify-around w-full h-full items-center"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="50"
                    height="50"
                    fillRule="currentColor"
                    className="bi bi-truck"
                    viewBox="0 0 16 16"
                  >
                    <path d="M0 3.5A1.5 1.5 0 0 1 1.5 2h9A1.5 1.5 0 0 1 12 3.5V5h1.02a1.5 1.5 0 0 1 1.17.563l1.481 1.85a1.5 1.5 0 0 1 .329.938V10.5a1.5 1.5 0 0 1-1.5 1.5H14a2 2 0 1 1-4 0H5a2 2 0 1 1-3.998-.085A1.5 1.5 0 0 1 0 10.5zm1.294 7.456A2 2 0 0 1 4.732 11h5.536a2 2 0 0 1 .732-.732V3.5a.5.5 0 0 0-.5-.5h-9a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 .294.456M12 10a2 2 0 0 1 1.732 1h.768a.5.5 0 0 0 .5-.5V8.35a.5.5 0 0 0-.11-.312l-1.48-1.85A.5.5 0 0 0 13.02 6H12zm-9 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m9 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2" />
                  </svg>
                  <button className="">ORDERS</button>
                </Link>
              </div>
            </div>
          </div>

          <div className="w-[900px] h-[400px] mt-10 flex flex-col justify-center items-center bg-transparent p-4">
            <div className="grid grid-rows-7 w-full h-full grid-cols-1 gap-4 font-semibold justify-center items-center text-[20px] text-center ">
              <div className="w-full text-center row-span-1 text-white drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] text-[30px]">
                GOALS
              </div>
              <div className="row-span-2 bg-white w-full shadow-2xl h-full px-10 flex flex-col justify-around py-4 ">
                MONTH
                <ProgressBar completed={30} bgColor="#02f9ae" />
              </div>
              <div className="row-span-2 bg-white w-full shadow-2xl h-full px-10 flex flex-col justify-around py-4">
                WEEK
                <ProgressBar completed={60} bgColor="#1cdafe" />
              </div>
              <div className="row-span-2 bg-white w-full shadow-2xl h-full px-10 flex flex-col justify-around py-4">
                DAY
                <ProgressBar completed={80} bgColor="#00008b" />
                <div className="text-[#00008b]"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
