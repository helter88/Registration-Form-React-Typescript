import React from 'react'
import  polishFlag  from '../../icons/flags/poland.svg';
import  americanFlag  from '../../icons/flags/american.svg';

interface DropdownType {
  style: string
}

const Dropdown: React.FC<DropdownType>= (props) => {
  return (
   <div className={props.style}>
      <div className='border rounded-lg p-2 py-3'>
          <img className= "h-4" src={polishFlag} alt='polishFlag' />
      </div>
      <ul className='border rounded-md absolute w-48'>
        <li>
          <a className='flex ml-4'> <img className= "h-4" src={polishFlag} alt='polishFlag' /> Polski</a>
          </li>
        <li>
        <a className='flex ml-4'> <img className= "h-3.5" src={americanFlag} alt='americanFlag' /> English</a>
          </li>
      </ul>
       
   </div>
  )
}

export default Dropdown
