import React from 'react'
import  polishFlag  from '../../icons/flags/poland.svg';

const Dropdown: React.FC= () => {
  return (
   <div className='p-1'>
       <img className= "h-8" src={polishFlag} alt='polishFlag' />
   </div>
  )
}

export default Dropdown
