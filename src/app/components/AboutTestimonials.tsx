// src/components/AboutTestimonials.tsx
import React from 'react';
import Image from 'next/image';

const AboutTestimonials: React.FC = () => {
  // Définissez les témoignages dans un tableau pour une meilleure maintenabilité
  const testimonials = [
    {
      quote: "Je suis tombé amoureux de Café Antoine dès ma première visite ! L'atmosphère est chaleureuse et accueillante, et le dèguè est tout simplement délicieux. Je recommande vivement ce café à tout le monde !",
      author: "Kévin D.",
      role: "Client fidèle",
      image: "/assets/images/cafe2.jpg",
      alt: "Portrait de Kévin D."
    },
    {
      quote: "Café Antoine est mon nouveau lieu de prédilection pour déjeuner et me divertir depuis deux mois. L'ambiance est parfaite pour se divertir en communauté. Et bien sûr, le dèguè antoinais, ce dèguè est excellent !",
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
          Ce qu'ils disent de nous
        </h3>
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index} 
              className="bg-cream p-6 rounded-lg transform hover:rotate-1 transition-transform duration-300"
            >
              <p className="text-black italic mb-4">"{testimonial.quote}"</p>
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