import {createContext, Dispatch} from 'react';

interface StatusContextType {
  isOnline: boolean;
  toggleOnlineStatus: Dispatch<React.SetStateAction<boolean>>;
}

export const StatusContext = createContext<StatusContextType>(
  {} as StatusContextType
);
