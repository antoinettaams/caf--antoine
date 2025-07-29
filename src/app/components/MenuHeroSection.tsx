import React from 'react';

const MenuHeroSection: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-[#903024] to-[#bb3b2b] text-cream py-16 md:py-24">
      {/* Animation de fond : les cercles "rebondissent" avec le titre */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-32 h-32 bg-cream rounded-full mix-blend-overlay animate-bounce animation-delay-100"></div>
        <div className="absolute top-1/4 right-1/4 w-24 h-24 bg-cream rounded-full mix-blend-overlay animate-bounce animation-delay-300"></div>
        <div className="absolute bottom-1/3 left-1/3 w-20 h-20 bg-cream rounded-full mix-blend-overlay animate-bounce"></div>
      </div>

      <div className="container mx-auto px-4 text-center relative">
        {/* Titre principal avec effet de rebond */}
        <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-bounce">
          Notre <span className="text-cream font-amatic">Menu</span> Savoureux
        </h1>

        {/* Sous-titre visible immédiatement - 'opacity-0' et 'animate-fade-in' ont été supprimés */}
        <p className="text-cream text-xl md:text-2xl mb-8 max-w-2xl mx-auto animation-delay-300">
          Une expérience gustative qui éveillera vos papilles
        </p>
      </div>
    </section>
  );
};

export default MenuHeroSection;