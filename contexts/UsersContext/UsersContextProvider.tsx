import React, {memo, useMemo, useState} from 'react';
import {UsersContext} from './UsersContext';
import getUsers from '@/utils/getUsers';

export type UsersContextProviderProps = {
  children: React.ReactNode;
};

const UsersContextProvider = ({children}: UsersContextProviderProps) => {
  const [user, setUser] = useState<string | undefined>();
  const {users, loadingUsers} = getUsers();

  const usersContext = useMemo(
    () => ({users: users, user: user, setUser: setUser}),
    [users, user, setUser]
  );

  if (!usersContext) return <>{children}</>;

  return (
    <UsersContext.Provider value={usersContext}>
      {children}
    </UsersContext.Provider>
  );
};

export default memo(UsersContextProvider);
