import React, {memo, useMemo, useState} from 'react';
import {useTranslation} from 'react-i18next';
import {useTheme, DataTable} from 'react-native-paper';
import usePastSalesDataTableStyle from './styles/usePastSalesDataTableStyle';
import {SaleModel} from '@/models/SaleModel';
import {FlatList, ListRenderItemInfo} from 'react-native';
import PastSaleDataRow from './PastSaleDataRow';
import PastSaleDataTitle, {sortDirection} from './PastSaleDataTitle';
import useSortedPastSales from '@/hooks/useSortedPastSales';

type PastSalesDataTableProps = {
  pastSales: SaleModel[];
  filter: string | undefined;
};

const PastSalesDataTable = ({pastSales, filter}: PastSalesDataTableProps) => {
  const {t} = useTranslation();
  const theme = useTheme();

  const [page, setPage] = useState(0);

  const numberOfItemsPerPage = 20;
  const from = page * numberOfItemsPerPage;
  const to = Math.min((page + 1) * numberOfItemsPerPage, pastSales.length);

  const {styles} = usePastSalesDataTableStyle(theme);

  const {sortedPastSales, sortPastSales} = useSortedPastSales(pastSales);

  const renderItem = ({item}: ListRenderItemInfo<SaleModel>) => (
    <PastSaleDataRow item={item} />
  );

  const keyExtractor = (item: SaleModel, index: number) => index.toString();

  const filteredPastSales = useMemo(() => {
    let _filteredSales = sortedPastSales.map((sale) => sale); // copy

    if (filter !== undefined) {
      _filteredSales = _filteredSales.filter(
        (sale: SaleModel) =>
          sale.orderID.toString().slice(0, filter.length) === filter
      );
    }

    _filteredSales.slice(
      page * numberOfItemsPerPage,
      (page + 1) * numberOfItemsPerPage
    );

    return _filteredSales;
  }, [sortedPastSales, filter, page]);

  const onPressTitle = (category: string, sortDir: sortDirection) => {
    sortPastSales(category, sortDir);
  };

  return (
    <DataTable style={styles.dataTable}>
      <DataTable.Header>
        <PastSaleDataTitle numeric onPress={onPressTitle} category="order_id" />
        <PastSaleDataTitle
          numeric
          onPress={onPressTitle}
          category="date_time"
        />
        <PastSaleDataTitle numeric onPress={onPressTitle} category="charge" />
        <PastSaleDataTitle
          numeric
          onPress={onPressTitle}
          category="is_synchronized"
        />
      </DataTable.Header>

      <FlatList
        keyboardShouldPersistTaps="handled"
        data={filteredPastSales}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
      />

      <DataTable.Pagination
        page={page}
        onPageChange={(page) => setPage(page)}
        numberOfPages={Math.ceil(pastSales.length / numberOfItemsPerPage)}
        label={`${from + 1}-${to} of ${pastSales.length}`}
        showFastPaginationControls
        numberOfItemsPerPage={10}
        selectPageDropdownLabel={t('row_count')}
      />
    </DataTable>
  );
};

export default memo(PastSalesDataTable);
