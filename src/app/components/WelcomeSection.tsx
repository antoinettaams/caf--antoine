'use client'
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { FaCoffee, FaUsers, FaThumbsUp, FaCalendarAlt } from 'react-icons/fa';
import { MdOutlineArrowRightAlt } from 'react-icons/md';

const WelcomeAntoine: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    { src: '/images/cafe1.jpg', alt: 'Tasse de café' }, 
    { src: '/images/cafe2.jpg', alt: 'Ambiance du café' },
    { src: '/images/cafe3.jpg', alt: 'Barista en action' },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <section
      className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-3 md:h-[75vh] gap-4 p-4 md:p-10 border-t border-cream m-8"
    >
      {/* Bloc de texte */}
      <div
        className="text-cream p-6 rounded-lg flex flex-col justify-center md:col-span-2 md:row-span-2"
      >
        <h1 className="text-4xl lg:text-6xl font-bold">
          Bienvenue à toi, Antoinais!
        </h1>
        <p className="mt-2 text-lg lg:text-xl">
          Café Antoine est un lieu où les saveurs du café se mêlent à
          la convivialité des Antoinais.
        </p>
        <a
          href="#about"
          className="mt-4 btn rounded-full w-fit bg-cream text-black text-lg font-bold flex items-center"
        >
          Découvrir
          <MdOutlineArrowRightAlt className="bg-black text-cream p-1 ml-6 rounded-full transform rotate-45 text-2xl" />
        </a>
      </div>

      {/* Bloc Compteur 1 */}
      <div
        className="bg-antoine text-cream p-6 rounded-lg flex items-center space-x-4 hover:scale-105 transition-transform"
      >
        <FaCoffee className="text-4xl md:text-2xl lg:text-4xl" />
        <div className="text-center">
          <span className="text-4xl md:text-2xl lg:text-4xl font-bold">20+</span>
          <p className="text-lg">Éléments de menu</p>
        </div>
      </div>

      {/* Bloc Compteur 2 */}
      <div
        className="bg-antoine text-cream p-6 rounded-lg flex items-center space-x-4 hover:scale-105 transition-transform"
      >
        <FaUsers className="text-4xl md:text-2xl lg:text-4xl" />
        <div className="text-center">
          <span className="text-4xl md:text-2xl lg:text-4xl font-bold">30+</span>
          <p className="text-lg">Visites par jour</p>
        </div>
      </div>

      <div
        className="relative w-full rounded-lg overflow-hidden md:col-span-2 md:row-span-2"
      >
        <div className="carousel w-full h-full relative" data-carousel>
          <Image
            src="/assets/images/cafe1.jpg"
            alt={slides[currentSlide].alt}
            className="w-full h-full object-cover"
            fill
            priority={currentSlide === 0}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      </div>

      {/* Bloc Compteur 3 */}
      <div
        className="bg-antoine text-cream p-6 rounded-lg flex items-center space-x-4 hover:scale-105 transition-transform"
      >
        <FaThumbsUp className="text-4xl md:text-2xl lg:text-4xl" />
        <div className="text-center">
          <span className="text-4xl md:text-2xl lg:text-4xl font-bold">1000+</span>
          <p className="text-lg">Avis positifs</p>
        </div>
      </div>

      {/* Bloc Compteur 4 */}
      <div
        className="bg-antoine text-cream p-6 rounded-lg flex items-center space-x-4 hover:scale-105 transition-transform"
      >
        <FaCalendarAlt className="text-4xl md:text-2xl lg:text-4xl" />
        <div className="text-center">
          <span className="text-4xl md:text-2xl lg:text-4xl font-bold">50+</span>
          <p className="text-lg">Événements organisés</p>
        </div>
      </div>
    </section>
  );
};

export default WelcomeAntoine;