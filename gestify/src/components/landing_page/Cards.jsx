import React from "react";
import Single from "../../assets/single.png";
import Double from "../../assets/double.png";
import Triple from "../../assets/triple.png";
import { Link } from "react-router-dom";

const Cards = () => {
  return (
    <div
      className="w-full pt-[2rem] pb-[14rem] px-4 bg-white mt-[100px]"
      id="secfive"
    >
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8">
        <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
          <img
            className="w-20 mx-auto mt-[-3rem] bg-white"
            src={Single}
            alt="/"
          />
          <h2 className="text-2xl font-bold text-center py-8">Dashboard</h2>
          <p className="text-center text-4xl font-bold">Efficiency</p>
          <div className="text-center font-medium">
            <p className="py-2 border-b mx-8 mt-8">Panoramic in real time</p>
            <p className="py-2 border-b mx-8">Better business performance</p>
            <p className="py-2 border-b mx-8">graphs and statistics</p>
          </div>
          {/* <button className="bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3">
            Get Started
          </button> */}
        </div>
        <div className="w-full shadow-xl bg-gray-100 flex flex-col p-4 md:my-0 my-8 rounded-lg hover:scale-105 duration-300">
          <img
            className="w-20 mx-auto mt-[-3rem] bg-transparent"
            src={Double}
            alt="/"
          />
          <h2 className="text-2xl font-bold text-center py-8">
            Project management
          </h2>
          <p className="text-center text-4xl font-bold">Integration</p>
          <div className="text-center font-medium">
            <p className="py-2 border-b mx-8 mt-8">
              Monitor the progress of projects
            </p>
            <p className="py-2 border-b mx-8">Assign tasks</p>
            <p className="py-2 border-b mx-8">Manage resources efficiently</p>
          </div>
          <Link to={"/login"}>
            <button className="bg-black text-[#00df9a] hover:bg-teal-500 w-[200px] ml-[84px] rounded-md font-medium my-6 mx-auto px-6 py-3">
              Get Started
            </button>
          </Link>
        </div>
        <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
          <img
            className="w-20 mx-auto mt-[-3rem] bg-white"
            src={Triple}
            alt="/"
          />
          <h2 className="text-2xl font-bold text-center py-8">
            Customer management
          </h2>
          <p className="text-center text-4xl font-bold">Scalability</p>
          <div className="text-center font-medium">
            <p className="py-2 border-b mx-8 mt-8">
              Track customer information
            </p>
            <p className="py-2 border-b mx-8">Manage interactions</p>
            <p className="py-2 border-b mx-8">Track sales</p>
          </div>
          {/* <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>Get Started</button> */}
        </div>
      </div>
    </div>
  );
};

export default Cards;
