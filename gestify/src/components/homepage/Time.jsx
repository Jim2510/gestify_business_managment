import { useEffect, useState } from "react";

export function Time() {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    setInterval(() => {
      setDate(new Date());
    }, 1000);
  }, []);

  return (
    <>
    <div className="flex justify-end">
      <h2 className="text-center text-[20px] font-bold p-10 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
        {date.toLocaleDateString()} - {date.toLocaleTimeString()}
      </h2>
    </div>
    </>
  );
}
