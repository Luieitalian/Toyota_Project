import {createContext} from 'react';

interface StatusContextType {
  isOnline: boolean;
  isSyncAutomatic: boolean;
  toggleOnlineStatus: () => void;
  toggleSyncAutomatic: () => void;
}

export const StatusContext = createContext<StatusContextType>(
  {} as StatusContextType
);
