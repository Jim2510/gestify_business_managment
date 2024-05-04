import { Link } from "react-router-dom";

export function SectionOne() {
  return (
    <>
      <div className="flex justify-center  w-[100vw] h-[100vh] items-center ">
        <div className="w-[95%] h-[500px]">
          <div className="flex flex-col">
            <div className="w-[400px] h-[200px] overflow-hidden"></div>
            <div className="flex pl-10 justify-center w-full h-full gap-4 mt-[-60px] items-center ">
              <div className="flex flex-col items-start w-[700px] justify-center mt-[-400px] h-screen ml-[100px] ">
                <h1 className='text-4xl font-black md:text-8xl'>GESTIFY</h1>
                <h2 className="text-md md:text-2xl" >OTTIMIZZA LA GESTIONE DELLA TUA AZIENDA!</h2>
                <p className="max-w-md text-sm md:text-base text-black-500" >
                  Benvenuti nella nostra landing page dedicata al nostro
                  innovativo gestionale aziendale! Siamo entusiasti di
                  presentarvi la soluzione che rivoluzionerà il modo in cui
                  gestite la vostra impresa.
                </p>
                <div className="w-full flex justify-center pr-[50px] absolute bottom-[270px] right-[470px] left-[-500px] ">
                  <Link to={"/login"}>
                    <button className="rounded w-[200px] bg-white/40 shadow-2xl py-2 hover:bg-white/70 active:bg-white/40">
                      ISCRIVITI
                    </button>
                  </Link>
                </div>
              </div>
              <div className="w-[50%] mr-[100px] mt-[-300px] ">
                <img src="../../src/assets/dash.png" alt="" />
              </div>
            </div>
          </div>
          <div>
            <img src="" alt="" />
          </div>
        </div>
      </div>
    </>
  );
}
