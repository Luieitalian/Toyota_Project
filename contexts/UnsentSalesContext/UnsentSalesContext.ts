import {SaleModel} from '@/models/SaleModel';
import {createContext} from 'react';

interface UnsentSalesContextType {
  unsentSales: SaleModel[];
  addToUnsentSales: (sale: SaleModel) => void;
  clearUnsentSales: () => void;
}

export const UnsentSalesContext = createContext<UnsentSalesContextType>(
  {} as UnsentSalesContextType
);
