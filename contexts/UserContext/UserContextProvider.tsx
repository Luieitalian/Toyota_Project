import React, {memo, useMemo, useState} from 'react';
import {UserContext} from './UserContext';

type UserContextProviderProps = {
  children: React.ReactNode;
};

const UserContextProvider = ({children}: UserContextProviderProps) => {
  const [user, setUser] = useState<string>();
  const userContext = useMemo(() => ({user: user}), []);

  if (!userContext) {
    throw new Error('unsentCartsContext does not exist.');
  }

  return (
    <UserContext.Provider value={userContext}>{children}</UserContext.Provider>
  );
};

export default memo(UserContextProvider);
