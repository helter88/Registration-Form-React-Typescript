import React from 'react'
import  polishFlag  from '../../icons/flags/poland.svg';

interface DropdownType {
  style: string
}

const Dropdown: React.FC<DropdownType>= (props) => {
  return (
   <div className={props.style}>
      <div className='border rounded-lg p-2 py-3'>
          <img className= "h-4" src={polishFlag} alt='polishFlag' />
      </div>
       
   </div>
  )
}

export default Dropdown
