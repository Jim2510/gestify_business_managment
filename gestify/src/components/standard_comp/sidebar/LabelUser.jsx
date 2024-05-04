export function LabelUser({ name, role, userImg }) {
  return (
    <>
      <div className="w-full flex flex-row gap-2 pt-[40px] ml-6">
        <div className="bg-white w-[80px] h-[80px] rounded-full relative shadow-2xl flex justify-center items-center">
          <img src={userImg} className="absolute" />
        </div>
        <div className="text-[14px] font-bold flex justify-center items-center flex-col ml-1 leading-7 dark:text-white">
          <h3>Name: {name}</h3>
          <h4>Role: {role}</h4>
        </div>
      </div>
    </>
  );
}
