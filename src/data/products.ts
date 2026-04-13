export interface Product {
  id: number;
  name: string;
  model: string;
  storage: string;
  color: string;
  price: number;
  priceWholesale: number;
  image: string;
  badge?: 'Nuevo' | 'Oferta' | 'Popular' | 'Último';
  inStock: boolean;
  tags: string[];
}

export const products: Product[] = [
  { id: 1, name: 'iPhone 16 Pro Max', model: 'iPhone 16 Pro Max', storage: '256GB', color: 'Black Titanium', price: 1650, priceWholesale: 1550, image: '/iphone16pro-black.png', badge: 'Nuevo', inStock: true, tags: ['16','pro','max','negro','titanio','nuevo'] },
  { id: 2, name: 'iPhone 16 Pro Max', model: 'iPhone 16 Pro Max', storage: '256GB', color: 'White Titanium', price: 1650, priceWholesale: 1550, image: '/iphone16pro-white.png', badge: 'Nuevo', inStock: true, tags: ['16','pro','max','blanco','titanio','nuevo'] },
  { id: 3, name: 'iPhone 16', model: 'iPhone 16', storage: '128GB', color: 'Rosa', price: 1200, priceWholesale: 1100, image: '/iphone16-pink.png', badge: 'Nuevo', inStock: true, tags: ['16','rosa','nuevo','128gb'] },
  { id: 4, name: 'iPhone 15 Pro', model: 'iPhone 15 Pro', storage: '128GB', color: 'Natural Titanium', price: 1150, priceWholesale: 1050, image: '/iphone15pro-titanium.png', badge: 'Popular', inStock: true, tags: ['15','pro','titanio','popular'] },
  { id: 5, name: 'iPhone 15', model: 'iPhone 15', storage: '128GB', color: 'Azul', price: 980, priceWholesale: 890, image: '/iphone15-blue.png', badge: 'Popular', inStock: true, tags: ['15','azul','popular'] },
  { id: 6, name: 'iPhone 14', model: 'iPhone 14', storage: '128GB', color: 'Midnight', price: 820, priceWholesale: 740, image: '/iphone14-midnight.png', badge: 'Oferta', inStock: true, tags: ['14','negro','midnight','oferta'] },
  { id: 7, name: 'iPhone 13', model: 'iPhone 13', storage: '128GB', color: 'Verde', price: 680, priceWholesale: 610, image: '/iphone13-green.png', badge: 'Oferta', inStock: true, tags: ['13','verde','oferta'] },
  { id: 8, name: 'iPhone 12', model: 'iPhone 12', storage: '64GB', color: 'Violeta', price: 520, priceWholesale: 460, image: '/iphone12-purple.png', badge: 'Último', inStock: true, tags: ['12','violeta','5g','ultimo'] },
  { id: 9, name: 'iPhone 11', model: 'iPhone 11', storage: '64GB', color: 'Negro', price: 380, priceWholesale: 330, image: '/iphone11-black.png', badge: 'Oferta', inStock: true, tags: ['11','negro','oferta'] },
];

export const MODELS = ['Todos','iPhone 16 Pro Max','iPhone 16','iPhone 15 Pro','iPhone 15','iPhone 14','iPhone 13','iPhone 12','iPhone 11'];
export const STORAGE = ['Todos','64GB','128GB','256GB'];
