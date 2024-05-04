import { TitleSection } from "../components/standard_comp/TitleSection";

export function Scheduler() {

    return (
        <div className="flex flex-col w-[100vw] h-[100vh] text-center justify-center items-center mt-[30px] bg-gradient-to-b from-[#1cdafe] to-[#02f9ae]">
            <TitleSection titleName="CALENDAR" />
            <div className="grid grid-cols-8 grid-rows-19 w-[85%] h-[75%] shadow-lg rounded-md 2xl:w-[80%] bg-white max-h-[500px] overflow-y-auto">
                <div className="col-span-full bg-gray-200 flex justify-between">
                    <button>Calendar</button>
                    <div className="flex justify-center items-center">
                        <button className="mr-[30px] border-[2px] border-white rounded-full px-[10px] font-light" >Day</button>
                        <button className="mr-[30px] border-[2px] border-white rounded-full px-[10px] font-light" >Week</button>
                        <button className="mr-[30px] border-[2px] border-white rounded-full px-[10px] font-light" >Month</button>
                    </div>
                </div>
                <div className="grid justify-items-center items-center border"></div>
                <div className="grid justify-items-center items-center border">Sun 28</div>
                <div className="grid justify-items-center items-center border">Mon 29</div>
                <div className="grid justify-items-center items-center border">Tue 30</div>
                <div className="grid justify-items-center items-center border">Wed 1</div>
                <div className="grid justify-items-center items-center border">Thu 2</div>
                <div className="grid justify-items-center items-center border">Fri 3</div>
                <div className="grid justify-items-center items-center border">Sat 4</div>
                <div className="grid justify-items-center items-center border">8:00 AM</div>
                <div className="grid col-start-1 col-end-2 justify-items-center items-center border">9:00 AM</div>
                <div className="grid col-start-1 col-end-2 justify-items-center items-center border">10:00 AM</div>
                <div className="grid col-start-1 col-end-2 justify-items-center items-center border">11:00 AM</div>
                <div className="grid col-start-1 col-end-2 justify-items-center items-center border">12:00 PM</div>
                <div className="grid col-start-1 col-end-2 justify-items-center items-center border">1:00 PM</div>
                <div className="grid col-start-1 col-end-2 justify-items-center items-center border">2:00 PM</div>
                <div className="grid col-start-1 col-end-2 justify-items-center items-center border">3:00 PM</div>
                <div className="grid col-start-1 col-end-2 justify-items-center items-center border">4:00 PM</div>
                <div className="grid col-start-1 col-end-2 justify-items-center items-center border">5:00 PM</div>
                <div className="grid col-start-1 col-end-2 justify-items-center items-center border">6:00 PM</div>
                <div className="grid col-start-1 col-end-2 justify-items-center items-center border">7:00 PM</div>
                <div className="grid col-start-1 col-end-2 justify-items-center items-center border">8:00 PM</div>
                <div className="grid col-start-1 col-end-2 justify-items-center items-center border">9:00 PM</div>
                <div className="grid col-start-1 col-end-2 justify-items-center items-center border">10:00 PM</div>
                <div className="grid col-start-1 col-end-2 justify-items-center items-center border">11:00 PM</div>
                <div className="grid col-start-1 col-end-2 justify-items-center items-center border">12:00 AM</div>
            </div>
        </div>
    )
}