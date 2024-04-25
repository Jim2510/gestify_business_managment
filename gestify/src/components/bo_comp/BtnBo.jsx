function SingleBtn({ btnName }) {
  return (
    <>
      <div className=" cursor-pointer p-10 min-w-[100px] h-[50px] shadow-2xl m-1 text-center flex justify-center items-center active:shadow-none">
        {btnName}
      </div>
    </>
  );
}

export function BtnBo({ arrBtn }) {
  return (
    <>
      <div className="p-5">
        {arrBtn &&
          arrBtn.map((el, index) => <SingleBtn btnName={el} key={index} />)}
      </div>
    </>
  );
}
