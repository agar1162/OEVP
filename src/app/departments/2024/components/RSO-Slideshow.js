'use client';
import React, { useState, useEffect } from 'react';
import { useSwipeable } from 'react-swipeable';

const slides = [
  '/departments/rso/spon/1.png',
  '/departments/rso/spon/2.png',
  '/departments/rso/spon/3.png',
  '/departments/rso/spon/4.png',
  '/departments/rso/spon/5.png',
  '/departments/rso/spon/6.png',
  // Add more slides here as needed
];

export default function RSOSlideshow() {
  const [current, setCurrent] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const swipeHandlers = useSwipeable({
    onSwipedLeft: nextSlide,
    onSwipedRight: prevSlide,
    preventScrollOnSwipe: true,
    trackMouse: true,
  });

  return (
    <div className="relative w-full md:w-[80%] mx-auto mt-10" {...swipeHandlers}>
      <div
        className={`relative w-full h-auto ${isMobile ? 'cursor-pointer' : ''}`}
        onClick={(e) => {
          if (!isMobile) return;
          const x = e.nativeEvent.offsetX;
          const width = e.currentTarget.offsetWidth;
          x < width / 2 ? prevSlide() : nextSlide();
        }}
      >
        <img
          src={slides[current]}
          alt={`Slide ${current + 1}`}
          className="w-full h-auto rounded-md shadow-md"
        />

        {/* Arrows for tablet/desktop */}
        {!isMobile && (
          <>
            <button
              onClick={prevSlide}
              className="absolute top-1/2 left-[-50px] transform -translate-y-1/2"
              aria-label="Previous slide"
            >
              <img src="/departments/prev-arrow.svg" alt="Previous" className="w-6 h-6" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute top-1/2 right-[-50px] transform -translate-y-1/2"
              aria-label="Next slide"
            >
              <img src="/departments/next-arrow.svg" alt="Next" className="w-6 h-6" />
            </button>
          </>
        )}
      </div>

      {/* Dots below */}
      <div className="flex justify-center mt-8 space-x-2 mb-10">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`w-2.5 h-2.5 rounded-full ${
              current === idx ? 'bg-[#003A70]' : 'bg-gray-400'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
