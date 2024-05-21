import React from "react";
import "./Sectionthree.css";
import Video from "../../assets/ana.mp4";
import Tv from '../../assets/tvv.png'

const SectionThree = () => {
  return (
    <div className="demo w-full justify-center items-center " id="secthree">
      <div className="container w-full">
        <div className="col-1">
          <p className="text-[#00df9a] font-bold ">DATA ANALYTICS DASHBOARD</p>
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
            Manage Data Analytics Centrally
          </h1>
          <p className="" >
            Every single one of our financial advisors receives rigorous
            training according to John Doe’s philosophy based on academic
            research (including that of a Nobel laureate in Economics) and
            Behavioral Finance.
          </p>
          <button className="bg-black text-[#00df9a] hover:bg-teal-500 w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3">
            Get Started
          </button>
        </div>
        <div className="flex justify-center items-center relative">
            <img className="absolute flex w-[600px] top-[-120px] " src={Tv} alt="" />
          <iframe className="absolute top-[-10px]"
            width="600"
            height="320"
            src={Video}
            title="Youtube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; loop; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
    </div>
  );
};

export default SectionThree;
