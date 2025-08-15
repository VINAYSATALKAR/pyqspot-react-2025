import React from "react";
import '../fonts.css'
import { MdCall } from "react-icons/md";
import { MdWhatsapp } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaTelegram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
const Footer = () => {
  return (
    <>
     <footer className="bg-gray-800 text-white py-8 z-98 sticky px-[8vw] font-['poppins']">
      <div className="container mx-auto px-4">
        <div className="md:flex md:justify-between md:items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-lg font-bold mb-2 font-['poppins']">About PyqSPOT</h3>
            <p className="text-sm w-70 font-['poppins']">
            PYQSpot is your go-to platform for previous year question papers, helping students from 100+ colleges prepare smarter and succeed with confidence. Ace your exams with the right resources!.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-2">Contact Us</h3>
            <div className="text-sm flex items-center "> <MdCall className="pr-1 text-lg"/> <p>+91 8767834050</p></div>
            <div className="text-sm flex items-center "><MdWhatsapp className="pr-1 text-lg"/><p>+91 9673089427</p></div>
            <div className="text-sm flex items-center"><MdEmail className="pr-1 text-lg"/><p>pyqspot@gmail.com</p></div>
          </div>
        </div>

        <div className="flex justify-center mt-8 space-x-4">
          <a  href="https://chat.whatsapp.com/HJ0l5GpnlP0Ix9M9h1Vvef?mode=ac_t" className="hover:text-gray-300 ">
            <i className="fab fa-instagram fa-2x"></i>
            <IoLogoWhatsapp className="md:text-3xl text-2xl hover:text-green-400 hover:scale-120 transition-all"/>
          </a>
          {/* <a href="https://t.me/pyqspot" className="hover:text-white">
          <FaTelegram className="md:text-3xl text-2xl hover:text-sky-400 hover:scale-120 transition-all"/>
          </a> */}
          <a href="https://www.linkedin.com/company/pyqspot/" className="hover:text-gray-300">
            <FaLinkedin className="md:text-3xl text-2xl hover:text-blue-700 hover:scale-120 transition-all"/>
          </a>
        </div>

        <div className="mt-8 text-center">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} PyqSPOT All rights reserved.
          </p>
        </div>
      </div>
    </footer>
    </>
  );
};

export default Footer;
