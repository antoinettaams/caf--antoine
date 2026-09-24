'use client';

import React from 'react';
import Image from 'next/image';

const CafeAntoine: React.FC = () => {
  return (
    <section>
      <article className="cream flex items-center justify-center">
        <div className="flex flex-col md:flex-row justify-between items-center p-4 md:px-10 lg:px-40 gap-10">
          <div className="text-left lg:w-1/2">
            <h2 className="font-bold text-5xl text-cream m-2 text-center">
              Saveurs-Convivialit&eacute;s-Tradition
            </h2>
            <p className="text-cream text-xl m-2 text-center">
              D&eacute;couvrez nos sp&eacute;cialit&eacute;s maison, pr&eacute;par&eacute;es avec des ingr&eacute;dients frais et savoureux. Que vous recherchez
              un repas traditionnel, une pause-caf&eacute; r&eacute;confortante ou d&apos;un verre entre amis, notre &eacute;quipe vous accueille
              avec le sourire.
            </p>

            <div className="border rounded-full p-2 mt-10">
              <div className="bg-cream text-black flex items-center justify-around rounded-full p-4">
                <h2 className="text-center text-3xl font-bold border-r flex-1">
                  220+ <p className="mt-2 text-sm font-none">OUTLINE</p>
                </h2>
                <h2 className="text-center text-3xl font-bold border-r flex-1">
                  45+ <p className="text-sm font-none mt-2">CITY</p>
                </h2>
                <h2 className="text-center text-3xl font-bold flex-1">
                  20 <p className="mt-2 text-sm font-none">MENU</p>
                </h2>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-end w-full lg:w-1/2">
            <Image
              src="/assets/images/cafe-antoine.png"
              alt="Cafe Antoine"
              className="w-[200%] h-[80vh] rounded-lg"
              width={800}
              height={600}
            />
          </div>
        </div>
      </article>

      <aside className="text-cream min-h-screen flex items-center justify-center p-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 w-full max-w-5xl">
          <div className="relative">
            <Image
              src="/assets/images/salade.jpg"
              alt="Salade Mexicaine"
              className="opacity-70 rounded-lg w-full h-[30vh] object-cover"
              width={400}
              height={225}
            />
            <div className="absolute inset-0 bg-opacity-50 flex items-center justify-center sm:justify-start p-4 rounded-lg">
              <span className="text-3xl text-white font-bold uppercase">Salade Mexicaine</span>
            </div>
          </div>

          <div className="relative">
            <Image
              src="/assets/images/riz.jpg"
              alt="Riz cr&eacute;ole Antoinais"
              className="opacity-70 rounded-lg w-full h-[30vh] object-cover"
              width={400}
              height={225}
            />
            <div className="absolute inset-0 bg-opacity-50 flex items-center justify-center sm:justify-start p-4 rounded-lg">
              <span className="text-white text-3xl font-bold uppercase">Riz cr&eacute;ole Antoinais</span>
            </div>
          </div>

          <div className="relative">
            <Image
              src="/assets/images/pate-rouge.jpg" // Note: Le nom du fichier image lui-même ne devrait pas contenir d'entités HTML. Renommez le fichier physique en 'pate-rouge.jpg' et mettez à jour menuData.ts.
              alt="Amiw&ocirc; ailero"
              className="opacity-70 rounded-lg w-full h-[30vh] object-cover"
              width={400}
              height={225}
            />
            <div className="absolute inset-0 bg-opacity-50 flex items-center justify-center sm:justify-start p-4 rounded-lg">
              <span className="text-white text-3xl font-bold uppercase">Amiw&ocirc; ailero</span>
            </div>
          </div>

          <div className="relative">
            <Image
              src="/assets/images/food3.jpg"
              alt="D&egrave;gu&egrave;"
              className="opacity-70 rounded-lg w-full h-[30vh] object-cover"
              width={400}
              height={225}
            />
            <div className="absolute inset-0 bg-opacity-50 flex items-center justify-center sm:justify-start p-4 rounded-lg">
              <span className="text-white text-3xl font-bold uppercase">D&egrave;gu&egrave;</span>
            </div>
          </div>

          <div className="relative col-span-1 sm:col-span-2">
            <Image
              src="/assets/images/cafe2.jpg"
              alt="Chawama"
              className="opacity-70 rounded-lg w-full h-[30vh] object-cover"
              width={800}
              height={225}
            />
            <div className="absolute inset-0 bg-opacity-50 flex items-center justify-center sm:justify-start p-4 rounded-lg">
              <span className="text-white text-3xl font-bold uppercase">Chawama</span>
            </div>
          </div>
        </div>
      </aside>
    </section>
  );
};

export default CafeAntoine;