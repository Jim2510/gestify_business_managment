export function MenuSidebar() {
  const arrbtn = [
    { name: "PROFILE", src: "../../src/assets/person-circle.svg" },
    { name: "EMAIL", src: "../../src/assets/envelope.svg" },
    { name: "TICKETS", src: "../../src/assets/ticket.svg" },
    { name: "REMINDER", src: "../../src/assets/alarm.svg" },
    { name: "NOTE", src: "../../src/assets/journal.svg" },
    { name: "SETTINGS", src: "../../src/assets/gear.svg" },
  ];

  return (
    <>
      <div className="flex justify-center items-center mt-10 flex-col relative font-semibold">
        <div className="flex flex-row w-full justify-start pl-8 shadow-2xl items-center">
          <h3 className="dark:text-gray-200 w-full">MENU</h3>
        </div>
        <div className="grid grid-rows-6 w-full pl-6 pr-14 mt-5 gap-2 text-[14px] ">
          {arrbtn &&
            arrbtn.map((el, index) => (
              <div
                key={index}
                className="p-2 shadow-2xl cursor-pointer bg-white/40 flex justify-start items-center"
              >
                <img width={20} height={20} src={el.src} alt="" />
                <h2 className="pl-4">{el.name}</h2>
              </div>
            ))}
        </div>
      </div>
    </>
  );
}
