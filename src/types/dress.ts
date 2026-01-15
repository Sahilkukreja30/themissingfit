export interface Dress {
  id: string;
  name: string;
  category: 'lehenga' | 'saree' | 'indo-western' | 'anarkali' | 'gown' | 'sharara';
  image: string;
  priceWithoutJewelry: number;
  priceWithJewelry: number;
  securityDeposit: number;
  sizes: string[];
  description: string;
  isAvailable: boolean;
  rentalPeriods?: RentalPeriod[];
}

export interface RentalPeriod {
  id: string;
  startDate: string;
  endDate: string;
  customerName?: string;
}

export interface DamagePenalty {
  type: string;
  description: string;
  minCharge: number;
  maxCharge: number;
}
