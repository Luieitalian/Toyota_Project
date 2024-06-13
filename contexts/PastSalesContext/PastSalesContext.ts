import {createContext, Dispatch} from 'react';
import {SaleModel} from '../../models/SaleModel';

interface PastSalesContextType {
  pastSales: SaleModel[];
  setPastSales: Dispatch<React.SetStateAction<SaleModel[]>>;
}

export const PastSalesContext = createContext<PastSalesContextType>(
  {} as PastSalesContextType
);
