import {sortDirection} from '@/components/pastSalesScreen/PastSaleDataTitle';
import {SaleModel} from '@/models/SaleModel';
import {useCallback, useEffect, useMemo, useState} from 'react';

type useSortedPastSalesProps = SaleModel[];

const useSortedPastSales = (pastSales: useSortedPastSalesProps) => {
  const [sortedPastSales, setSortedPastSales] =
    useState<SaleModel[]>(pastSales);

  const sortOrderID = useCallback(
    (sortDir: sortDirection) => {
      let pastSalesClone: SaleModel[] = pastSales.map((sale) => sale);

      switch (sortDir) {
        case 'ascending':
          pastSalesClone.sort(
            (a: SaleModel, b: SaleModel) => a.orderID - b.orderID
          );
          return pastSalesClone;
        case 'descending':
          pastSalesClone.sort(
            (a: SaleModel, b: SaleModel) => b.orderID - a.orderID
          );
          return pastSalesClone;
        case undefined:
          return pastSales;
        default:
          return pastSales;
      }
    },
    [pastSales]
  );
  const sortDateTime = useCallback(
    (sortDir: sortDirection) => {
      let pastSalesClone: SaleModel[] = pastSales.map((sale) => sale);

      switch (sortDir) {
        case 'ascending':
          pastSalesClone.sort(
            (a: SaleModel, b: SaleModel) =>
              a.date_obj!.getTime() - b.date_obj!.getTime()
          );
          return pastSalesClone;
        case 'descending':
          pastSalesClone.sort(
            (a: SaleModel, b: SaleModel) =>
              b.date_obj!.getTime() - a.date_obj!.getTime()
          );
          return pastSalesClone;
        case undefined:
          return pastSales;
        default:
          return pastSales;
      }
    },
    [pastSales]
  );
  const sortCharge = useCallback(
    (sortDir: sortDirection) => {
      let pastSalesClone: SaleModel[] = pastSales.map((sale) => sale);

      switch (sortDir) {
        case 'ascending':
          pastSalesClone.sort(
            (a: SaleModel, b: SaleModel) => a.charge - b.charge
          );
          return pastSalesClone;
        case 'descending':
          pastSalesClone.sort(
            (a: SaleModel, b: SaleModel) => b.charge - a.charge
          );
          return pastSalesClone;
        case undefined:
          return pastSales;
        default:
          return pastSales;
      }
    },
    [pastSales]
  );
  const sortSynchronized = useCallback(
    (sortDir: sortDirection) => {
      let pastSalesClone: SaleModel[] = pastSales.map((sale) => sale);

      switch (sortDir) {
        case 'ascending':
          pastSalesClone.sort((a: SaleModel, b: SaleModel) =>
            a.synchronized ? 1 : -1
          );
          return pastSalesClone;
        case 'descending':
          pastSalesClone.sort((a: SaleModel, b: SaleModel) =>
            b.synchronized ? 1 : -1
          );
          return pastSalesClone;
        case undefined:
          return pastSales;
        default:
          return pastSales;
      }
    },
    [pastSales]
  );

  const sortPastSales = useCallback(
    (category: string, sortDir: sortDirection) => {
      setSortedPastSales(() => {
        // todo
        switch (category) {
          case 'order_id':
            return sortOrderID(sortDir);
          case 'date_time':
            return sortDateTime(sortDir);
          case 'charge':
            return sortCharge(sortDir);
          case 'is_synchronized':
            return sortSynchronized(sortDir);
          default:
            return pastSales;
        }
      });
    },
    [
      pastSales,
      sortOrderID,
      sortDateTime,
      sortCharge,
      sortSynchronized,
      setSortedPastSales,
    ]
  );

  return {sortedPastSales, sortPastSales};
};

export default useSortedPastSales;
