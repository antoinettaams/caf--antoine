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
          &Agrave; propos de Caf&eacute; Antoine
        </h2>
        <p className="mt-4 text-lg lg:text-xl">
          Plus qu&rsquo;une caf&eacute;t&eacute;ria, Caf&eacute; Antoine est un lieu de partage
          o&ugrave; chaque tasse de d&egrave;gu&egrave; et chaque bouch&eacute;e de spaghetti
          rassemblent la communaut&eacute; des Antoinais. D&eacute;tendez-vous dans
          une ambiance chaleureuse et savourez des plats pr&eacute;par&eacute;s avec
          passion pour une exp&eacute;rience unique et authentique.
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
        Le caf&eacute;, c&apos;est bien plus qu&apos;une boisson, c&apos;est un moment de partage et de
        convivialit&eacute;.
        <span className="mt-2 font-bold">- Les Antoinais</span>
      </div>
    </section>
  );
};

export default AboutCafeAntoine;