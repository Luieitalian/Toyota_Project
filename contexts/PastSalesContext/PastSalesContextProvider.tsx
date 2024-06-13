import React, {memo, useMemo, useState} from 'react';
import {SaleModel} from '../../models/SaleModel';
import {PastSalesContext} from './PastSalesContext';

type PastSalesContextProviderProps = {
  children: React.ReactNode;
};

const mockPastSales = [
  {
    date_time: '12.05.2024 10:54:55',
    orderID: 4214121,
    charge: 124.4,
  },
  {
    date_time: '11.05.2024 10:54:55',
    orderID: 24125125,
    charge: 2323.4,
  },
  {
    date_time: '17.05.2024 10:54:55',
    orderID: 2312211,
    charge: 11.4,
  },
  {
    date_time: '31.05.2024 10:54:55',
    orderID: 52151521,
    charge: 244.4,
  },
];

const PastSalesContextProvider = ({
  children,
}: PastSalesContextProviderProps) => {
  const [pastSales, setPastSales] = useState<SaleModel[]>(mockPastSales);

  const pastSalesContext = useMemo(
    () => ({
      pastSales: pastSales,
      setPastSales: setPastSales,
    }),
    [pastSales, setPastSales]
  );

  if (!pastSalesContext) {
    return <>{children}</>;
  }

  return (
    <PastSalesContext.Provider value={pastSalesContext}>
      {children}
    </PastSalesContext.Provider>
  );
};

export default memo(PastSalesContextProvider);
