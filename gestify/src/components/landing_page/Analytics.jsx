import React from "react";
import Laptop from "../../assets/laptop.jpg";
import { Link } from "react-router-dom";

const Analytics = () => {
  return (
    <div className="w-full bg-white pt-16 pb-20 px-4 " id="sectwo">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        <img className="w-[500px] mx-auto my-4" src={Laptop} alt="/" />
        <div className="flex flex-col justify-center ml-20">
          <p className="text-[#00df9a] font-bold ">DATA ANALYTICS DASHBOARD</p>
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
            Manage Data Analytics Centrally
          </h1>
          <p>
            Gestify's data analytics function transforms company data into
            strategic information. With advanced reporting and visualization
            tools, you can monitor performance in real time, identify trends and
            growth opportunities, and make informed decisions based on accurate
            data. The integration with the various company departments allows a
            holistic view of operations, facilitating the planning and
            optimization of processes.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
