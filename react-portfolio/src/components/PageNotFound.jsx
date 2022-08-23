import React from 'react'

const PageNotFound = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#0a192f] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <div className="flex flex-col justify-center items-center w-full h-full">
          <p className="text-4xl sm:text-7xl font-bold">404 Error</p>
          <p className="text-4xl sm:text-7xl font-bold">Page Not Found</p>
          <p className="sm:text-2xl pt-6 text-[#8892b0]">It looks like this page does not exist :( </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageNotFound