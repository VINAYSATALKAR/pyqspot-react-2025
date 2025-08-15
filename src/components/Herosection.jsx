import React from "react";
import heroBackground from "../assets/backgrounds/herobackground.webp";
import heroimage from '../assets/backgrounds/heromodel.webp'
import '../fonts.css'
import { FiDownload } from "react-icons/fi";
import { FaArrowRight } from "react-icons/fa"
const HeroSection = () => {
  return (
    <section
      className="md:h-[90vh] h-[100vh] flex items-center  md:my-0 md:py-0 border-1 border-t-0 border-l-0 border-r-0 border-gray-400  text-white font-['Inter']"
      style={{ backgroundImage: `url(${heroBackground})`, backgroundSize: "cover", backgroundPosition: "center" }}
    >
      <div className="grid grid-cols-1 md:grid-cols-2  w-full drop-shadow-black">
        
        {/* Left Content (Text & CTA) */}
        <div className="flex flex-col justify-center order-2 md:order-1 px-[8vw]  md:mt-0">
          <h1 className="md:text-5xl  md:text-left text-3xl md:mt-0 font-bold text-purple-950">Boost Your CGPA</h1>
          <h1 className="md:text-5xl  md:text-left text-3xl md:mt-0 font-bold text-purple-950">Not Study Hours  </h1>
          <p className="mt-4 text-lg font-medium text-gray-700">
          Your Ultimate Destination For Previous Year Solved Question Papers
          </p>
          {/* <p className="mt-4 text-lg  text-gray-500">
          Top Quality • Easy Download • Zero Confusion
          </p> */}
          <div className="grid grid-cols-2 gap-2 md:gap-0 ">
          
          <a href="https://play.google.com/store/apps/details?id=com.pyqspot.app" className="mt-6 text-center justify-center items-center flex gap-2  text-xs md:text-sm bg-gradient-to-r from-blue-700  to-purple-600  text-white cursor-pointer font-semibold py-2 px-4 w-[90%] hover:scale-105 hover:drop-shadow-xl md:px-0  rounded-md transition-all">
           <FiDownload/> Download App Now
          </a>
<a href="#branches" className="mt-6 text-center justify-center items-center flex gap-2 md:text-sm text-xs bg-transparent border-2  border-purple-950  text-purple-950 cursor-pointer font-semibold py-2 px-4 w-full md:w-[90%] hover:scale-105 hover:drop-shadow-xl md:px-0  rounded-md transition-all">
           Explore Branches <FaArrowRight/>
          </a>

          </div>
          

          <div className="mt-6 md:mt-15 grid grid-cols-3 md:grid-cols-3 gap-8 text-center text-purple-950">
            <div>
              <h2 className="text-sm md:text-lg font-bold">2000+</h2>
              <p className="mt-1 text-xs md:text-sm">Students trusted by</p>
            </div>
            <div>
              <h2 className="text-sm font-bold md:text-lg">100+</h2>
              <p className="mt-1 text-xs md:text-sm">Solutions available</p>
            </div>
            <div>
              <h2 className="text-sm font-bold md:text-lg">60+</h2>
              <p className="mt-1 text-xs md:text-sm">Subjects covered</p>
            </div>
          </div>


        </div>

        {/* Right Image (Model Ad) */}
        <div className="flex   justify-center order-2 md:order-2 ">
          <img src={heroimage} alt="Website Feature" className=" md:mb-0 max-w-md w-full md:scale-123" />
        </div>
      
      </div>
    </section>
  );
};

export default HeroSection;
