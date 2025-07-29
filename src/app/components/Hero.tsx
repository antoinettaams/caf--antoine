"use client";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="text-white py-10 min-h-[90vh] flex items-center justify-center">
      <div className="flex flex-col md:flex-row justify-between items-center p-4 md:px-10 lg:px-40 gap-10">
      
        <div className="text-left lg:w-1/2">
          <p>
            <svg
              width="100"
              height="20"
              viewBox="0 0 100 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0,10 Q12.5,0 25,10 T50,10 T75,10 T100,10"
                stroke="#fffdf7"
                strokeWidth="4"
                fill="none"
              />
            </svg>
          </p>

          <h2 className="text-xl m-2 text-white">La Cafette qui rassemble</h2>

          <h2 className="text-5xl md:text-8xl font-bold m-2 text-white">
            SAVEURS & <br /> DOUCEURS
          </h2>

          <h3 className="text-xl lg:text-2xl m-2 mb-4 text-white">
            Le café, c&apos;est bien plus qu&apos;une boisson, c&apos;est un
            moment de partage et de convivialité.
          </h3>

          <a
            href="/contact"
            className="border-2 bg-[#bb3b2b] hover:border-[#903024] text-white m-2 px-2 py-1 rounded-full uppercase inline-flex items-center"
          >
            <span className="mr-4">🍽️</span>
            Réservez
          </a>

          <p className="flex justify-end">
            <svg
              width="100"
              height="20"
              viewBox="0 0 100 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0,10 Q12.5,0 25,10 T50,10 T75,10 T100,10"
                stroke="#fffdf7"
                strokeWidth="4"
                fill="none"
              />
            </svg>
          </p>
        </div>

        <div className="flex items-center justify-end w-full lg:w-1/2">
          <Image
            src="/assets/images/burger-hero.png"
            alt="images"
            width={600}
            height={600}
            className="w-full h-full object-cover rounded-lg"
            />
        </div>
      </div>
    </section>
  );
}
