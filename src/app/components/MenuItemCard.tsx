"use client";

import React from 'react';
import Image from 'next/image';
import { MenuItem } from '../data/menuData'; 

interface MenuItemCardProps {
  item: MenuItem; 
  animationDelay?: string;
  onAddToCart: (item: MenuItem) => void; 
}

const MenuItemCard: React.FC<MenuItemCardProps> = ({ item, animationDelay, onAddToCart }) => {
  if (!item) {
    console.error("MenuItemCard a reçu une prop 'item' indéfinie ou nulle.");
    return null;
  }

  const publicImagePath = `/assets/images/${item.image}`;

  return (
    <div
      className={`menu-item opacity-0 animate-fade-in bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1`}
      data-category={item.category}
      style={{ animationDelay: animationDelay || '0s' }}
    >
      <div className="relative h-48 overflow-hidden">
        <Image
          src={publicImagePath}
          alt={item.name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          style={{ objectFit: 'cover' }}
          className="transition-transform duration-500 hover:scale-110"
        />
      </div>

      <div className="p-6">
        <div className="flex justify-between items-start">
          <h3 className="text-xl font-bold mb-2">{item.name}</h3>
          <span className="price-tag text-lg font-bold text-[#bb3b2b]">{item.price}</span>
        </div>

        <p className="text-gray-600 mb-4">{item.description}</p>

        <button
          onClick={() => onAddToCart(item)}
          className="add-to-cart-btn w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded-lg font-bold transition-all duration-300 flex items-center justify-center"
        >
          Ajouter
        </button>
      </div>
    </div>
  );
};

export default MenuItemCard;