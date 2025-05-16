import React from 'react';
import { branchData } from '../data/branchData';
import { Link } from 'react-router-dom';
import '../fonts.css'

const BranchSection = () => {
  return (
    <div className="py-6 px-[8vw] font-['Inter']">
       <section className=" pt-10 text-center">
              <div className="max-w-4xl mx-auto">
                <h1 className="text-4xl font-extrabold ">Get Exam-Ready with Quality PYQs</h1>
                <p className="text-xl font-bold pt-2 text-purple-950 pb-2">Branches We Cover</p>
                {/* <a href="#branches" className="inline-block mt-6 bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition">
                  Branches We covers
                </a> */}
              </div>
            </section>
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-wrap gap-1 justify-center mb-4">
          {branchData.map((branch, i) => (
            <a
              key={i}
              href={`#${branch.slug}`}
              className="bg-transparent border-2 border-purple-950 text-purple-950 px-3 py-1.5 rounded-full hover:scale-105 text-sm transition"
            >
              {branch.branch}
            </a>
          ))}
        </div>
        <div className="space-y-8">
          {branchData.map((branch, i) => (
            <div key={i} id={branch.slug}>
              <h2 className="text-xl font-bold mb-4 text-gray-800">
                {branch.branch}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                {branch.years.map((year, j) => (
                  <div
                    key={j}
                    className="rounded-lg overflow-hidden shadow-sm hover:shadow-md hover:scale-105 transition duration-300 bg-white"
                  >
                    
                       
                        <a href={year.link}><img
                      src={year.image}
                      alt={year.label}
                      className="md:h-50 h-46 w-full object-cover"
                      
                    /></a> 
                     {/* <Link
                        to={year.link}
                        className=" absolute bottom-500 z-100 bg-blue-600 text-white px-3 py-1.5 rounded-full hover:bg-blue-700 text-sm"
                      >
                        Explore
                      </Link> */}
                        
                    
                   
                    
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BranchSection;


