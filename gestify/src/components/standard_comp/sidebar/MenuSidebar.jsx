export function MenuSidebar() {
  return (
    <>
      <div className="flex justify-center items-center mt-10 flex-col relative">
        <div className="flex flex-row w-full justify-center items-center">
          <div className="w-[30%] border-b-2 mr-3"></div>
          <h3 className="dark:text-gray-200 text-gray-600">MENU</h3>
          <div className="w-[30%] border-b-2 ml-3"></div>
        </div>
        <div className="w-full my-5 flex flex-col justify-center gap-4 items-center text-[14px] transition-colors ease-in-out delay-300">
          <button className="px-5 flex justify-center items-center rounded-2xl p-2">
            <span className="dark:text-white  dark:hover:text-gray-400 text-gray-500 hover:text-black">
              ORDER HISTORY
            </span>
          </button>
          <button className="px-5 flex justify-center items-center rounded-2xl p-2">
            <span className="dark:text-white  dark:hover:text-gray-400 text-gray-500 hover:text-black">
              NOTES
            </span>
          </button>
          <button className="px-5 flex justify-center items-center rounded-2xl p-2">
            <span className="dark:text-white  dark:hover:text-gray-400 text-gray-500 hover:text-black">
              EMAIL
            </span>
          </button>
          <button className="px-5 flex justify-center items-center rounded-2xl p-2">
            <span className="dark:text-white  dark:hover:text-gray-400 text-gray-500 hover:text-black">
              TASKS
            </span>
          </button>
          <button className="px-5 flex justify-center items-center rounded-2xl p-2">
            <span className="dark:text-white  dark:hover:text-gray-400 text-gray-500 hover:text-black">
              MEETINGS
            </span>
          </button>
        </div>
        <div className="flex flex-row w-full justify-center items-center">
          <div className="w-[30%] border-b-2 mr-3"></div>
          <h3 className="dark:text-gray-200 text-gray-600">HELP</h3>
          <div className="w-[30%] border-b-2 ml-3"></div>
        </div>
        <div className="w-full my-5 flex flex-col justify-center gap-4 items-center text-[14px] transition-colors ease-in-out delay-300">
          <button className="px-5 flex justify-center items-center rounded-2xl p-2">
            <span className="dark:text-white  dark:hover:text-gray-400 text-gray-500 hover:text-black">
              CONTACTS
            </span>
          </button>
          <button className="px-5 flex justify-center items-center rounded-2xl p-2">
            <span className="dark:text-white  dark:hover:text-gray-400 text-gray-500 hover:text-black">
              ABOUT
            </span>
          </button>
          <button className="px-5 flex justify-center items-center rounded-2xl p-2">
            <span className="dark:text-white  dark:hover:text-gray-400 text-gray-500 hover:text-black">
              REPORT
            </span>
          </button>
        </div>
      </div>
    </>
  );
}
