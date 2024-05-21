export function WelcomeRegister({ handleHidden }) {
  return (
    <>
      <div className="flex flex-col justify-center items-center font-bold text-white text-center">
        <div className=" text-[32px]">
          Welcome back in GESTIFY.
          <br />
          Are you new here?
        </div>
        <button
          onClick={handleHidden}
          className="border-[3px] border-white rounded-full w-[120px] text-[18px] h-[3rem] mt-[15px]"
        >
          Sign up
        </button>
      </div>
    </>
  );
}
