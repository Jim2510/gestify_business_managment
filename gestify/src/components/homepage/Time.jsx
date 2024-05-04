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
    <div className="flex justify-end relative py-4 text-white">
      <h2 className="text-center text-[20px] font-bold p-10 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] absolute left-0">
        {date.toLocaleDateString()}
      </h2>
      <h2 className="text-center text-[20px] font-bold p-10 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] absolute right-0">
        {date.toLocaleTimeString()}
      </h2>
    </div>
    </>
  );
}
