import React, {createContext, Dispatch, SetStateAction} from 'react';
import {UserModel} from '../../models/UserModel';

interface UsersContextType {
  users: UserModel[];
  user: string | undefined;
  setUser: Dispatch<SetStateAction<string | undefined>>;
}

export const UsersContext = createContext<UsersContextType>(
  {} as UsersContextType
);
