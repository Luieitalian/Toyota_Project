import {createContext, Dispatch} from 'react';

interface PastSalesContextType {
  pastSalesReceipts: string[];
  setPastSalesReceipts: Dispatch<React.SetStateAction<string[]>>;
}

export const PastSalesContext = createContext<PastSalesContextType>(
  {} as PastSalesContextType
);
