import { BtnNav } from "./BtnNav";
import { BtnNavMedia } from "./BtnNavMedia";
import { useDispatch } from "react-redux";
import { logout } from "../../../store/slices/authSlice";
import { useAnimation } from "../../../hooks/useAnimation";
import { animated } from "@react-spring/web";
import { Link, Navigate, useNavigate } from "react-router-dom";

export function Navbar() {
  const dispatch = useDispatch();
  const navigate = useNavigate()

  const { sidebarSpring, navSpring, handleHidden, handleUserHidden } =
    useAnimation();

  const handleLogOut = () => {
    dispatch(logout());
    navigate('/login')
  };

  return (
    <>
      <div className="w-full h-10 fixed top-0 left-0 flex justify-end items-center z-[110]">
        <div className="dark:bg-slate-800 bg-white dark:text-white text-black w-full h-10 shadow-2xl flex justify-end md:justify-between items-center fixed">
          <div className="w-full justify-start flex">
            <div className="w-[200px] overflow-hidden h-[35px]">
              <Link to={"/homepage"}>
                <img
                  src="..\src\assets\gestify__1_-removebg-preview_1.png"
                  alt=""
                  className="min-w-[200px] relative top-[-80px]"
                />
              </Link>
            </div>
          </div>
          <div className="">
            <BtnNav />
          </div>
          <div className="relative p-1 sm:w-[50px] h-full cursor-pointer md:hidden flex justify-center items-center shadow-xl ">
            <button
              onClick={handleHidden}
              className="w-[25px] h-[25px] rounded-full bg-gray-300/50 cursor-pointer flex justify-center items-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                fillRule="black"
                className="bi bi-menu-button"
                viewBox="0 0 16 16"
              >
                <path d="M0 1.5A1.5 1.5 0 0 1 1.5 0h8A1.5 1.5 0 0 1 11 1.5v2A1.5 1.5 0 0 1 9.5 5h-8A1.5 1.5 0 0 1 0 3.5zM1.5 1a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 0-.5-.5z" />
                <path d="m7.823 2.823-.396-.396A.25.25 0 0 1 7.604 2h.792a.25.25 0 0 1 .177.427l-.396.396a.25.25 0 0 1-.354 0M0 8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm1 3v2a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2zm14-1V8a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v2zM2 8.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5m0 4a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5" />
              </svg>
            </button>
            <animated.div
              style={sidebarSpring}
              id="menu"
              className="w-full absolute -bottom-24 right-0 flex"
            >
              <BtnNavMedia />
            </animated.div>
          </div>
          <div className="w-[50px] h-full flex justify-center items-center">
            <div className="w-[30px] h-[30px] rounded-full bg-gray-200 cursor-pointer relative mr-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fillRule="currentColor"
                className="bi bi-box-arrow-right absolute top-[4px] left-[7px]"
                viewBox="0 0 16 16"
                onClick={handleUserHidden}
              >
                <path
                  fill-rule="evenodd"
                  d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0z"
                />
                <path
                  fill-rule="evenodd"
                  d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708z"
                />
              </svg>
              {/* <img
                className="w-[25px] h-[25px] rounded-full"
                src="..\src\assets\png-clipart-united-states-avatar-organization-information-user-avatar-service-computer-wallpaper-thumbnail.png"
                alt=""
                onClick={handleUserHidden}
              /> */}
              <animated.div
                style={navSpring}
                className="mr-3 flex w-0 h-fit shadow-lg absolute top-[32px] bg-white right-[-20px] justify-center items-end"
              >
                <button
                  className="text-black font-semibold cursor-pointer w-full shadow-lg py-2 m-3 text-center active:shadow-sm h-[40px] overflow-hidden"
                  onClick={handleLogOut}
                >
                  Log Out
                </button>
              </animated.div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
