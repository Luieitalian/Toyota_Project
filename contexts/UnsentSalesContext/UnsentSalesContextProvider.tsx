import React, {memo, useCallback, useMemo, useState} from 'react';
import {UnsentSalesContext} from './UnsentSalesContext';
import {SaleModel} from '@/models/SaleModel';

type UnsentSalesContextProviderProps = {
  children: React.ReactNode;
};

const UnsentSalesContextProvider = ({
  children,
}: UnsentSalesContextProviderProps) => {
  const [unsentSales, setUnsentSales] = useState<SaleModel[]>([]);

  const addToUnsentSales = useCallback(
    (sale: SaleModel) => {
      setUnsentSales((sales: SaleModel[]) => {
        return [...sales, sale];
      });
    },
    [setUnsentSales]
  );

  const clearUnsentSales = useCallback(() => {
    setUnsentSales([]);
  }, [setUnsentSales]);

  const unsentSalesContext = useMemo(
    () => ({
      unsentSales: unsentSales,
      addToUnsentSales: addToUnsentSales,
      clearUnsentSales: clearUnsentSales,
    }),
    [unsentSales, addToUnsentSales, clearUnsentSales]
  );

  if (!unsentSalesContext) {
    return <>{children}</>;
  }

  return (
    <UnsentSalesContext.Provider value={unsentSalesContext}>
      {children}
    </UnsentSalesContext.Provider>
  );
};

export default memo(UnsentSalesContextProvider);
