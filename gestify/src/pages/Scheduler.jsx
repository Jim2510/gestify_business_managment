import { useEffect, useState } from "react";
import { TitleSection } from "../components/standard_comp/TitleSection";
import { format, addDays, startOfWeek } from 'date-fns';
import { SchedulerGrid } from "../components/scheduler_comp/SchedulerGrid";
export function Scheduler() {
    const [colomuns, setColumns] = useState([])
    const [currentWeek, setCurrentWeek] = useState([]);

    useEffect(() => {
        const currentDate = new Date();
        const startOfCurrentWeek = startOfWeek(currentDate); // Ottieni l'inizio della settimana corrente
        const days = [];

        for (let i = 0; i < 7; i++) {
            const day = format(addDays(startOfCurrentWeek, i), 'EEE d'); // Formatta il giorno della settimana (Es. "Mon 29")
            days.push(day);
        }

        setCurrentWeek(days);
    }, []);
    const hours = [
        '7:00 ', '8:00 ', '9:00 ', '10:00 ', '11:00 ', '12:00 ', '13:00 ', '14:00 ',
        '15:00 ', '16:00 ', '17:00 ', '18:00 ', '19:00 ', '20:00 ', '21:00 ', '22:00 ',
        '23:00 ', '0:00 ', '1:00 ', '2:00 ', '3:00 ', '4:00 ', '5:00 ', '6:00 '
    ];
    return (
        <div className="flex flex-col w-[100vw] h-[100vh] text-center justify-center items-center mt-[30px] bg-gradient-to-b from-[#1cdafe] to-[#02f9ae]">
            <TitleSection titleName="CALENDAR" />
            <div className="w-[85%] h-[75%] overflow-y-auto">
                <div className="grid grid-cols-8 grid-rows-26 w-full h-fit shadow-lg rounded-md bg-white relative font-semibold">
                    <div className="col-span-full bg-gray-200 flex justify-between sticky top-0 z-20">
                        <input type="date" className="border-none bg-transparent"></input>
                        <div className="flex justify-center items-center">
                            <button className="mr-[30px] border-[2px] border-white rounded-full px-[10px] font-light" >Day</button>
                            <button className="mr-[30px] border-[2px] border-white rounded-full px-[10px] font-light" >Week</button>
                            <button className="mr-[30px] border-[2px] border-white rounded-full px-[10px] font-light" >Month</button>
                        </div>
                    </div>
                    <div className="grid justify-items-center items-center border p-0"></div>
                    {currentWeek.map((day, index) => (
                        <div key={index} className="grid justify-items-center items-center border bg-[#02f9ae] sticky top-0 z-20">{day}</div>
                    ))}
                    <SchedulerGrid />
                    {hours && hours.map((hour, index) => <div key={index} className="grid col-start-1 col-end-2 col-span-1 justify-items-center items-center border bg-[#02f9ae]">{hour}</div>)}
                </div>

            </div>
        </div>
    )
}