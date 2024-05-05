function SingleBtn({ btnName, onClick }) {
  return (
    <>
      <div
        onClick={() => onClick(btnName)}
        className="bg-white cursor-pointer p-10 min-w-[100px] h-[50px] shadow-2xl m-1 text-center flex justify-center items-center active:shadow-none"
      >
        {btnName}
      </div>
    </>
  );
}

export function BtnBo({ arrBtn, handleBtnClick }) {
  return (
    <>
      <div className="px-4 flex flex-col gap-2">
        {arrBtn &&
          arrBtn.map((el, index) => (
            <SingleBtn btnName={el} key={index} onClick={handleBtnClick} />
          ))}
      </div>
    </>
  );
}
