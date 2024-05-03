export function IntTable({ kp1, kp2, kp3, kp4, kp5, kp6, kp7, kp8, kp9 }) {
  return (
    <>
      <div className="text-center border-b-2 border-gray-400 grid grid-cols-9 bg-[#89f9ea] justify-center items-center w-[65%] text-[14px] font-semibold">
        <div className="text-center py-2 border-gray-400">{kp1}</div>
        <div className="text-center py-2 border-l-2 border-gray-400">{kp2}</div>
        <div className="text-center py-2 border-l-2 border-gray-400">{kp3}</div>
        <div className="text-center py-2 border-l-2 border-gray-400">{kp4}</div>
        <div className="text-center py-2 border-l-2 border-gray-400">{kp5}</div>
        <div className="text-center py-2 border-l-2 border-gray-400">{kp6}</div>
        <div className="text-center py-2 border-l-2 border-gray-400">{kp7}</div>
        <div className="text-center py-2 border-l-2 border-gray-400">{kp8}</div>
        <div className="text-center py-2 border-l-2 border-gray-400">{kp9}</div>
      </div>
    </>
  );
}
