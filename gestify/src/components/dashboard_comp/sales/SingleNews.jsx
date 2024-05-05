export function SingleNews({ earns }) {
  return (
    <>
      <div className="w-[90%] h-fit flex justify-end py-2  border-2 border-gray-200 items-center">
        <div className="w-full flex justify-between px-4 xl:text-[16px] font-semibold text-[10px]">
          <h3 className="text-center min-w-[60px] bg-gradient-to-b from-[#1cdafe] to-[#02f9ae]">
            {earns}
          </h3>
          <h3>New transaction</h3>
        </div>
      </div>
    </>
  );
}
