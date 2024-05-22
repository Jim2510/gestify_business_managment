import React from "react";
import "./Sectionthree.css";
import Video from "../../assets/ana.mp4";
import Tv from "../../assets/tvv.png";

const SectionThree = () => {
  return (
    <div className="demo w-full justify-center items-center " id="secthree">
      <div className="container w-full">
        <div className="col-1 ml-32">
          <p className="text-[#00df9a] font-bold ">DATA ANALYTICS DASHBOARD</p>
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
            Manage Data Analytics Centrally
          </h1>
          <p className="">
            Every single one of our financial advisors receives rigorous
            training according to John Doe’s philosophy based on academic
            research (including that of a Nobel laureate in Economics) and
            Behavioral Finance.
          </p>
        </div>
        <div className="flex justify-center items-center relative">
          <img
            className="absolute flex w-[600px] top-[-120px] "
            src={Tv}
            alt=""
          />
          <video
            className="absolute top-[-10px]"
            width="570"
            height="320"
            src={Video}
            title="Youtube video player"
            autoPlay
            loop
            controls
            muted
          />
        </div>
      </div>
    </div>
  );
};

export default SectionThree;
