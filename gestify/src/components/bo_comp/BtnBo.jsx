function SingleBtn({ btnName, onClick }) {
  return (
    <>
      <div
        onClick={() => onClick(btnName)}
        className=" cursor-pointer p-10 min-w-[100px] h-[50px] shadow-2xl m-1 text-center flex justify-center items-center active:shadow-none"
      >
        {btnName}
      </div>
    </>
  );
}

export function BtnBo({ arrBtn, handleBtnClick }) {
  return (
    <>
      <div className="p-5">
        {arrBtn &&
          arrBtn.map((el, index) => (
            <SingleBtn btnName={el} key={index} onClick={handleBtnClick} />
          ))}
      </div>
    </>
  );
}
