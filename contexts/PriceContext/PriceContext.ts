import {createContext} from 'react';

interface PriceContextType {
  paymentTotal: number;
  discountTotal: number;
  subTotal: number;
  taxTotal: number;
  remainingPrice: number;
  applyPayment: (amount: number) => void;
}

export const PriceContext = createContext<PriceContextType>(
  {} as PriceContextType
);
