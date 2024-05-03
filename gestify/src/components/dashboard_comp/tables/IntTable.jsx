export function IntTable({ kp1, kp2, kp3, kp4, kp5, kp6, kp7 }) {
  return (
    <>
      <div className="border-b-2 border-gray-400 grid grid-cols-7 bg-[#89f9ea] justify-center items-center w-[65%] text-[14px] font-semibold">
        <div className="px-14 py-2 border--2 border-gray-400">{kp1}</div>
        <div className="px-14 py-2 border-l-2 border-gray-400">{kp2}</div>
        <div className="px-14 py-2 border-l-2 border-gray-400">{kp3}</div>
        <div className="px-14 py-2 border-l-2 border-gray-400">{kp4}</div>
        <div className="px-14 py-2 border-l-2 border-gray-400">{kp5}</div>
        <div className="px-14 py-2 border-l-2 border-gray-400">{kp6}</div>
        <div className="px-14 py-2 border-l-2 border-gray-400">{kp7}</div>
      </div>
    </>
  );
}
