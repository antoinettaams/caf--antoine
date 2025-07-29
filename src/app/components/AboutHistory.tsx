import React from 'react';
import Image from 'next/image';
import { BiCoffee, BiHeart } from 'react-icons/bi';

const AboutHistory: React.FC = () => {
  return (
    <section className="py-16 bg-cream">
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
        <div className="animate-fade-in-left">
          <Image
            src="/assets/images/cafe5.jpg" 
            alt="Grains de café"
            width={600} 
            height={400} 
            className="rounded-lg shadow-xl transform hover:scale-105 transition-transform duration-500"
          />
        </div>
        <div className="animate-fade-in-right">
          <h3 className="text-4xl text-[#bb3b2b] mb-6">
            Depuis 2015...
          </h3>
          <p className="text-black mb-6">
            Fondé par Antoine Dossou, passionné de café et de rencontres humaines,
            notre établissement est devenu un lieu incontournable de Cotonou.
          </p>
          <div className="flex items-center gap-4 mb-4">
            <BiCoffee className="text-3xl text-[#bb3b2b]" />
            <p className="text-black">Cafés 100% bio provenant de plantations locales</p>
          </div>
          <div className="flex items-center gap-4">
            <BiHeart className="text-3xl text-[#bb3b2b]" />
            <p className="text-black">Engagés dans le développement durable</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHistory;