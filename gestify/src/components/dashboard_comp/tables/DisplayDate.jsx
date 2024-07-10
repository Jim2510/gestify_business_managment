export function DisplayDate({ dispValue, handlePrev, handleNext }) {
  return (
    <>
      <div className="flex justify-center items-center font-semibold">
        <div className="pt-5 mr-4 cursor-pointer" onClick={handlePrev}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fillRule="currentColor"
            className="bi bi-caret-left-fill fill-white"
            viewBox="0 0 16 16"
          >
            <path d="m3.86 8.753 5.482 4.796c.646.566 1.658.106 1.658-.753V3.204a1 1 0 0 0-1.659-.753l-5.48 4.796a1 1 0 0 0 0 1.506z" />
          </svg>
        </div>
        <div className="mb-4 mt-8 py-2 px-4 bg-white border-transparent border-4 hover:border-[#89f9ea]">
          {dispValue}
        </div>
        <div className="pt-5 ml-4 cursor-pointer" onClick={handleNext}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fillRule="currentColor"
            className="bi bi-caret-right-fill fill-white"
            viewBox="0 0 16 16"
          >
            <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
          </svg>
        </div>
      </div>
    </>
  );
}
