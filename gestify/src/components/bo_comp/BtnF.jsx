export function BtnF({ handleAdd, handleRemove, handleUpdate, handleRefresh }) {
  return (
    <>
      <div className="w-full h-full flex bg-[#89f9ea]">
        <div className="group w-[25%] h-full flex justify-center items-center relative">
          <button onClick={handleAdd}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              fillRule="currentColor"
              className="bi bi-file-earmark-plus-fill"
              viewBox="0 0 16 16"
            >
              <path d="M9.293 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.707A1 1 0 0 0 13.707 4L10 .293A1 1 0 0 0 9.293 0M9.5 3.5v-2l3 3h-2a1 1 0 0 1-1-1M8.5 7v1.5H10a.5.5 0 0 1 0 1H8.5V11a.5.5 0 0 1-1 0V9.5H6a.5.5 0 0 1 0-1h1.5V7a.5.5 0 0 1 1 0" />
            </svg>
          </button>
          <div className="absolute w-[100px] h-[18px] bg-white top-[-10px] border-2 border-gray-400 text-[12px] hidden justify-center items-center group-hover:flex">
            ADD
          </div>
        </div>
        <div className="border-l-2 border-gray-400 group relative w-[25%] h-full flex justify-center items-center">
          <button onClick={handleRemove}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              fillRule="currentColor"
              className="bi bi-file-earmark-x-fill"
              viewBox="0 0 16 16"
            >
              <path d="M9.293 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.707A1 1 0 0 0 13.707 4L10 .293A1 1 0 0 0 9.293 0M9.5 3.5v-2l3 3h-2a1 1 0 0 1-1-1M6.854 7.146 8 8.293l1.146-1.147a.5.5 0 1 1 .708.708L8.707 9l1.147 1.146a.5.5 0 0 1-.708.708L8 9.707l-1.146 1.147a.5.5 0 0 1-.708-.708L7.293 9 6.146 7.854a.5.5 0 1 1 .708-.708" />
            </svg>
          </button>
          <div className="absolute w-[100px] h-[18px] bg-white top-[-10px] border-2 border-gray-400 text-[12px] hidden justify-center items-center group-hover:flex">
            REMOVE
          </div>
        </div>
        <div className="border-l-2 border-gray-400 group relative w-[25%] h-full flex justify-center items-center">
          <button onClick={handleUpdate}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              fillRule="currentColor"
              className="bi bi-file-earmark-medical-fill"
              viewBox="0 0 16 16"
            >
              <path d="M9.293 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.707A1 1 0 0 0 13.707 4L10 .293A1 1 0 0 0 9.293 0M9.5 3.5v-2l3 3h-2a1 1 0 0 1-1-1m-3 2v.634l.549-.317a.5.5 0 1 1 .5.866L7 7l.549.317a.5.5 0 1 1-.5.866L6.5 7.866V8.5a.5.5 0 0 1-1 0v-.634l-.549.317a.5.5 0 1 1-.5-.866L5 7l-.549-.317a.5.5 0 0 1 .5-.866l.549.317V5.5a.5.5 0 1 1 1 0m-2 4.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1m0 2h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1" />
            </svg>
          </button>
          <div className="absolute w-[100px] h-[18px] bg-white top-[-10px] border-2 border-gray-400 text-[12px] hidden justify-center items-center group-hover:flex">
            CHANGE
          </div>
        </div>
        <div className="border-l-2 border-gray-400 group relative w-[25%] h-full flex justify-center items-center">
          <button onClick={handleRefresh}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              fillRule="currentColor"
              className="bi bi-arrow-clockwise"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2z"
              />
              <path d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466" />
            </svg>
          </button>
          <div className="absolute w-[100px] h-[18px] bg-white top-[-10px] border-2 border-gray-400 text-[12px] hidden justify-center items-center group-hover:flex">
            REFRESH
          </div>
        </div>
      </div>
    </>
  );
}
