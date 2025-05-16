import React, { useEffect, useState } from 'react';
import { testimonials } from '../data/testimonials';
import '../fonts.css'

const TestimonialSection = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index) => {
    setCurrent(index);
  };

  return (
    <div className="bg-purple-50 py-15 md:py-20 font-['Inter'] px-[8vw] md:px-0">
      <h2 className="text-2xl md:text-3xl font-bold text-center text-purple-950 mb-2 md:mb-2">What Students Say</h2>
      <div className="flex justify-center items-center relative">
        <div className="w-full max-w-3xl overflow-hidden">
          <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${current * 100}%)` }}>
            {testimonials.map((t, i) => (
              <div key={i} className="min-w-full px-4 flex items-center gap-6">
                <img src={t.image} alt={t.name} className="w-20 h-20 rounded-full border-4 border-purple-300 object-cover" />
                <div>
                  <p className="text-purple-950 text-sm md:text-lg italic">"{t.text}"</p>
                  <p className="text-purple-800 font-semibold mt-2">{t.name}</p>
                  <p className="text-purple-600 text-xs md:text-sm">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Dots */}
      <div className="flex justify-center mt-6 space-x-3">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full ${current === index ? 'bg-purple-600' : 'bg-purple-300'} transition`}
          />
        ))}
      </div>
    </div>
  );
};

export default TestimonialSection;
