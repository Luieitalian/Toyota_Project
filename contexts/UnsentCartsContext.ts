import {createContext, Dispatch} from 'react';

export const UnsentCartsContext = createContext({
  unsentCartReceipts: [] as string[],
  setUnsentCartReceipts: Function as Dispatch<React.SetStateAction<any>>,
});
