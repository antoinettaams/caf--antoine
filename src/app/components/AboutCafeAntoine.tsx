import React from 'react';
import { FaQuoteLeft } from 'react-icons/fa'; 
import { MdOutlineArrowRightAlt } from 'react-icons/md'; 

const AboutCafeAntoine: React.FC = () => {
  return (
    <section
      className="w-full grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-4 p-4 md:p-10"
      id="about"
    >
      <div
        className="text-cream p-8 rounded-lg flex flex-col justify-center md:col-span-2"
      >
        <h2 className="text-4xl lg:text-6xl font-bold">
          À propos de Café Antoine
        </h2>
        <p className="mt-4 text-lg lg:text-xl">
          Plus qu’une cafétéria, Café Antoine est un lieu de partage
          où chaque tasse de dèguè et chaque bouchée de spaghetti
          rassemblent la communauté des Antoinais. Détendez-vous dans
          une ambiance chaleureuse et savourez des plats préparés avec
          passion pour une expérience unique et authentique.
        </p>
        <a
          href="#"
          className="mt-4 btn rounded-full w-fit bg-cream text-black text-lg font-bold flex items-center" // Ajout de 'flex items-center' pour aligner l'icône et le texte
        >
          Devenir Antoinais
          <MdOutlineArrowRightAlt className="bg-black text-cream p-1 ml-6 rounded-full transform rotate-45 text-2xl" />
        </a>
      </div>

      <div
        className="bg-[#bb3b2b] text-cream p-6 rounded-lg flex flex-col justify-center items-center italic text-xl text-center"
      >
        <FaQuoteLeft className="text-6xl mb-4" />
        Le café, c'est bien plus qu'une boisson, c'est un moment de partage et de
        convivialité.
        <span className="mt-2 font-bold">- Les Antoinais</span>
      </div>
    </section>
  );
};

export default AboutCafeAntoine;