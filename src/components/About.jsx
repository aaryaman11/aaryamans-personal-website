import React from 'react';

const About = () => {
  return (
    <div name="about" className='w-full h-screen bg-[#0a192f] text-gray-300'>
        <div className='flex flex-col justify-center items-center w-full h-full'>
            <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
                <div className="sm:text-right pb-8 pl-4">
                    <p className='text-4xl font-bold inline border-b-4 border-green-600'>About</p>
                </div>
                <div></div>
            </div>
            <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                <div className='sm:text-right text-4xl font-bold'>
                    <p>Hi. I'm Aaryaman, nice to meet you. Please take a look around.</p> 
                </div>
                <div>
                    <p>
                    I am passionate about utilizing my skills in software development and neurological research to drive innovation and make a positive impact in the world. With my technical expertise, leadership skills, and commitment to excellence, I am confident that I can make a valuable contribution to any organization. I specialize in front-end development, currently looking for full-time roles for 2023. 
                    If you are a professional who is looking to build a team or need a full-stack engineer, please feel free to reach out!
                    </p>
                </div>
            </div>
        </div>
    </div>
  );
}

export default About;
