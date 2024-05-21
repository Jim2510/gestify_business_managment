export function TextSection() {
  return (
    <>
      <div className="w-full flex py-44">
        <div className="w-[50%] flex flex-col items-center gap-4">
          <h2 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
            Benefits
          </h2>
          <div className="w-[40%] bg-black h-1 "></div>
          <ul className="font-semibold text-[22px] px-32 text-center flex flex-col gap-4 mt-4">
            <li>Real-time data analysis</li>
            <li>Rapid detection and response</li>
            <li>Granular access control</li>
            <li>Adaptation to every type of business need</li>
            <li>Easy to use and understand</li>
            <li></li>
          </ul>
        </div>
        <div className="w-[50%] flex justify-center flex-col items-center gap-4">
          <h2 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
            Features
          </h2>
          <div className="w-[40%] bg-black h-1 "></div>
          <ul className="font-semibold text-[22px] px-32 text-center flex flex-col gap-4 mt-4">
            <li>Experience seamless operations with our management system</li>
            <li>Secure login/logout</li>
            <li>Real-time sales/order monitoring</li>
            <li>Efficient inventory management</li>
            <li>
              Maximize productivity and profitability with data-driven
              decisions.
            </li>
            <li></li>
          </ul>
        </div>
      </div>
    </>
  );
}
