import React from 'react'



const Background: React.FC = (props) => {
  return (
    <div className="w-screen h-screen fixed -z-10 ">
        <div className='h-16 w-16 bg-amber-200 absolute top-[170px] left-[79px] rounded-md ' />
        <div className='h-3 w-3  bg-indigo-500 absolute top-[105px] left-[40%] ' />
        <div className='h-8 w-8 bg-orange-100 absolute top-[130px] left-[50%] ' />
        <div className='h-[152px] w-[152px] rounded-xl bg-blue-50 absolute top-[30%] left-[60%] ' />
        <div className='h-6 w-6 bg-violet-50 absolute top-[75%] left-[79px] ' />
    </div> 
  )
}

export default Background
