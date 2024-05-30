import {createContext, Dispatch} from 'react';

export const PastSalesContext = createContext({
  pastSalesReceipts: [] as string[],
  setPastSalesReceipts: Function as Dispatch<React.SetStateAction<any>>,
});
