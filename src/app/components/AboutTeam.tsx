import React from 'react';
import Image from 'next/image';

const AboutTeam: React.FC = () => {
  const teamMembers = [
    {
      name: "Boris",
      role: "Les Chefs Cuisiniers",
      image: "/assets/images/cafe3.jpg",
      alt: "Portrait de Boris, chef cuisinier"
    },
    {
      name: "DOSSOU Antoine",
      role: "Le Fondateur du Café",
      image: "/assets/images/ananas.jfif", 
      alt: "Portrait d'Antoine Dossou, fondateur du café"
    },
    {
      name: "Amina",
      role: "Chef Cuisinière",
      image: "/assets/images/orange.jpg",
      alt: "Portrait d'Amina, chef cuisinière"
    },
  ];

  return (
    <section className="py-16 bg-[#bb3b2b]"> 
      <div className="container mx-auto px-4 text-center">
        <h3 className="text-4xl text-cream mb-12 animate-fade-in">
          Rencontrez Notre Équipe
        </h3>
        <div className="grid md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index} 
              className="bg-cream p-6 rounded-lg shadow-lg transform hover:-translate-y-2 transition-all duration-300"
            >
              <Image
                src={member.image}
                alt={member.alt}
                width={128}  
                height={128}
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover" 
              />
              <h4 className="text-3xl text-[#bb3b2b]">{member.name}</h4> 
              <p className="text-black">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutTeam;