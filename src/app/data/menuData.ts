// src/data/menuData.ts

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: string;
  image: string; 
  category: 'starters' | 'mains' | 'desserts' | 'drinks';
}

export const menuData: MenuItem[] = [
  // Entrées
  {
    id: 'starter-1',
    name: 'Salade mexicaine',
    description: 'Salade fraîche au poulet grillé, avocat et maïs, accompagnée d\'une sauce onctueuse.',
    price: '3000f',
    image: '/assets/images/saladantoinaise.jpg',
    category: 'starters',
  },
  {
    id: 'starter-2',
    name: 'Salade sympa',
    description: 'Une salade qui vous pique un sourire à chaque bouchée.',
    price: '2000f',
    image: '/assets/images/sympa.jpg',
    category: 'starters',
  },
  {
    id: 'starter-3',
    name: 'Salade Antoinaise',
    description: 'Un mélange frais de thon, œufs, légumes croquants et olives, pour une touche ensoleillée.',
    price: '1500f',
    image: '/assets/images/antoinaise.jpg',
    category: 'starters',
  },

  // Plats Principaux
  {
    id: 'main-1',
    name: 'Sautés de tripes de boeuf',
    description: 'Sautés de tripes de bœuf – Fondantes, savoureuses et mijotées à la perfection',
    price: '2000f',
    image: '/assets/images/rizz.jpg',
    category: 'mains',
  },
  {
    id: 'main-2',
    name: 'Pâte noir',
    description: 'Pâtes noires aux légumes – Une explosion de saveurs',
    price: '1500f',
    image: '/assets/images/pate-noir.jpg', 
    category: 'mains',
  },
  {
    id: 'main-3',
    name: 'Spaghetti Royal Sauté',
    description: 'Spaghettis, légumes sautés et viande tendre, un délice savoureux!',
    price: '2000f',
    image: '/assets/images/patte.jpg',
    category: 'mains',
  },

  // Desserts
  {
    id: 'dessert-1',
    name: 'Dèguè au mil',
    description: 'Délice onctueux de semoule de mil et yaourt, pour une touche de fraîcheur authentique.',
    price: '500f',
    image: '/assets/images/food3.jpg',
    category: 'desserts',
  },
  {
    id: 'dessert-2',
    name: 'Brioches Choco-Fondantes',
    description: 'Tranches de brioche dorées, sublimées par un coulis onctueux de chocolat.',
    price: '2000f',
    image: '/assets/images/dessert.jpg',
    category: 'desserts',
  },
  {
    id: 'dessert-3',
    name: 'Dèguè au couscous',
    description: 'Alliance parfaite de couscous moelleux et de yaourt onctueux pour un plaisir rafraîchissant.',
    price: '500f',
    image: '/assets/images/degue-couscous.jpg', 
    category: 'desserts',
  },

  // Boissons
  {
    id: 'drink-1',
    name: 'Fresh Tama',
    description: 'Tamarion frais, fais maison.',
    price: '500f',
    image: '/assets/images/tamarin.jpg',
    category: 'drinks',
  },
  {
    id: 'drink-2',
    name: 'Rouge pastèque',
    description: 'Jus à base de fruits frais fait maison',
    price: '700f',
    image: '/assets/images/pasteque.jpg', 
    category: 'drinks',
  },
  {
    id: 'drink-3',
    name: 'Guiness',
    description: 'Prise de rafraîchissement et d\'énergie',
    price: '700f',
    image: '/assets/images/boisson.jpg',
    category: 'drinks',
  },
];
