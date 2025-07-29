"use client";

import React from 'react';

interface MenuCategoryNavProps {
  onSelectCategory: (category: string) => void;
  activeCategory: string;
}

const MenuCategoryNav: React.FC<MenuCategoryNavProps> = ({ onSelectCategory, activeCategory }) => {
  const categories = [
    { id: 'all', label: 'Tout le Menu' },
    { id: 'starters', label: 'Entrées' },
    { id: 'mains', label: 'Plats' },
    { id: 'desserts', label: 'Desserts' },
    { id: 'drinks', label: 'Boissons' },
  ];

  return (
    <nav className="sticky top-0 bg-cream shadow-md z-10 border-b border-[#bb3b2b]">
      <div className="container mx-auto px-4">
        <div className="flex overflow-x-auto py-3 hide-scrollbar">
          <div className="flex space-x-1 md:space-x-3 mx-auto">
            {categories.map((category) => {
              const isActive = activeCategory === category.id;

              return (
                <button
                  key={category.id}
                  onClick={() => onSelectCategory(category.id)}
                  className={`category-btn flex-shrink-0 px-4 py-2 rounded-full transition-all duration-300 whitespace-nowrap
                    ${isActive
                      // Styles pour la catégorie active : au survol, le fond devient secondaire ET le texte devient principal (foncé)
                      ? 'bg-[#bb3b2b] text-cream hover:bg-[#903024] hover:text-[#bb3b2b] font-bold' // <-- MODIFIÉ ICI
                      // Styles par défaut pour les catégories inactives
                      : 'bg-white text-[#bb3b2b] border border-[#bb3b2b] hover:text-cream font-medium'
                    }`}
                >
                  {category.label}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default MenuCategoryNav;