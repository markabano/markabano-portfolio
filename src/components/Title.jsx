import React from 'react'

function Title({name}) {
  return (
    <div className='flex justify-center items-center py-2 text-white w-2xl rounded-full bg-white/15 backdrop-blur-md border border-white/15 shadow-lg'>
          <h1 className='text-4xl'>{ name }</h1>
    </div>
  )
}

export default Title