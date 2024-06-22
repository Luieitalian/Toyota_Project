import React, {memo, useCallback, useMemo, useState} from 'react';
import {StatusContext} from './StatusContext';

type StatusContextProviderProps = {
  children: React.ReactNode;
};

const StatusContextProvider = ({children}: StatusContextProviderProps) => {
  const [isOnline, setIsOnline] = useState(false);
  const [isSyncAutomatic, setIsSyncAutomatic] = useState(false);

  const toggleSyncAutomatic = useCallback(() => {
    return setIsSyncAutomatic((s) => !s);
  }, [setIsSyncAutomatic]);

  const toggleOnlineStatus = useCallback(() => {
    return setIsOnline((s) => !s);
  }, [setIsOnline]);

  const statusContext = useMemo(
    () => ({
      isOnline: isOnline,
      toggleOnlineStatus: toggleOnlineStatus,
      isSyncAutomatic: isSyncAutomatic,
      toggleSyncAutomatic: toggleSyncAutomatic,
    }),
    [isOnline, toggleOnlineStatus, isSyncAutomatic, toggleSyncAutomatic]
  );

  if (!statusContext) {
    return <>{children}</>;
  }

  return (
    <StatusContext.Provider value={statusContext}>
      {children}
    </StatusContext.Provider>
  );
};

export default memo(StatusContextProvider);
