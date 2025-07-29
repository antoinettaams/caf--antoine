import React from 'react';
import MenuItemCard from './MenuItemCard';
import { MenuItem } from '../data/menuData'; 

interface MenuCategorySectionProps {
  id: string; 
  title: string; 
  items: MenuItem[]; 
  onAddToCart: (item: MenuItem) => void; 
}

const MenuCategorySection: React.FC<MenuCategorySectionProps> = ({ id, title, items, onAddToCart }) => {
  return (
    <section id={id} className="mb-16">
      <h2 className="text-4xl font-bold mb-8 pb-2 inline-block border-b-2 border-white animate-fade-in">
        
        {title}
      </h2>

      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {items.map((item, index) => (
          <MenuItemCard
            key={item.id} 
            item={item}
            animationDelay={`${index * 100}ms`}
            onAddToCart={onAddToCart} 
          />
        ))}
      </div>
    </section>
  );
};

export default MenuCategorySection;