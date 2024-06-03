import React, {memo, useMemo, useState} from 'react';
import {PastSalesContext} from './PastSalesContext';

type PastSalesContextProviderProps = {
  children: React.ReactNode;
};

const PastSalesContextProvider = ({
  children,
}: PastSalesContextProviderProps) => {
  const [pastSalesReceipts, setPastSalesReceipts] = useState<string[]>([]);

  const pastSalesContext = useMemo(
    () => ({
      pastSalesReceipts: pastSalesReceipts,
      setPastSalesReceipts: setPastSalesReceipts,
    }),
    [pastSalesReceipts, setPastSalesReceipts]
  );

  if (!pastSalesContext) {
    throw new Error('pastSalesContext does not exist.');
  }

  return (
    <PastSalesContext.Provider value={pastSalesContext}>
      {children}
    </PastSalesContext.Provider>
  );
};

export default memo(PastSalesContextProvider);
