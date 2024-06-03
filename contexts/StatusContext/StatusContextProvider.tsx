import React, {memo, useCallback, useMemo, useState} from 'react';
import {StatusContext} from './StatusContext';

type StatusContextProviderProps = {
  children: React.ReactNode;
};

const StatusContextProvider = ({children}: StatusContextProviderProps) => {
  const [isOnline, setIsOnline] = useState(false);

  const toggleOnlineStatus = useCallback(() => {
    return setIsOnline(!isOnline);
  }, []);

  const statusContext = useMemo(
    () => ({isOnline: isOnline, toggleOnlineStatus: toggleOnlineStatus}),
    [isOnline, toggleOnlineStatus]
  );

  if (!statusContext) {
    throw new Error('statusContext does not exist.');
  }

  return (
    <StatusContext.Provider value={statusContext}>
      {children}
    </StatusContext.Provider>
  );
};

export default memo(StatusContextProvider);
