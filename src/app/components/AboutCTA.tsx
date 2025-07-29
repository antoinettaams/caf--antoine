import React from 'react';
import Link from 'next/link'; 

const AboutCTA: React.FC = () => {
  return (
    <section className="bg-[#903024] py-12 text-center animate-pulse"> 
      <div className="container mx-auto px-4">
        <h3 className="text-4xl text-cream mb-6">
          Envie de nous rejoindre ?
        </h3>
        <Link href="/contact" passHref> 
          <span className="bg-cream text-[#903024] px-8 py-3 rounded-full inline-block cursor-pointer
                       hover:bg-black hover:text-cream transition-colors duration-300">
            Contactez-nous
          </span>
        </Link>
      </div>
    </section>
  );
};

export default AboutCTA;