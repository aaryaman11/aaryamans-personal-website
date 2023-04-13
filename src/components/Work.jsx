import React from 'react';
import Spacegame from '../assets/spacegame.jpg';
import Visualization from '../assets/visualiztion_tool.jpg';
import Notify from '../assets/blockchain.jpg';
import Robot from '../assets/ant.png';

const Work = () => {
  return (
    <div name="work"className="w-full bg-[#0a192f] md:h-screen text-gray-300">
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div className="pb-8">
                <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-green-600">Work</p>
                <p className="py-6">Check out some of my recent work</p>
            </div>
            {/* container card of project */}
            {/* to increase the number of projects increase the md:grid-cols-2*/}
            <div  className='grid sm:grid-cols-2 md:grid-cols-2 gap-4'>
                <div style={{backgroundImage: `url(${Visualization})`}} className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div">
                    {/*hover  effect*/}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            3D Visualization Tool
                        </span>
                        <div className='pt-8 text-center'>
                            <a href="https://ntoolsbrowser.github.io/">
                                <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">demo</button>
                            </a>
                            <a href="https://github.com/ntoolsbrowser/ntoolsbrowser.github.io">
                                <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">code</button>
                            </a>
                        </div>
                    </div>

                </div>
                <div style={{backgroundImage: `url(${Notify})`}} className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div">
                    {/*hover  effect*/}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            BlockNotify
                        </span>
                        <div className='pt-8 text-center'>
                            <a href="https://blocknotify.net/">
                                <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">demo</button>
                            </a>
                            <a href="https://github.com/aaryaman11/blocknotify.net">
                                <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">code</button>
                            </a>
                        </div>
                    </div>

                </div>
            
            
                <div style={{backgroundImage: `url(${Spacegame})`}} className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div">
                    {/*hover  effect*/}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            SpaceShip Game
                        </span>
                        <div className='pt-8 text-center'>
                            <a href="https://aaryaman11.github.io/cs460student/04/index.html">
                                <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">demo</button>
                            </a>
                            <a href="https://github.com/aaryaman11/cs460student/tree/main/04">
                                <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">code</button>
                            </a>
                        </div>
                    </div>

                </div>
                <div style={{backgroundImage: `url(${Robot})`}} className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div">
                    {/*hover  effect*/}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            Virtual Robot
                        </span>
                        <div className='pt-8 text-center'>
                            <a href="https://aaryaman11.github.io/cs460student/08/index.html">
                                <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">demo</button>
                            </a>
                            <a href="https://github.com/aaryaman11/cs460student/tree/main/08">
                                <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">code</button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      
    </div>
  );
}

export default Work;
