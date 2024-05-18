import {createContext} from 'react';

export const StatusContext = createContext({
  isOnline: false,
  setOnlineStatus: () => {},
});
