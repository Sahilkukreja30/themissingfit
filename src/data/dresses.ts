import dress1 from '@/assets/dress-1.jpg';
import dress2 from '@/assets/dress-2.jpg';
import dress3 from '@/assets/dress-3.jpg';
import dress4 from '@/assets/dress-4.jpg';
import dress5 from '@/assets/dress-5.jpg';
import dress6 from '@/assets/dress-6.jpg';
import { DamagePenalty, Dress } from '@/types/dress';

export const dresses: Dress[] = [
  {
    id: '1',
    name: 'Royal Navy Ballroom Gown',
    category: 'gown',
    image: dress1,
    priceWithoutJewelry: 3500,
    priceWithJewelry: 4500,
    securityDeposit: 5000,
    sizes: ['S', 'M', 'L'],
    description: 'Elegant navy blue gown with intricate silver embellishments, perfect for cocktail parties and formal events.',
    isAvailable: true,
    rentalPeriods: [],
  },
  {
    id: '2',
    name: 'Blush Pink Bridal Lehenga',
    category: 'lehenga',
    image: dress2,
    priceWithoutJewelry: 8500,
    priceWithJewelry: 12000,
    securityDeposit: 15000,
    sizes: ['S', 'M', 'L', 'XL'],
    description: 'Stunning blush pink lehenga with gold zari work and delicate sequin embroidery. A dream for your special day.',
    isAvailable: true,
    rentalPeriods: [],
  },
  {
    id: '3',
    name: 'Emerald Silk Saree',
    category: 'saree',
    image: dress3,
    priceWithoutJewelry: 4500,
    priceWithJewelry: 6000,
    securityDeposit: 6000,
    sizes: ['Free Size'],
    description: 'Rich emerald green silk saree with traditional golden border. Timeless elegance for festive occasions.',
    isAvailable: false,
    rentalPeriods: [
      { id: 'r1', startDate: '2026-01-15', endDate: '2026-01-20', customerName: 'Priya S.' }
    ],
  },
  {
    id: '4',
    name: 'Maroon Embroidered Anarkali',
    category: 'anarkali',
    image: dress4,
    priceWithoutJewelry: 5500,
    priceWithJewelry: 7500,
    securityDeposit: 7000,
    sizes: ['S', 'M', 'L'],
    description: 'Exquisite maroon anarkali with intricate mirror work and gold embroidery. Perfect for sangeet and mehendi.',
    isAvailable: true,
    rentalPeriods: [],
  },
  {
    id: '5',
    name: 'Ivory Gold Fusion Gown',
    category: 'indo-western',
    image: dress5,
    priceWithoutJewelry: 6000,
    priceWithJewelry: 8000,
    securityDeposit: 8000,
    sizes: ['XS', 'S', 'M', 'L'],
    description: 'Contemporary fusion gown with traditional Indian embroidery. The perfect blend of modern and classic.',
    isAvailable: true,
    rentalPeriods: [],
  },
  {
    id: '6',
    name: 'Purple Royal Sharara',
    category: 'sharara',
    image: dress6,
    priceWithoutJewelry: 7000,
    priceWithJewelry: 9500,
    securityDeposit: 10000,
    sizes: ['S', 'M', 'L'],
    description: 'Regal purple sharara set with heavy kundan and pearl embroidery. Make a statement at any celebration.',
    isAvailable: true,
    rentalPeriods: [],
  },
];

export const damagePenalties: DamagePenalty[] = [
  {
    type: 'Minor Stains',
    description: 'Small stains that can be professionally cleaned',
    minCharge: 500,
    maxCharge: 1500,
  },
  {
    type: 'Major Stains',
    description: 'Large or permanent stains requiring specialized treatment',
    minCharge: 2000,
    maxCharge: 5000,
  },
  {
    type: 'Tears & Rips',
    description: 'Any tears in fabric requiring repair or replacement',
    minCharge: 1500,
    maxCharge: 8000,
  },
  {
    type: 'Missing Embellishments',
    description: 'Lost beads, sequins, stones, or other decorative elements',
    minCharge: 1000,
    maxCharge: 5000,
  },
  {
    type: 'Missing Jewelry',
    description: 'Lost or damaged jewelry pieces included with the rental',
    minCharge: 2000,
    maxCharge: 10000,
  },
  {
    type: 'Severe Damage',
    description: 'Irreparable damage requiring full replacement',
    minCharge: 0,
    maxCharge: 0, // Full outfit cost
  },
];

export const categories = [
  { id: 'all', name: 'All Collections' },
  { id: 'lehenga', name: 'Lehengas' },
  { id: 'saree', name: 'Sarees' },
  { id: 'indo-western', name: 'Indo-Western' },
  { id: 'anarkali', name: 'Anarkalis' },
  { id: 'gown', name: 'Gowns' },
  { id: 'sharara', name: 'Shararas' },
];
