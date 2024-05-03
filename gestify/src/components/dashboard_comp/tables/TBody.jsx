export function TBody({
  kp1,
  kp2,
  kp3,
  kp4,
  kp5,
  kp6,
  kp7,
  kp8,
  kp9,
  difp1,
  difs1,
  difp2,
  difs2,
  difp3,
  difs3,
  difp4,
  difs4,
  difp5,
  difs5,
  difp6,
  difs6,
  difp7,
  difs7,
  difp8,
  difs8,
  difp9,
  difs9,
}) {
  return (
    <>
      <div className="text-center grid grid-cols-9 bg-white justify-center items-center w-[65%] text-[14px] font-semibold">
        <div className="text-center py-2 border-gray-400 flex justify-center items-center">
          <div className="text-[12px] pr-2">{difp1} /</div>
          {kp1} <div className="pl-2 text-[12px]">/ {difs1}</div>
        </div>
        <div className="text-center py-2 border-l-2 border-gray-400 flex justify-center items-center">
          <div className="text-[12px] pr-2">{difp2} /</div>
          {kp2} <div className="pl-2 text-[12px]">/ {difs2}</div>
        </div>
        <div className="text-center py-2 border-l-2 border-gray-400 flex justify-center items-center">
          <div className="text-[12px] pr-2">{difp3} /</div>
          {kp3} <div className="pl-2 text-[12px]">/ {difs3}</div>
        </div>
        <div className="text-center py-2 border-l-2 border-gray-400 flex justify-center items-center">
          <div className="text-[12px] pr-2">{difp4} /</div>
          {kp4} <div className="pl-2 text-[12px]">/ {difs4}</div>
        </div>
        <div className="text-center py-2 border-l-2 border-gray-400 flex justify-center items-center">
          <div className="text-[12px] pr-2">{difp5} /</div>
          {kp5} <div className="pl-2 text-[12px]">/ {difs5}</div>
        </div>
        <div className="text-center py-2 border-l-2 border-gray-400 flex justify-center items-center">
          <div className="text-[12px] pr-2">{difp6} /</div>
          {kp6} <div className="pl-2 text-[12px]">/ {difs6}</div>
        </div>
        <div className="text-center py-2 border-l-2 border-gray-400 flex justify-center items-center">
          <div className="text-[12px] pr-2">{difp7} /</div>
          {kp7} <div className="pl-2 text-[12px]">/ {difs7}</div>
        </div>
        <div className="text-center py-2 border-l-2 border-gray-400 flex justify-center items-center">
          <div className="text-[12px] pr-2">{difp8} /</div>
          {kp8} <div className="pl-2 text-[12px]">/ {difs8}</div>
        </div>
        <div className="text-center py-2 border-l-2 border-gray-400 flex justify-center items-center">
          <div className="text-[12px] pr-2">{difp9} /</div>
          {kp9} <div className="pl-2 text-[12px]">/ {difs9}</div>
        </div>
      </div>
    </>
  );
}
