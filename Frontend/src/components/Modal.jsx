import { X } from 'lucide-react';
import React, { useState } from 'react';

const Modal = ({onClose,signUp}) => {


  return (
    <div  className='fixed inset-0 bg-black bg-opacity-40 backdrop-blur-sm flex flex-col gap-4 items-center justify-center '>
       
      
        
       
        
        
      <form className='flex flex-col gap-8 justify-center items-center bg-blue-100 rounded-md p-10'>
      <div className="pl-60">  <button className=' bg-red-500 place-self-end hover:bg-red-700 hover:text-white' onClick={onClose}>  < X size = {10}/></button></div>
      <div className='flex flex-col gap-2 justify-center items-baseline'>
        {signUp &&  (<><label >
           Name:  
       
        </label>
        <input type="name" placeholder="Enter your Name" className=''/></>) }
     
      <label >
           Email:  
       
        </label>
        <input type="email" placeholder="Enter your Email" className=''/>
        <label>
          Password:
       
        </label>
        <input type="password" placeholder="Enter your password" className=''/>
       
        
      </div>
        
      <button type="submit">Submit</button>
      </form>
    
       
    </div>
  );
}

export default Modal;
