import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'
import {Link} from 'react-scroll'
import triangle from '../assets/triangle.avif';

const Home = () => {
  return (
    <div name='home' 
    // style={{ backgroundImage: `url(${triangle})` }}
    className="w-full h-screen bg-no-repeat bg-cover  bg-[#0a192f]">
       
            {/* Container */}
            <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
                <p className='text-pink-600'>Hi, my name is</p>
                <h3 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>Josh Panebianco</h3>
                <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>Junior Software Developer.</h2>
                <p className='text-[#8892b0] py-4 max-w-[700px]'>Full-Stack Software Developer with an interest in Web3 and Blockchain technology. </p>
                <div>
                    <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600'>
                    <Link to="projects" smooth={true} duration={500}> View Projects </Link>
                    <span className='group-hover:rotate-90 duration-300'>
                    <HiArrowNarrowRight className='ml-3' />
                    </span>
                    </button>
                </div>
            </div>
    </div>
  )
}

export default Home