import React from 'react';

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-pink-600'>
              About
            </p>
          </div>
          <div></div>
          </div>
          <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
            <div className='sm:text-right text-2xl font-bold'>
              <p>Hi, I'm Josh. On this site you'll see the technologies I have experience with and some of the projects I have built.</p>
            </div>
            <div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus voluptate laboriosam sed veritatis? Ab doloribus sequi accusamus libero. Quae temporibus unde rerum possimus facilis quas blanditiis expedita neque, ratione qui.</p>  
            </div>
          </div>
      </div>
    </div>
  );
};

export default About;