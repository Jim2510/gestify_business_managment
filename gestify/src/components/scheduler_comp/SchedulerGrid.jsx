import { useEffect, useState } from "react";
import { Select } from "./Select";

export function SchedulerGrid() {
  const [addEvent, setAddEvent] = useState({ display: "none" });
  const [addEventButton, setAddEventButton] = useState({ display: "none" });
  const [addEventDate, setAddEventDate] = useState({ display: "none" });
  const [eventInput, setEventInput] = useState("");

  useEffect(() => {}, []);

  function handleEventInput(e) {
    setEventInput(e.target.value);
  }
  function handleAddEventDate(index) {
    setAddEventDate(index);
    setAddEvent({ display: "flex" });
  }

  function handleClose() {
    setAddEvent({ display: "none" });
  }

  function handleAddEvent() {
    setAddEventButton({ display: "flex" });
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
          onClick={() => handleAddEventDate(index)}
          className="border border-grey-400 row-span-1 col-span-1 bg-white hover:bg-gray-200 flex justify-center items-center"
        >
          {addEventDate === index && (
            <div
              style={addEventButton}
              className="flex w-[200px] h-[100px] bg-[#1cdafe] shadow-lg flex-col items-center relative "
            >
              <div className="font-semibold text-white mt-[30px] absolute">
                {eventInput}
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                class="absolute top-2 right-3 fill-white cursor-pointer"
                viewBox="0 0 16 16"
              >
                <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
              </svg>
            </div>
          )}
        </div>
      ))}
      <div
        style={addEvent}
        className="flex justify-self-center fixed mr-36 w-[350px] h-[300px] bg-gray-100 rounded-lg shadow-2xl"
      >
        <div className="p-4 flex flex-col justify-center items-center w-full h-full gap-4">
          <label htmlFor="">Add Event</label>
          <input
            style={inputStyle.input}
            onChange={handleEventInput}
            className="border-b-4 border-b-[#89f9ea] border-x-0 border-t-0 bg-white leading-[0px] "
            placeholder="Add Event"
            type="text"
          />
          <div className="flex justify-around w-full">
            <div className="flex flex-col">
              <label htmlFor="">Start</label>
              <Select />
            </div>
            <div className="flex flex-col">
              <label htmlFor="">End</label>
              <Select />
            </div>
          </div>
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
              onClick={() => handleAddEvent()}
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
