// src/components/AboutTestimonials.tsx
import React from 'react';
import Image from 'next/image';

const AboutTestimonials: React.FC = () => {
  // Définissez les témoignages dans un tableau pour une meilleure maintenabilité
  const testimonials = [
    {
      quote: "Je suis tomb&eacute; amoureux de Caf&eacute; Antoine d&egrave;s ma premi&egrave;re visite ! L&apos;atmosph&egrave;re est chaleureuse et accueillante, et le d&egrave;gu&egrave; est tout simplement d&eacute;licieux. Je recommande vivement ce caf&eacute; &agrave; tout le monde !",
      author: "Kévin D.",
      role: "Client fidèle",
      image: "/assets/images/cafe2.jpg",
      alt: "Portrait de K&eacute;vin D."
    },
    {
      quote: "Caf&eacute; Antoine est mon nouveau lieu de pr&eacute;dilection pour d&eacute;jeuner et me divertir depuis deux mois. L&apos;ambiance est parfaite pour se divertir en communaut&eacute;. Et bien s&ucirc;r, le d&egrave;gu&egrave; antoinais, ce d&egrave;gu&egrave; est excellent !",
      author: "Boris DOSSOU",
      role: "Client fidèle",
      image: "/assets/images/food7.jpg",
      alt: "Portrait de Boris DOSSOU"
    },
  ];

  return (
    <section className="py-16 bg-principal">
      <div className="container mx-auto px-4">
        <h3 className="text-4xl text-cream text-center mb-12 animate-fade-in">
          Ce qu&apos;ils disent de nous
        </h3>
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-cream p-6 rounded-lg transform hover:rotate-1 transition-transform duration-300"
            >
              <p className="text-black italic mb-4">{testimonial.quote}</p>
              <div className="flex items-center gap-4">
                <Image
                  src={testimonial.image}
                  alt={testimonial.alt}
                  width={48}
                  height={48}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-bold text-black">{testimonial.author}</h4>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutTestimonials;