import { Split } from 'lucide-react'
import React from 'react'

function Title({ name, sub }) {
  let titleOne = name.split(" ")[0];
  let titleTwo = name.split(" ")[1];
  let titleThree = name.split(" ")[2];

  return (
    <div className='flex flex-col justify-center items-center min-w-70 md:w-2xl p-3 mx-2 text-white rounded-full bg-white/15 backdrop-blur-md border border-white/15 shadow-lg gap-2 hover:scale-105 transition-transform duration-300'>
      <h2 className='text-2xl md:text-4xl font-semibold text-center'>
          {titleOne + " "}
        <span className='bg-gradient-to-tl from-red-500 to-orange-300 bg-clip-text text-transparent'>
          {titleTwo + " " + (titleThree ? titleThree : "")}
        </span>
      </h2>
      <h3 className='text-center text-sm sm:text-md text-gray-300'>
        {sub}
      </h3>
    </div>
  )
}

export default Title