export function Intst({ first, second, third }) {
  return (
    <>
      <div className="w-full h-full px-1 text-[14px] font-semibold bg-[#02f9ae]">
        <div className="grid grid-cols-12 grid-rows-1 justify-between">
          <div className=" p-2 text-center border-gray-400 flex justify-center items-center col-span-1 border-b-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fillRule="currentColor"
              className="bi bi-download"
              viewBox="0 0 16 16"
            >
              <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5" />
              <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708z" />
            </svg>
          </div>
          <div className="text-center border-l-2 border-gray-400 col-span-6 border-b-2 flex items-center justify-center">
            {first}
          </div>
          <div className="text-center border-l-2 border-gray-400 col-span-2 border-b-2 flex items-center justify-center">
            {second}
          </div>
          <div className="text-center border-l-2 border-gray-400 col-span-2 border-b-2 flex items-center justify-center">
            {third}
          </div>
          <div className="text-center border-l-2 border-gray-400 col-span-1 border-b-2 flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fillRule="currentColor"
              className="bi bi-check2"
              viewBox="0 0 16 16"
            >
              <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0" />
            </svg>
          </div>
        </div>
      </div>
    </>
  );
}
