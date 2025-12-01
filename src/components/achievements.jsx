"use client";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";

export default function HeroSlider() {
  // Add as many images as you want
  const IMAGES = [
    "/images/Achievements.png",
    "/images/campus1.jpg",
    "/images/campus2.jpg",
    "/images/campus3.jpg",
  ];

  // Duplicate first & last images for infinite loop effect
  const images = [IMAGES[IMAGES.length - 1], ...IMAGES, IMAGES[0]];

  const [index, setIndex] = useState(1);
  const [transition, setTransition] = useState(true);
  const slideRef = useRef();

  // Auto-slide every 4 seconds
  useEffect(() => {
    const interval = setInterval(nextSlide, 4000);
    return () => clearInterval(interval);
  });

  const nextSlide = () => setIndex((prev) => prev + 1);
  const prevSlide = () => setIndex((prev) => prev - 1);

  // Handle infinite loop jump
  useEffect(() => {
    if (index === images.length - 1) {
      setTimeout(() => {
        setTransition(false);
        setIndex(1);
      }, 700);
    }

    if (index === 0) {
      setTimeout(() => {
        setTransition(false);
        setIndex(images.length - 2);
      }, 700);
    }

    const t = setTimeout(() => setTransition(true), 50);
    return () => clearTimeout(t);
  }, [index, images.length]);

  return (
    <div className="">
      {/* Title */}
      <div className="py-4 text-center text-xl font-semibold md:py-7">
        Achievements
      </div>

      {/* SLIDER */}
      <div className="relative w-full overflow-hidden shadow-lg">

        {/* Images Track */}
        <div
          ref={slideRef}
          className={`flex ${transition ? "transition-transform duration-700 ease-in-out" : ""
            }`}
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {images.map((src, i) => (
            <div
              key={i}
              className="
                min-w-full 
                relative 
                h-[180px]           
                sm:h-60        
                md:h-[300px]        
              "
            >
              <Image
                src={src}
                alt={`Slide ${i}`}
                fill
                className="object-cover"
                priority={i === 1}
              />
            </div>
          ))}
        </div>

        {/* PREV BUTTON */}
        <button
          onClick={prevSlide}
          className="
            absolute left-2 sm:left-4 
            top-1/2 -translate-y-1/2
            bg-black/40 text-white 
            p-2 sm:p-3 
            rounded-full 
            text-sm sm:text-xl 
            hover:bg-black/60 transition
          "
        >
          ❮
        </button>

        {/* NEXT BUTTON */}
        <button
          onClick={nextSlide}
          className="
            absolute right-2 sm:right-4 
            top-1/2 -translate-y-1/2
            bg-black/40 text-white 
            p-2 sm:p-3 
            rounded-full 
            text-sm sm:text-xl 
            hover:bg-black/60 transition
          "
        >
          ❯
        </button>
      </div>
    </div>
  );
}
