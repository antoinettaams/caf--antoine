import React from 'react';
import { FaHeart, FaUsers } from 'react-icons/fa';
import { GiFruitBowl } from 'react-icons/gi'; 
const AboutMissions: React.FC = () => {
  return (
    <section className="py-16 bg-[#903024]"> 
      <h2 className="*text-5xl md:text-6xl text-center text-cream mb-12">
        Notre Mission
      </h2>

      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Carte 1: Produits Frais */}
        <div className="bg-cream p-6 rounded-lg shadow-lg text-center animate-card">
          <div className="bg-[#bb3b2b] text-white rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4 text-4xl">
            <GiFruitBowl /> 
          </div>
          <h3 className="text-3xl text-[#bb3b2b] mb-2">Produits Frais</h3>
          <p className="text-black text-lg">Des ingrédients locaux et bio sélectionnés avec soin</p>
        </div>

        {/* Carte 2: Passion Partage */}
        <div className="bg-cream p-6 rounded-lg shadow-lg text-center animate-card">
          <div className="bg-[#bb3b2b] text-white rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4 text-4xl">
            <FaHeart />
          </div>
          <h3 className="text-3xl text-[#bb3b2b] mb-2">Passion Partage</h3>
          <p className="text-black text-lg">Transmettre notre amour du bon café depuis 2015</p>
        </div>

        {/* Carte 3: Communauté */}
        <div className="bg-cream p-6 rounded-lg shadow-lg text-center animate-card">
          <div className="bg-[#bb3b2b] text-white rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4 text-4xl">
            <FaUsers /> 
          </div>
          <h3 className="text-3xl text-[#bb3b2b] mb-2">Communauté</h3>
          <p className="text-black text-lg">Un lieu de rencontre et de partage pour tous</p>
        </div>
      </div>
    </section>
  );
};

export default AboutMissions;