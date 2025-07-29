'use client';

import Link from 'next/link';
import React, { useEffect } from 'react';
import { FaFacebookF, FaInstagram, FaWhatsapp, FaTiktok, FaCoffee, FaBox, FaPhone, FaEnvelope } from "react-icons/fa";
import { FiMapPin } from "react-icons/fi";
import { MdEvent } from "react-icons/md";
import { GiNoodles } from "react-icons/gi";

export default function Footer() {
  useEffect(() => {
    const currentYearSpan = document.getElementById('current-year');
    if (currentYearSpan) {
      currentYearSpan.textContent = new Date().getFullYear().toString();
    }
  }, []);

  return (
    <footer className="text-white pt-12 pb-8 bg-[#bb3b2b]">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-8">
          {/* Colonne 1 - Logo et description */}
          <div className="md:col-span-2">
            <div className="flex items-center mb-6">
              <h2 className="text-3xl font-bold">
                Caf&eacute; <span className="text-cream">Antoine</span>
              </h2>
            </div>

            <p className="text-lg mb-6 max-w-md text-cream">
              Caf&eacute; Antoine est plus qu&apos;un caf&eacute;, c&apos;est un lieu de rencontre et de partage
              pour les amateurs de saveurs uniques.
            </p>

            <div className="flex gap-4">
              {/* Liens réseaux sociaux */}
              <a
                href="https://www.facebook.com/cafeantoinebenin"
                className="social-icon w-10 h-10 rounded-full bg-[#bb3b2b] text-cream flex items-center justify-center hover:bg-[#903024] hover:text-white transition-colors duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebookF className="text-xl" />
              </a>

              <a
                href="https://instagram.com/cafeantoinebenin?igshid=NGExMmI2YTkyZg=="
                className="social-icon w-10 h-10 rounded-full bg-[#bb3b2b] text-cream flex items-center justify-center hover:bg-[#903024] hover:text-white transition-colors duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram className="text-xl" />
              </a>

              <a
                href="https://wa.me/22954745696"
                className="social-icon w-10 h-10 rounded-full bg-[#bb3b2b] text-cream flex items-center justify-center hover:bg-[#903024] hover:text-white transition-colors duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaWhatsapp className="text-xl" />
              </a>

              <a
                href="https://www.tiktok.com/@cafeantoine?_t=8dhuz5IFmvm&_r=1"
                className="social-icon w-10 h-10 rounded-full bg-[#bb3b2b] text-cream flex items-center justify-center hover:bg-[#903024] hover:text-white transition-colors duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTiktok className="text-xl" />
              </a>
            </div>
          </div>

          {/* Colonne 2 - Liens rapides */}
          <div>
            <h2 className="text-xl font-bold mb-6 pb-2 border-b border-cream inline-block">
              Liens rapides
            </h2>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-cream hover:text-[#bb3b2b] transition-colors duration-300">
                  Accueil
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-cream hover:text-[#bb3b2b] transition-colors duration-300">
                  &Agrave; propos
                </Link>
              </li>
              <li>
                <Link href="/menu" className="text-cream hover:text-[#bb3b2b] transition-colors duration-300">
                  Menu
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-cream hover:text-[#bb3b2b] transition-colors duration-300">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Colonne 3 - Nos services */}
          <div>
            <h3 className="text-xl font-bold mb-6 pb-2 border-b border-cream inline-block">
              Nos services
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-cream hover:text-white transition-colors duration-300 flex items-center"
                >
                  <FaCoffee className="text-cream mr-2" /> Caf&eacute; &amp; P&acirc;tisseries
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-cream hover:text-white transition-colors duration-300 flex items-center"
                >
                  <GiNoodles className="text-cream mr-2" /> Brunch &amp; D&icirc;ners
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-cream hover:text-white transition-colors duration-300 flex items-center"
                >
                  <MdEvent className="text-cream mr-2" /> &Eacute;v&eacute;nements priv&eacute;s
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-cream hover:text-white transition-colors duration-300 flex items-center"
                >
                  <FaBox className="text-cream mr-2" /> Livraison
                </a>
              </li>
            </ul>
          </div>

          {/* Colonne 4 - Contact */}
          <div>
            <h3 className="text-xl font-bold mb-6 pb-2 border-b border-cream inline-block">
              Contact
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <FiMapPin className="text-cream mt-1 mr-3" />
                <span className="text-cream">Cotonou Fidjross&egrave;</span>
              </li>
              <li className="flex items-start">
                <FiMapPin className="text-cream mt-1 mr-3" />
                <span className="text-cream">Benin, Calavi</span>
              </li>
              <li className="flex items-center">
                <FaPhone className="text-cream mr-3" />
                <span className="text-cream">+229 54 74 56 96</span>
              </li>
              <li className="flex items-center">
                <FaEnvelope className="text-cream mr-3" />
                <span className="text-cream">contact@cafe-antoine.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-cream/20 pt-6">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <p className="text-cream/80 mb-4 md:mb-0 text-center md:text-left">
              &copy; <span id="current-year"></span> Caf&eacute; Antoine. Tous droits r&eacute;serv&eacute;s.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href="#"
                className="text-cream/80 hover:text-cream text-sm transition-colors duration-300"
              >
                Mentions l&eacute;gales
              </a>
              <a
                href="#"
                className="text-cream/80 hover:text-cream text-sm transition-colors duration-300"
              >
                Politique de confidentialit&eacute;
              </a>
              <a
                href="#"
                className="text-cream/80 hover:text-cream text-sm transition-colors duration-300"
              >
                CGV
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}