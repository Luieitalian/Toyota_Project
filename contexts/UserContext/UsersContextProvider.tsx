import React, {memo, useMemo, useState} from 'react';
import {UsersContext} from './UsersContext';
import useUsers from '../../hooks/useUsers';

type UsersContextProviderProps = {
  children: React.ReactNode;
};

const UsersContextProvider = ({children}: UsersContextProviderProps) => {
  const [user, setUser] = useState<string | undefined>();
  const {users, loadingUsers} = useUsers();

  const usersContext = useMemo(
    () => ({users: users, user: user, setUser: setUser}),
    [users, user, setUser]
  );

  if (loadingUsers) return <>{children}</>;

  return (
    <UsersContext.Provider value={usersContext}>
      {children}
    </UsersContext.Provider>
  );
};

export default memo(UsersContextProvider);
