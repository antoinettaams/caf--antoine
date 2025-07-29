"use client"; 

import React, { useState } from 'react';
import MenuHeroSection from '../components/MenuHeroSection';
import MenuCategoryNav from '../components/MenuCategoryNav';
import MenuCategorySection from '../components/MenuCategorySection';
import { menuData, MenuItem } from '../data/menuData';

const MenuPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [cart, setCart] = useState<MenuItem[]>([]);

  // Fonction appelée lorsque l'utilisateur sélectionne une catégorie dans la barre de navigation
  const handleSelectCategory = (category: string) => {
    setActiveCategory(category);
    // Si ce n'est pas 'all', défilement doux vers la section de la catégorie
    if (category !== 'all') {
      document.getElementById(category)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Fonction pour ajouter un article au panier
  const handleAddToCart = (item: MenuItem) => {
    setCart((prevCart) => [...prevCart, item]);
    console.log(`Article ajouté au panier : ${item.name}`);
  };

  const categoriesToRender = [
    { id: 'starters', title: 'Nos Entrées', data: menuData.filter(item => item.category === 'starters') },
    { id: 'mains', title: 'Plats Principaux', data: menuData.filter(item => item.category === 'mains') },
    { id: 'desserts', title: 'Desserts', data: menuData.filter(item => item.category === 'desserts') },
    { id: 'drinks', title: 'Boissons', data: menuData.filter(item => item.category === 'drinks') },
  ];

  return (
    <>
      <MenuHeroSection />

      {/* Barre de navigation des catégories */}
      <MenuCategoryNav onSelectCategory={handleSelectCategory} activeCategory={activeCategory} />

      <main className="container mx-auto px-4 py-12">
        {activeCategory === 'all' ? (
          categoriesToRender.map(category => (
            <MenuCategorySection
              key={category.id}
              id={category.id}
              title={category.title}
              items={category.data}
              onAddToCart={handleAddToCart} 
            />
          ))
        ) : (
          
          categoriesToRender
            .filter(cat => cat.id === activeCategory)
            .map(category => (
              <MenuCategorySection
                key={category.id}
                id={category.id}
                title={category.title}
                items={category.data}
                onAddToCart={handleAddToCart} 
              />
            ))
        )}
      </main>
    </>
  );
};

export default MenuPage;