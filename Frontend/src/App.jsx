import { useState } from 'react';
import './styles/tailwind.css';  // Ensure this path is correct
import Modal from './components/Modal';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';  // Corrected import path
import User from './pages/Admin';
import { Search } from 'lucide-react';
import TopDestinatiom from './pages/TopDestination';
import TopDestination from './pages/TopDestination';
import Rides from './pages/Rides';
import Hotels from './pages/Hotels';
import Contact from './pages/Contact';
import About from './pages/About';
import Admin from './pages/Admin';

function App() {
  const [count, setCount] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [signUp, isSignUp] = useState(false);
  const [isSignIn, setSignIn] = useState(false);
  const [isAdmin, setAdmin] = useState(true);

  const handleClick = () => {
    isSignUp(false);
    setShowModal(true);
  };
  const handleClick1 = () => {
    isSignUp(true);
    setShowModal(true);
  };

  return (
    <Router> {/* Wrap the entire app inside Router */}
      <div
        className=" bg-fixed bg-cover bg-center h-screen bg-white"
         // Correct way to set background image
      >
        {/* Render navigation conditionally based on isSignIn state */}
        
          <nav className="flex justify-between items-baseline  w-full p-5 nav ">
            <div className="flex items-baseline ">
              <Link to="/home" className="text-2xl font-serif font-bold">Roam...</Link>
            </div>
           <div className='flex justify-center'>
            <input className=' rounded-lg mr-4' type='name' placeholder='banglades....' /> 
            <div className='mt-2'>
            <Search />
            </div>
            
           </div>
            <div className="flex items-baseline">
              {isSignIn ? (
              <div className='flex flex-row gap-3'>
                <Link to = '/top-destination' className=" hover:text-gray-500 font-serif font-bold">Today's Hit</Link>
                <Link to = '/hotel' className=" hover:text-gray-500 font-serif font-bold">Hotels</Link>
                <Link to = '/ride' className=" hover:text-gray-500 font-serif font-bold">Rides</Link>

                <Link to = '/contact' className=" hover:text-gray-500 font-serif font-bold">Contact</Link>
                <Link to = '/about' className=" hover:text-gray-500 font-serif font-bold">About</Link>
               {
                isAdmin && (
                  <Link to = '/admin' className=" hover:text-gray-500 font-serif font-bold">Admin</Link>
                )
               }
              


              </div>
              ):(
                <>
                <button  onClick={handleClick}>
                Sign In
              </button>
              <p className="mx-2">Or</p>
              <button onClick = {handleClick1}>
                Sign Up
              </button>

                </>
                
              )}
             
            </div>
          </nav>
          {showModal && <Modal onClose={() => setShowModal(false)} signUp={signUp} />}

        {/* Routes */}
        <Routes>
          {/* Define a route for home page */}
          <Route path="/home" element={<Home />} />
          <Route path = '/admin' element = {<Admin/>} />
          <Route path = '/about' element = {<About/>} />
          <Route path = '/contact' element = {<Contact/>} />
          <Route path = '/hotel' element = {<Hotels/>} />
          <Route path = '/ride' element = {<Rides/>} />
          <Route path = '/top-destination' element = {<TopDestination/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
