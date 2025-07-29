import React from 'react';
import Image from 'next/image';

const AboutHero: React.FC = () => {
  return (
    <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/images/cafe1.jpg"
          alt="Int&eacute;rieur du caf&eacute;"
          layout="fill"
          objectFit="cover"
          quality={80}
          priority
          className="opacity-40"
        />
      </div>
      <div className="relative z-10 text-center px-4">
        <h2 className="text-cream text-6xl md:text-8xl text-principal mb-6">
          Notre Histoire
        </h2>
        <p className="text-xl md:text-2xl max-w-2xl mx-auto text-cream">
          D&eacute;couvrez l&apos;univers chaleureux de Caf&eacute; Antoine
        </p>
      </div>
    </section>
  );
};

export default AboutHero;