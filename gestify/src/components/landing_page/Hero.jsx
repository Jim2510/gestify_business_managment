import React from 'react';
import { ReactTyped } from "react-typed";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div>
      <div className='max-w-[1000px] mt-[80px] w-full h-screen mx-auto text-center flex flex-col justify-center ' id='secone'>
        <p className='font-bold p-2'>
          EFFICIENCY ELEVATED, GROWTH GUARANTEED
        </p>
        <h1 className='text-9xl font-bold md:py-6'>
          GESTIFY.
        </h1>
        <div className='flex justify-center items-center'>
          <p className='text-5xl font-bold py-4'>
            Fast, flexible solution for
          </p>
          <ReactTyped
          className='md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2'
            strings={['TASK', 'DATA', 'USER']}
            typeSpeed={120}
            backSpeed={140}
            loop
          />
        </div>
        <p className='md:text-4xl text-xl font-bold text-gray-500'>Monitor your company with our management software, thanks to our graphs and analyzes your performance will improve.</p>
        <Link to={'/login'}><button className='bg-[#00df9a] w-[200px] hover:bg-teal-500 rounded-md font-medium my-6 mx-auto py-3 text-black'>Get Started</button></Link>
      </div>
    </div>
  );
};

export default Hero;