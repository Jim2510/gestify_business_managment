import { useState } from "react";

export function SchedulerGrid() {
    const [addEvent, setAddEvent] = useState({ display: "none" });
    const [addEventButton, setAddEventButton] = useState({ display: "none" });
    function handleAddEvent() {
        setAddEvent({ display: "flex" });
    }
    const array = [];
    for (let i = 1; i <= 168; i++) {
        array.push(i);
    }
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
        <div className="col-start-2 w-full h-full absolute top-[80px] grid grid-cols-7 grid-rows-24 max-h-[960px] ">
            {array.map((_, index) => (
                <div
                    key={index}
                    onClick={handleAddEvent}
                    className="border border-grey-400 row-span-1 col-span-1 bg-white hover:bg-gray-200"
                >
                    <div className="flex"></div>
                </div>
            ))}
            <div
                style={addEvent}
                className="flex justify-self-center fixed mr-36 w-[350px] h-[250px] bg-gray-100 rounded-lg shadow-2xl"
            >
                <div className="p-4 flex flex-col justify-center items-center w-full h-full">
                    <input
                        style={inputStyle.input}
                        className="border-b-4 border-b-[#89f9ea] border-x-0 border-t-0 bg-white leading-[0px] "
                        placeholder="Add Event"
                        type="text"
                    />
                    <svg
                        onClick={() => setAddEvent({ display: "none" })}
                        xmlns="http://www.w3.org/2000/svg"
                        width="35"
                        height="35"
                        fillRule="currentColor"
                        className="fill-[#6B7280] absolute top-2 right-2 cursor-pointer"
                        viewBox="0 0 16 16"
                    >
                        <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708" />
                    </svg>
                    <div className="flex justify-around w-full">
                        <button className="border-b-4 border-b-[#89f9ea] border-x-0 border-t-0 p-2 mt-[40px] bg-white text-[#6B7280] hover:text-black">
                            Details
                        </button>
                        <button
                            onClick={setAddEvent}
                            className="border-b-4 border-b-[#89f9ea] border-x-0 border-t-0 p-2 mt-[40px] bg-white text-[#6B7280] hover:text-black"
                        >
                            ADD
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
