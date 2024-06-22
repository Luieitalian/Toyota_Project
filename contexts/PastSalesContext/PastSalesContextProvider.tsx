import React, {memo, useCallback, useMemo, useState} from 'react';
import {SaleModel} from '@/models/SaleModel';
import {PastSalesContext} from './PastSalesContext';

type PastSalesContextProviderProps = {
  children: React.ReactNode;
};

const mockPastSales = [
  {
    charge: 1948,
    orderID: 34730,
    date_time: '9/26/2023',
  },
  {
    charge: 1063,
    orderID: 17324,
    date_time: '2/8/2024',
  },
  {
    charge: 1992,
    orderID: 47451,
    date_time: '6/3/2024',
  },
  {
    charge: 1773,
    orderID: 11820,
    date_time: '10/8/2023',
  },
  {
    charge: 1306,
    orderID: 28664,
    date_time: '4/4/2024',
  },
  {
    charge: 2000,
    orderID: 45651,
    date_time: '8/18/2023',
  },
  {
    charge: 1837,
    orderID: 14813,
    date_time: '1/22/2024',
  },
  {
    charge: 1481,
    orderID: 11454,
    date_time: '11/23/2023',
  },
  {
    charge: 1133,
    orderID: 21098,
    date_time: '12/1/2023',
  },
  {
    charge: 1871,
    orderID: 39207,
    date_time: '3/17/2024',
  },
  {
    charge: 1436,
    orderID: 15106,
    date_time: '9/24/2023',
  },
  {
    charge: 1875,
    orderID: 44972,
    date_time: '7/8/2023',
  },
  {
    charge: 1025,
    orderID: 46570,
    date_time: '6/1/2024',
  },
  {
    charge: 1801,
    orderID: 38940,
    date_time: '8/2/2023',
  },
  {
    charge: 1802,
    orderID: 36133,
    date_time: '10/27/2023',
  },
  {
    charge: 1337,
    orderID: 43702,
    date_time: '1/20/2024',
  },
  {
    charge: 1864,
    orderID: 15479,
    date_time: '2/6/2024',
  },
  {
    charge: 1810,
    orderID: 11331,
    date_time: '11/2/2023',
  },
  {
    charge: 1473,
    orderID: 39910,
    date_time: '12/24/2023',
  },
  {
    charge: 1147,
    orderID: 10518,
    date_time: '11/26/2023',
  },
  {
    charge: 1614,
    orderID: 33491,
    date_time: '4/30/2024',
  },
  {
    charge: 1285,
    orderID: 37939,
    date_time: '12/29/2023',
  },
  {
    charge: 1294,
    orderID: 25119,
    date_time: '5/10/2024',
  },
  {
    charge: 1523,
    orderID: 18720,
    date_time: '12/28/2023',
  },
  {
    charge: 1475,
    orderID: 17736,
    date_time: '1/31/2024',
  },
  {
    charge: 1835,
    orderID: 29701,
    date_time: '1/5/2024',
  },
  {
    charge: 1414,
    orderID: 25939,
    date_time: '6/28/2023',
  },
  {
    charge: 1087,
    orderID: 19571,
    date_time: '11/25/2023',
  },
  {
    charge: 1145,
    orderID: 40789,
    date_time: '1/17/2024',
  },
  {
    charge: 1669,
    orderID: 14522,
    date_time: '8/30/2023',
  },
  {
    charge: 1388,
    orderID: 49908,
    date_time: '11/16/2023',
  },
  {
    charge: 1932,
    orderID: 38776,
    date_time: '12/20/2023',
  },
  {
    charge: 1348,
    orderID: 23801,
    date_time: '7/28/2023',
  },
  {
    charge: 1856,
    orderID: 34985,
    date_time: '9/10/2023',
  },
  {
    charge: 1377,
    orderID: 49240,
    date_time: '3/21/2024',
  },
  {
    charge: 1718,
    orderID: 38946,
    date_time: '11/6/2023',
  },
  {
    charge: 1723,
    orderID: 22874,
    date_time: '3/29/2024',
  },
  {
    charge: 1378,
    orderID: 44989,
    date_time: '1/5/2024',
  },
  {
    charge: 1886,
    orderID: 18715,
    date_time: '6/11/2024',
  },
  {
    charge: 1131,
    orderID: 37810,
    date_time: '7/16/2023',
  },
  {
    charge: 1544,
    orderID: 46321,
    date_time: '6/22/2023',
  },
  {
    charge: 1997,
    orderID: 17266,
    date_time: '3/7/2024',
  },
  {
    charge: 1224,
    orderID: 24130,
    date_time: '1/28/2024',
  },
  {
    charge: 1104,
    orderID: 24276,
    date_time: '3/4/2024',
  },
  {
    charge: 1318,
    orderID: 22962,
    date_time: '12/11/2023',
  },
  {
    charge: 1354,
    orderID: 21766,
    date_time: '6/11/2024',
  },
  {
    charge: 1244,
    orderID: 18476,
    date_time: '11/18/2023',
  },
  {
    charge: 1373,
    orderID: 11848,
    date_time: '7/15/2023',
  },
  {
    charge: 1433,
    orderID: 44643,
    date_time: '11/15/2023',
  },
  {
    charge: 1162,
    orderID: 31485,
    date_time: '6/10/2024',
  },
  {
    charge: 1452,
    orderID: 45401,
    date_time: '10/23/2023',
  },
  {
    charge: 1156,
    orderID: 43316,
    date_time: '1/31/2024',
  },
  {
    charge: 1133,
    orderID: 41929,
    date_time: '11/17/2023',
  },
  {
    charge: 1570,
    orderID: 46182,
    date_time: '2/19/2024',
  },
  {
    charge: 1652,
    orderID: 27691,
    date_time: '8/28/2023',
  },
  {
    charge: 1926,
    orderID: 13165,
    date_time: '10/8/2023',
  },
  {
    charge: 1028,
    orderID: 19765,
    date_time: '12/2/2023',
  },
  {
    charge: 1133,
    orderID: 21749,
    date_time: '2/13/2024',
  },
  {
    charge: 1949,
    orderID: 37198,
    date_time: '8/10/2023',
  },
  {
    charge: 1366,
    orderID: 19678,
    date_time: '11/8/2023',
  },
];

const PastSalesContextProvider = ({
  children,
}: PastSalesContextProviderProps) => {
  const [pastSales, setPastSales] = useState<SaleModel[]>(mockPastSales);

  const addToPastSales = useCallback(
    (sale: SaleModel) => {
      setPastSales((sales) => [...sales, sale]);
    },
    [setPastSales]
  );

  const clearPastSales = useCallback(() => {
    setPastSales([]);
  }, [setPastSales]);

  const pastSalesContext = useMemo(
    () => ({
      pastSales: pastSales,
      addToPastSales: addToPastSales,
      clearPastSales: clearPastSales,
    }),
    [pastSales, addToPastSales, clearPastSales]
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
