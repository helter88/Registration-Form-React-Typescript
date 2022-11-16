import React from 'react';
import Register from './components/Register';
import Background from './components/ui/Background';

function App() {
  return (
    <>
    <Background />
      <div className='max-w-full flex justify-center '>
      <div className='max-w-[26rem] '>
         <Register/>
      </div>
     
    </div>
    </>
    
    
  );
}

export default App;
