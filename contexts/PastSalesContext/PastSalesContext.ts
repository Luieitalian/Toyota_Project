import {createContext} from 'react';
import {SaleModel} from '@/models/SaleModel';

interface PastSalesContextType {
  pastSales: SaleModel[];
  addToPastSales: (sale: SaleModel) => void;
  clearPastSales: () => void;
  markSynchronized: (orderID: number) => void;
  markAllSynchronized: () => void;
  markReturned: (orderID: number) => void;
}

export const PastSalesContext = createContext<PastSalesContextType>(
  {} as PastSalesContextType
);
