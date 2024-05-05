import { useEffect, useState } from "react";
import { TitleSection } from "../components/standard_comp/TitleSection";
import { format, addDays, startOfWeek } from "date-fns";
import { SchedulerGrid } from "../components/scheduler_comp/SchedulerGrid";
export function Scheduler() {
    const [currentWeek, setCurrentWeek] = useState([]);
    const [currentDate, setCurrentDate] = useState(getFormattedDate());
    const [currentDateDefault, setCurrentDateDefault] = useState(getFormattedDateDefault());

    // Funzione per ottenere la data corrente formattata nel formato YYYY-MM-DD
    function getFormattedDateDefault() {
        const today = new Date();
        const year = today.getFullYear();
        let month = today.getMonth() + 1;
        let day = today.getDate();

        // Aggiungi uno zero davanti al mese e al giorno se sono inferiori a 10
        month = month < 10 ? '0' + month : month;
        day = day < 10 ? '0' + day : day;

        return `${year}-${month}-${day}`;
    }
    function getFormattedDate(date) {
        const formattedDate = new Date(date);
        const year = formattedDate.getFullYear();
        let month = formattedDate.getMonth() + 1;
        let day = formattedDate.getDate();

        // Aggiungi uno zero davanti al mese e al giorno se sono inferiori a 10
        month = month < 10 ? '0' + month : month;
        day = day < 10 ? '0' + day : day;

        return `${year}-${month}-${day}`;
    }

    // Funzione per gestire il cambiamento della data nell'input
    function handleDateChange(event) {
        const newDate = event.target.value;
        setCurrentDate(newDate);

        // Aggiorna la lista della settimana in base alla nuova data
        const startOfWeekDate = new Date(newDate);
        startOfWeekDate.setDate(startOfWeekDate.getDate() - startOfWeekDate.getDay()); // Imposta il giorno alla Domenica (primo giorno della settimana)
        const days = [];

        for (let i = 0; i < 7; i++) {
            const day = getFormattedDate(startOfWeekDate.setDate(startOfWeekDate.getDate() + i));
            days.push(day);
        }

        setCurrentWeek(days);
    }

    useEffect(() => {
        // Inizializzazione della lista della settimana
        const startOfCurrentWeek = new Date();
        startOfCurrentWeek.setDate(startOfCurrentWeek.getDate() - startOfCurrentWeek.getDay()); // Imposta il giorno alla Domenica (primo giorno della settimana)
        const days = [];

        for (let i = 0; i < 7; i++) {
            const day = getFormattedDate(startOfCurrentWeek.setDate(startOfCurrentWeek.getDate() + i));
            days.push(day);
        }

        setCurrentWeek(days);
    }, []);
    const hours = [
        "7:00 ",
        "8:00 ",
        "9:00 ",
        "10:00 ",
        "11:00 ",
        "12:00 ",
        "13:00 ",
        "14:00 ",
        "15:00 ",
        "16:00 ",
        "17:00 ",
        "18:00 ",
        "19:00 ",
        "20:00 ",
        "21:00 ",
        "22:00 ",
        "23:00 ",
        "0:00 ",
        "1:00 ",
        "2:00 ",
        "3:00 ",
        "4:00 ",
        "5:00 ",
        "6:00 ",
    ];
    const inputStyle = {
        input: {
            borderWidth: "0px",
            outline: "0",
            WebkitAppearance: "none",
            boxShadow: "none",
            MozBoxShadow: "none",
            WebkitBoxShadow: "none",
        },
        inputFocus: {
            outline: "0",
        },
    };
    return (
        <div className="flex flex-col w-[100vw] h-[100vh] text-center justify-center items-center pt-[30px] bg-gradient-to-b from-[#1cdafe] to-[#02f9ae]">
            <TitleSection titleName="CALENDAR" />
            <div className="w-[85%] h-[75%] overflow-y-auto mt-4">
                <div className="grid grid-cols-8 grid-rows-26 w-full h-fit shadow-lg rounded-md bg-white relative font-semibold">
                    <div className="col-span-full bg-gray-200 flex justify-between sticky top-0 z-20">
                        <input
                            style={inputStyle.input}
                            type="date"
                            className="border-none bg-transparent focus:ring-0 focus:border-0"
                            value={currentDateDefault}
                            onChange={handleDateChange}
                        ></input>
                        <div className="flex justify-center items-center">
                            <button className="mr-[30px] border-[2px] border-white rounded-full px-[10px] font-light">
                                Day
                            </button>
                            <button className="mr-[30px] border-[2px] border-white rounded-full px-[10px] font-light">
                                Week
                            </button>
                            <button className="mr-[30px] border-[2px] border-white rounded-full px-[10px] font-light">
                                Month
                            </button>
                        </div>
                    </div>
                    <div className="grid justify-items-center items-center border p-0 sticky top-[40px] bg-white"></div>
                    {currentWeek.map((day, index) => (
                        <div
                            key={index}
                            className="grid justify-items-center items-center border bg-[#02f9ae] sticky top-[40px] z-20"
                        >
                            {day}
                        </div>
                    ))}
                    <SchedulerGrid />
                    {hours &&
                        hours.map((hour, index) => (
                            <div
                                key={index}
                                className="grid col-start-1 col-end-2 col-span-1 justify-items-center items-center border bg-[#02f9ae]"
                            >
                                {hour}
                            </div>
                        ))}
                </div>
            </div>
        </div>
    );
}
