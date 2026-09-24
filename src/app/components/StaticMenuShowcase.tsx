"use client";

import React, { useState } from 'react';
import Image from 'next/image';

const StaticMenuShowcase: React.FC = () => {
  const [activeSection, setActiveSection] = useState<'specialites' | 'cocktails'>('specialites');

  const renderStars = (filled: number, total: number) => {
    const stars = [];
    const colorClass = "text-[#bb3b2b]";
    const emptyColorClass = "text-gray-300";

    for (let i = 0; i < filled; i++) {
      stars.push(<span key={`filled-${i}`} className={colorClass}>&#9733;</span>);
    }
    for (let i = 0; i < total - filled; i++) {
      stars.push(<span key={`empty-${i}`} className={emptyColorClass}>&#9734;</span>);
    }
    return stars;
  };

  return (
    <section className="text-white p-10 bg-[#bb3b2b]">
      {/* Menu de navigation (onglets) */}
      <nav>
        <ul className="flex justify-start text-2xl gap-4 m-4 sm:m-6 lg:m-8">
          <li
            className={`border-b-0 hover:border-b-2 hover:border-white transition-all duration-300 cursor-pointer font-bold text-white ${
              activeSection === 'specialites' ? 'border-b-2 border-white' : ''
            }`}
            onClick={() => setActiveSection('specialites')}
          >
            <span>Nos sp&eacute;cialit&eacute;s</span>
          </li>
          <li
            className={`border-b-0 hover:border-b-2 hover:border-white transition-all duration-300 cursor-pointer font-amatic font-bold text-cream ${
              activeSection === 'cocktails' ? 'border-b-2 border-white' : ''
            }`}
            onClick={() => setActiveSection('cocktails')}
          >
            <span>Cocktails</span>
          </li>
        </ul>
      </nav>

      {/* Nos spécialités */}
      <aside id="specialites" className={`mt-8 w-full ${activeSection === 'specialites' ? '' : 'hidden'}`}>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
          {/* Item 1: Chawama Cheddar */}
          <div className="flex flex-col sm:flex-row bg-cream p-4 rounded-lg w-full items-center">
            <Image
              src="/assets/images/food1.jpg"
              alt="Chawama Cheddar"
              width={160}
              height={160}
              unoptimized
              className="w-full sm:w-40 h-40 object-cover rounded-lg mb-4 sm:mb-0 sm:mr-4"
            />
            <div className="w-full text-center sm:text-left">
              <h3 className="text-2xl font-bold text-[#bb3b2b]">Chawama Cheddar</h3>
              <p className="text-gray-600 text-lg">
                D&eacute;couvrez notre chawama, un m&eacute;lange de viande de boeuf hach&eacute;, frites, et de l&eacute;gumes frais.
              </p>
              <div className="flex justify-between items-center mt-2">
                <span className="bg-[#bb3b2b] text-white px-3 py-1 rounded-full font-bold">2000 FCFA</span>
                <div className="flex text-2xl">{renderStars(5, 5)}</div>
              </div>
            </div>
          </div>

          {/* Item 2: Pasta Carne */}
          <div className="flex flex-col sm:flex-row bg-cream p-4 rounded-lg w-full items-center">
            <Image
              src="/assets/images/food6.jpg"
              alt="Pasta Carne"
              width={160}
              height={160}
              unoptimized
              className="w-full sm:w-40 h-40 object-cover rounded-lg mb-4 sm:mb-0 sm:mr-4"
            />
            <div className="w-full text-center sm:text-left">
              <h3 className="text-2xl font-bold text-[#bb3b2b]">Pasta Carne</h3>
              <p className="text-gray-600 text-lg">
                Spaghetti et l&eacute;gumes frais, accompagn&eacute;s de sauce tomate.
              </p>
              <div className="flex justify-between items-center mt-2">
                <span className="bg-[#bb3b2b] text-white px-3 py-1 rounded-full font-bold">600 FCFA</span>
                <div className="flex text-2xl">{renderStars(4, 5)}</div>
              </div>
            </div>
          </div>

          {/* Item 3: Salade Antoinaise */}
          <div className="flex flex-col sm:flex-row bg-cream p-4 rounded-lg w-full items-center">
            <Image
              src="/assets/images/food8.jpg"
              alt="Salade Antoinaise"
              width={160}
              height={160}
              unoptimized
              className="w-full sm:w-40 h-40 object-cover rounded-lg mb-4 sm:mb-0 sm:mr-4"
            />
            <div className="w-full text-center sm:text-left">
              <h3 className="text-2xl font-bold text-[#bb3b2b]">Salade Antoinaise</h3>
              <p className="text-gray-600 text-lg">
                Salade compos&eacute;e de l&eacute;gumes frais, &oelig;uf, sauce onctueuse et morceaux de viandes.
              </p>
              <div className="flex justify-between items-center mt-2">
                <span className="bg-[#bb3b2b] text-white px-3 py-1 rounded-full font-bold">1500 FCFA</span>
                <div className="flex text-2xl">{renderStars(3, 5)}</div>
              </div>
            </div>
          </div>

          {/* Item 4: Tortilla de Antonio */}
          <div className="flex flex-col sm:flex-row bg-cream p-4 rounded-lg w-full items-center">
            <Image
              src="/assets/images/foodneuf.jpg"
              alt="Tortilla de Antonio"
              width={160}
              height={160}
              unoptimized
              className="w-full sm:w-40 h-40 object-cover rounded-lg mb-4 sm:mb-0 sm:mr-4"
            />
            <div className="w-full text-center sm:text-left">
              <h3 className="text-2xl font-bold text-[#bb3b2b]">Tortilla de Antonio</h3>
              <p className="text-gray-600 text-lg">
                Omelette aux frites de pomme de terre enrob&eacute;es de sauce et d&apos;herbes.
              </p>
              <div className="flex justify-between items-center mt-2">
                <span className="bg-[#bb3b2b] text-white px-3 py-1 rounded-full font-bold">2500 FCFA</span>
                <div className="flex text-2xl">{renderStars(5, 5)}</div>
              </div>
            </div>
          </div>
        </div>
      </aside>

      {/* Cocktails */}
      <aside id="cocktails" className={`mt-8 w-full ${activeSection === 'cocktails' ? '' : 'hidden'}`}>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
          {/* Item 1: Coktail au raisin */}
          <div className="flex flex-col sm:flex-row bg-cream p-4 rounded-lg w-full items-center">
            <Image
              src="/assets/images/coktail-raisin.jpg" // Renommé sans espace !
              alt="Coktail au raisin"
              width={160}
              height={160}
              unoptimized
              className="w-full sm:w-40 h-40 object-cover rounded-lg mb-4 sm:mb-0 sm:mr-4"
            />
            <div className="w-full text-center sm:text-left">
              <h3 className="text-2xl font-bold text-[#bb3b2b]">Coktail au raisin</h3>
              <p className="text-gray-600 text-lg">
                Un m&eacute;lange rafra&icirc;chissant de raisin frais, de jus d&apos;orange et de menthe.
              </p>
              <div className="flex justify-between items-center mt-2">
                <span className="bg-[#bb3b2b] text-white px-3 py-1 rounded-full font-bold">2000 FCFA</span>
                <div className="flex text-2xl">{renderStars(5, 5)}</div>
              </div>
            </div>
          </div>

          {/* Item 2: Coktail à l'ananas */}
          <div className="flex flex-col sm:flex-row bg-cream p-4 rounded-lg w-full items-center">
            <Image
              src="/assets/images/ananas.jpg"
              alt="Coktail à l'ananas"
              width={160}
              height={160}
              unoptimized
              className="w-full sm:w-40 h-40 object-cover rounded-lg mb-4 sm:mb-0 sm:mr-4"
            />
            <div className="w-full text-center sm:text-left">
              <h3 className="text-2xl font-bold text-[#bb3b2b]">Coktail &agrave; l&apos;ananas</h3>
              <p className="text-gray-600 text-lg">
                Un cocktail tropical rafra&icirc;chissant &agrave; base d&apos;ananas frais.
              </p>
              <div className="flex justify-between items-center mt-2">
                <span className="bg-[#bb3b2b] text-white px-3 py-1 rounded-full font-bold">2000 FCFA</span>
                <div className="flex text-2xl">{renderStars(4, 5)}</div>
              </div>
            </div>
          </div>

          {/* Item 3: Coktail à la pastèque */}
          <div className="flex flex-col sm:flex-row bg-cream p-4 rounded-lg w-full items-center">
            <Image
              src="/assets/images/pasteque.jpg"
              alt="Coktail à la pastèque"
              width={160}
              height={160}
              unoptimized
              className="w-full sm:w-40 h-40 object-cover rounded-lg mb-4 sm:mb-0 sm:mr-4"
            />
            <div className="w-full text-center sm:text-left">
              <h3 className="text-2xl font-bold text-[#bb3b2b]">Coktail &agrave; la past&egrave;que</h3>
              <p className="text-gray-600 text-lg">
                Un cocktail frais et l&eacute;ger, pr&eacute;par&eacute; avec de la past&egrave;que juteuse.
              </p>
              <div className="flex justify-between items-center mt-2">
                <span className="bg-[#bb3b2b] text-white px-3 py-1 rounded-full font-bold">1500 FCFA</span>
                <div className="flex text-2xl">{renderStars(3, 5)}</div>
              </div>
            </div>
          </div>

          {/* Item 4: Coktail à base de fraise */}
          <div className="flex flex-col sm:flex-row bg-cream p-4 rounded-lg w-full items-center">
            <Image
              src="/assets/images/coktail.jpg"
              alt="Coktail à base de fraise"
              width={160}
              height={160}
              unoptimized
              className="w-full sm:w-40 h-40 object-cover rounded-lg mb-4 sm:mb-0 sm:mr-4"
            />
            <div className="w-full text-center sm:text-left">
              <h3 className="text-2xl font-bold text-[#bb3b2b]">Coktail &agrave; base de fraise</h3>
              <p className="text-gray-600 text-lg">
                Un d&eacute;licieux m&eacute;lange de fraises fra&icirc;ches et de jus de fruits.
              </p>
              <div className="flex justify-between items-center mt-2">
                <span className="bg-[#bb3b2b] text-white px-3 py-1 rounded-full font-bold">2500 FCFA</span>
                <div className="flex text-2xl">{renderStars(5, 5)}</div>
              </div>
            </div>
          </div>
        </div>
      </aside>
    </section>
  );
};

export default StaticMenuShowcase;