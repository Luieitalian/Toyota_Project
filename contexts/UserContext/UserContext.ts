import {createContext, Dispatch} from 'react';

interface UserContextType {
  user: string | undefined;
}

export const UserContext = createContext<UserContextType>(
  {} as UserContextType
);
