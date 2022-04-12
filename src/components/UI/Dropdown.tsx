import React, { useState } from 'react'
import  polishFlag  from '../../icons/flags/poland.svg';
import  americanFlag  from '../../icons/flags/american.svg';

interface DropdownType {
  style: string
}

const displayMenu = (fn1: ()=>void, fn2: ()=>void) => {

  return(
    <ul className='rounded-md absolute w-48 shadow-md py-2' onMouseEnter={fn1} onMouseLeave={fn2}>
<li className='hover:bg-slate-100 py-2 text-slate-500 hover:text-slate-900 cursor-pointer'>
  <a className='flex ml-4'> <img className= "h-4" src={polishFlag} alt='polishFlag' /> <p className ="ml-2 text-sm font-semibold">Polski</p></a>
  </li>
<li  className='hover:bg-slate-100 py-2 text-slate-500 hover:text-slate-900 cursor-pointer'>
<a className='flex ml-4'> <img className= "h-3.5" src={americanFlag} alt='americanFlag' /> <p className ="ml-2 text-sm font-semibold -translate-y-1">English</p></a>
  </li>
</ul>
  )
} 

const Dropdown: React.FC<DropdownType>= (props) => {
  const [showMenu, setShowMenu] = useState(false);

  const enterHandler = () =>{
    setShowMenu(true);
  }
  const leaveHandler = () =>{
    setShowMenu(false)
  }


  return (
   <div className={props.style}>
      <div className='border rounded-lg p-2 py-3' onMouseEnter={enterHandler} onMouseLeave={leaveHandler}>
          <img className= "h-4" src={polishFlag} alt='polishFlag' />
      </div>
      {showMenu && displayMenu(enterHandler, leaveHandler)}
       
   </div>
  )
}

export default Dropdown
