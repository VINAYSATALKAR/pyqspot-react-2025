import React from 'react'
import { NavLink } from 'react-router-dom';
import logo from "../assets/logos/PYQSPOT-LOGO2.svg"
import '../fonts.css'

import { FiDownload } from 'react-icons/fi';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
  return (
    
    <>
            <nav className="bg-white sticky drop-shadow-xl py-0 my-0 z-100">
            <div className="container mx-auto px-[8vw]">
                <div className="flex items-center justify-between">
                    {/* Logo (Left - both mobile & desktop) */}
                    <div className="text-xl font-semibold text-gray-800">
                        <NavLink to="/"><img className='md:w-20 w-15' src={logo} alt="PyqSPOT" /></NavLink>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden absolute right-10">
                        <button onClick={toggleMenu} type="button" className="text-gray-500 hover:text-gray-800 focus:outline-none focus:text-gray-800" aria-label="Menu">
                            <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                                {isMenuOpen ? (
                                    <path fillRule="evenodd" d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"/>
                                ) : (
                                    <path fillRule="evenodd" d="M4 5h16a1 1 0 0 1 0.993.883L21 6c0 .552-.458 1.007-1.006 1.007H4.006A1.009 1.009 0 0 1 3 6c0-.552.458-1.007 1.006-1.007zm0 6h16a1 1 0 0 1 0.993.883L21 12c0 .552-.458 1.007-1.006 1.007H4.006A1.009 1.009 0 0 1 3 12c0-.552.458-1.007 1.006-1.007zm0 6h16a1 1 0 0 1 0.993.883L21 18c0 .552-.458 1.007-1.006 1.007H4.006A1.009 1.009 0 0 1 3 18c0-.552.458-1.007 1.006-1.007z"/>
                                )}
                            </svg>
                        </button>
                    </div>

                    {/* Desktop Menu (Right) */}
                    <div className='flex md:justify-between'>
                         <div className="hidden md:flex items-center md:space-x-6">
                        <NavLink className='text-gray-900 hover:scale-105 transition-all hover:text-purple-900 hover:underline hover:underline-offset-4 font-semibold font-["poppins"] block px-3 py-2 rounded-md text-base ' to="/">Home</NavLink>
                        <a className='text-gray-900 hover:scale-105 transition-all hover:text-purple-900 hover:underline hover:underline-offset-4 font-semibold font-["poppins"] block px-3 py-2 rounded-md text-base' href="/#branches">Branches</a>
                        <a className='text-gray-900 hover:scale-105 transition-all hover:text-purple-900 hover:underline hover:underline-offset-4 font-semibold font-["poppins"] block px-3 py-2 rounded-md text-base' href="/#testimonials">Testimonials</a>
                      
                    </div>

                    </div>
                   
                     <a href="https://play.google.com/store/apps/details?id=com.pyqspot.app" className="text-center hidden md:flex md: justify-center items-center gap-2  text-xs bg-gradient-to-r from-blue-700  to-purple-600  text-white cursor-pointer font-semibold py-2 px-4 w-30 hover:scale-105 hover:drop-shadow-xl md:px-0  rounded-md transition-all">
           <FiDownload/> Get App </a>
                </div>

                {/* Mobile Menu (Hidden by default) */}
                <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                    <NavLink className='text-gray-900 hover:scale-105 transition-all hover:text-purple-900 hover:underline hover:underline-offset-4 font-semibold font-["poppins"] block px-3 py-2 rounded-md text-base' to="/">Home</NavLink>
                        <a className='text-gray-900 hover:scale-105 transition-all hover:text-purple-900 hover:underline hover:underline-offset-4 font-semibold font-["poppins"] block px-3 py-2 rounded-md text-base' href="#branches">Branches</a>
                        <a className='text-gray-900 hover:scale-105 transition-all hover:text-purple-900 hover:underline hover:underline-offset-4 font-semibold font-["poppins"] block px-3 py-2 rounded-md text-base' href="#testimonials">Testimonials</a>
                         <a href="#branches" className="text-center justify-center items-center flex gap-2  text-xs bg-gradient-to-r from-blue-700  to-purple-600  text-white cursor-pointer font-semibold py-2 px-4 w-30 hover:scale-105 hover:drop-shadow-xl md:px-0  rounded-md transition-all">
           <FiDownload/> Get App </a>
                    </div>
                </div>
            </div>
        </nav>
    </>
    
  )
}

export default Navbar

    

