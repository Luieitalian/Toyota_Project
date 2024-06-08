import React, {memo, useCallback, useMemo, useState} from 'react';
import {UnsentCartsContext} from './UnsentCartsContext';

type UnsentCartsContextProviderProps = {
  children: React.ReactNode;
};

const UnsentCartsContextProvider = ({
  children,
}: UnsentCartsContextProviderProps) => {
  const [unsentCartReceipts, setUnsentCartReceipts] = useState<string[]>([]);

  const unsentCartsContext = useMemo(
    () => ({
      unsentCartReceipts: unsentCartReceipts,
      setUnsentCartReceipts: setUnsentCartReceipts,
    }),
    [unsentCartReceipts, setUnsentCartReceipts]
  );

  if (!unsentCartsContext) {
    return <>{children}</>;
  }

  return (
    <UnsentCartsContext.Provider value={unsentCartsContext}>
      {children}
    </UnsentCartsContext.Provider>
  );
};

export default memo(UnsentCartsContextProvider);
