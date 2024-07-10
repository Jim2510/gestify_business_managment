export function WelcomeLogin({ handleHidden }) {
  return (
    <>
      <div className="flex flex-col justify-center items-center font-bold text-white text-center">
        <div className=" text-[32px]">
          Welcome in GESTIFY.
          <br />
          Are you already registered?
        </div>
        <button
          onClick={handleHidden}
          className="border-[3px] border-white rounded-full w-[120px] text-[18px] h-[3rem] mt-[15px]"
        >
          LogIn
        </button>
      </div>
    </>
  );
}
