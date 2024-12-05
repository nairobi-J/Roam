import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './styles/tailwind.css';  // Ensure this path is correct
import Modal from './components/Modal';

function App() {
  const [count, setCount] = useState(0)
  const [showModal, setShowModal] = useState(false);
  const [signUp, isSignUp] = useState(false)
  const handleClick = () => {
    isSignUp(false);
    setShowModal(true);
   }
   const handleClick1 = () => {
    isSignUp(true);
    setShowModal(true);
   }

  return (
    <>
  
  
    
  
   <div
  className="flex flex-row items-baseline justify-between bg-fixed bg-cover bg-center h-screen"
  style={{ backgroundImage: 'url(/bg.webp)' }} // Correct way to set background image
>
  <div className='flex flex-row items-baseline justify-start'>
  <h1 className='text-2xl pb-20 font-serif font-bold'>Roam...</h1>
  </div>
  <div className='flex flex-row items-baseline justify-end'>
  <button className='' onClick={handleClick}> sign in</button>
        
        <p> Or  </p>
        
         
        <button className='' onClick={handleClick1}> sign Up</button>

        {showModal && <Modal onClose = {() => setShowModal(false)} signUp = {signUp} />}
  </div>
        
       </div>
    
    </>
  )
}

export default App
