import {createContext, Dispatch} from 'react';

interface UnsentCartsContextType {
  unsentCartReceipts: string[];
  setUnsentCartReceipts: Dispatch<React.SetStateAction<string[]>>;
}

export const UnsentCartsContext = createContext<UnsentCartsContextType>(
  {} as UnsentCartsContextType
);
