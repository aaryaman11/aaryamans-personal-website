import React from 'react';
import {HiArrowNarrowRight} from 'react-icons/hi';
import {Link} from 'react-scroll';
import work from '../components/Work';

const Home = ({work}) => {
  return (
    <div name="home" className="w-full h-screen bg-[#0a192f]">
      

      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-green-600">Hi, My name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">Aaryaman Sharma</h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-[#8892b0]">I'm a Software Developer.</h2>
        <p className="text-[#8892b0] py-4 max-w-[700px]">I'm software developer sepecializing in building web applications. Currently, I am focused on building responsive android applications.</p>
        <div className="flex">
          <button onClick={work} className=" group text-white border-2 px-6 py-3 my-2 flex items-center hover:bg-green-600 hover:border-green-600">View Work
            <span className="group-hover:rotate-90 duration-300">
              <HiArrowNarrowRight className="ml-3" />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
