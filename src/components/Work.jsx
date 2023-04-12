import React from 'react';

const Work = () => {
  return (
    <div name="work "className="bg-[#0a192f] md:h-screen text-gray-300 w-full">
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div className="pb-8">
                <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-green-600">Work</p>
                <p className="py-6">Check out some of my recent work</p>
            </div>
            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
                <div className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items0center mx-auto content-div">
                    {/*hover  effect*/}
                    <div>
                        <span>

                        </span>
                        <div>
                            <a href="/">
                                <button></button>
                            </a>
                            <a href="/">
                                <button></button>
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
