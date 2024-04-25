import { useSpring, animated } from "@react-spring/web";
import { useState } from "react";
import { Link } from "react-router-dom";

export function BtnNavMedia() {
  const [hoverStates, setHoverStates] = useState({
    search: false,
    home: false,
    chart: false,
    pen: false,
    calendar: false,
    person: false,
    shop: false,
  });

  const handleMouseEnter = (button) => {
    setHoverStates((prevState) => ({
      ...prevState,
      [button]: true,
    }));
  };

  const handleMouseLeave = (button) => {
    setHoverStates((prevState) => ({
      ...prevState,
      [button]: false,
    }));
  };

  const getSpringStyle = (button) => {
    return useSpring({
      backgroundColor: hoverStates[button] ? "#02f9ae" : "#fff",
    });
  };
  return (
    <>
      <animated.div className="absolute w-[100px] flex flex-col justify-center items-center bg-white dark:bg-slate-800 p-8 text-black dark:text-white">
        <animated.div
          style={getSpringStyle("search")}
          className="border-2 border-[#02f9ae] flex justify-center relative z-[100]"
        >
          <button
            onMouseEnter={() => handleMouseEnter("search")}
            onMouseLeave={() => handleMouseLeave("search")}
            className="border-2 p-3 font-semibold text-black dark:text-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              class="bi bi-search"
              viewBox="0 0 16 16"
            >
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
            </svg>
          </button>
        </animated.div>
        <animated.div
          style={getSpringStyle("home")}
          className="border-2 border-[#02f9ae]  flex justify-center relative z-[100]"
        >
          <button
            onMouseEnter={() => handleMouseEnter("home")}
            onMouseLeave={() => handleMouseLeave("home")}
            className="border-2 p-3 font-semibold text-black dark:text-white"
          >
            <Link to="/homepage">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                className="bi bi-house relative z-[100]"
                viewBox="0 0 16 16"
              >
                <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293zM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5z" />
              </svg>
            </Link>
          </button>
        </animated.div>
        <animated.div
          style={getSpringStyle("chart")}
          className="border-2 border-[#02f9ae] flex justify-center relative z-[100]"
        >
          <button
            onMouseEnter={() => handleMouseEnter("chart")}
            onMouseLeave={() => handleMouseLeave("chart")}
            className="border-2 p-3 font-semibold text-black dark:text-white"
          >
            <Link to="/dashboard/tables">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                class="bi bi-pie-chart-fill"
                viewBox="0 0 16 16"
              >
                <path d="M15.985 8.5H8.207l-5.5 5.5a8 8 0 0 0 13.277-5.5zM2 13.292A8 8 0 0 1 7.5.015v7.778zM8.5.015V7.5h7.485A8 8 0 0 0 8.5.015" />
              </svg>
            </Link>
          </button>
        </animated.div>

        <animated.div
          style={getSpringStyle("calendar")}
          className="border-2 border-[#02f9ae] flex justify-center relative z-[100]"
        >
          <button
            onMouseEnter={() => handleMouseEnter("calendar")}
            onMouseLeave={() => handleMouseLeave("calendar")}
            className="border-2 p-3 font-semibold text-black dark:text-white"
          >
            <Link to={"/scheduler/calendar"}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                class="bi bi-calendar-event"
                viewBox="0 0 16 16"
              >
                <path d="M11 6.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5z" />
                <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5M1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4z" />
              </svg>
            </Link>
          </button>
        </animated.div>

        <animated.div
          style={getSpringStyle("shop")}
          className="border-2 border-[#02f9ae] flex justify-center relative z-[100]"
        >
          <button
            onMouseEnter={() => handleMouseEnter("shop")}
            onMouseLeave={() => handleMouseLeave("shop")}
            className="border-2 p-3 font-semibold text-black dark:text-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              class="bi bi-shop-window"
              viewBox="0 0 16 16"
            >
              <path d="M2.97 1.35A1 1 0 0 1 3.73 1h8.54a1 1 0 0 1 .76.35l2.609 3.044A1.5 1.5 0 0 1 16 5.37v.255a2.375 2.375 0 0 1-4.25 1.458A2.37 2.37 0 0 1 9.875 8 2.37 2.37 0 0 1 8 7.083 2.37 2.37 0 0 1 6.125 8a2.37 2.37 0 0 1-1.875-.917A2.375 2.375 0 0 1 0 5.625V5.37a1.5 1.5 0 0 1 .361-.976zm1.78 4.275a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 1 0 2.75 0V5.37a.5.5 0 0 0-.12-.325L12.27 2H3.73L1.12 5.045A.5.5 0 0 0 1 5.37v.255a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0M1.5 8.5A.5.5 0 0 1 2 9v6h12V9a.5.5 0 0 1 1 0v6h.5a.5.5 0 0 1 0 1H.5a.5.5 0 0 1 0-1H1V9a.5.5 0 0 1 .5-.5m2 .5a.5.5 0 0 1 .5.5V13h8V9.5a.5.5 0 0 1 1 0V13a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9.5a.5.5 0 0 1 .5-.5" />
            </svg>
          </button>
        </animated.div>
      </animated.div>
    </>
  );
}
