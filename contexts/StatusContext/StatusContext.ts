import {createContext, Dispatch} from 'react';

interface StatusContextType {
  isOnline: boolean;
  toggleOnlineStatus: () => void;
}

export const StatusContext = createContext<StatusContextType>(
  {} as StatusContextType
);
