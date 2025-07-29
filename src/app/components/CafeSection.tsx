import React from 'react';
import Image from 'next/image';

const CafeSection: React.FC = () => {
  return (
    <section>
      <div className="relative">
        <Image
          src="/assets/images/cafe3.jpg" 
          alt="Café Antoine interior"
          className="h-[80vh] w-full object-cover opacity-70"
          width={1920} 
          height={1080} 
          priority 
        />
        <div className="absolute inset-0 bg-opacity-50 flex items-center justify-center sm:justify-start p-4 rounded-lg">
          <span className="text-white font-bold">
            <h1 className="text-3xl uppercase">Café Antoine</h1>

            <div className="text-xl w-[60%]">
              Que ce soit pour un moment entre amis, une pause gourmande ou une session de divertissement, notre salle de jeu vous garantit une expérience unique.
            </div>
          </span>
        </div>
      </div>
    </section>
  );
};

export default CafeSection;