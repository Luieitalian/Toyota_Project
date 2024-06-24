import React, {memo, RefObject, useMemo, useState} from 'react';
import {useTranslation} from 'react-i18next';
import {useTheme, TextInput, DataTable, Icon} from 'react-native-paper';
import usePastSalesDataTableStyle from './styles/usePastSalesDataTableStyle';
import {SaleModel} from '@/models/SaleModel';
import {FlatList, ListRenderItem, ListRenderItemInfo} from 'react-native';
import PastSaleDetails from './PastSaleDetails';
import PastSaleDataRow from './PastSaleDataRow';

type PastSalesDataTableProps = {pastSales: SaleModel[]};

const PastSalesDataTable = ({pastSales}: PastSalesDataTableProps) => {
  const {t} = useTranslation();
  const theme = useTheme();

  const [page, setPage] = useState(0);

  const numberOfItemsPerPage = 20;
  const from = page * numberOfItemsPerPage;
  const to = Math.min((page + 1) * numberOfItemsPerPage, pastSales.length);

  const {styles} = usePastSalesDataTableStyle(theme);

  const renderItem = ({item}: ListRenderItemInfo<SaleModel>) => (
    <PastSaleDataRow item={item} />
  );

  const keyExtractor = (item: SaleModel, index: number) => index.toString();

  return (
    <DataTable style={styles.dataTable}>
      <DataTable.Header>
        <DataTable.Title numeric>{t('order_id')}</DataTable.Title>
        <DataTable.Title numeric>{t('date_time')}</DataTable.Title>
        <DataTable.Title numeric>{t('charge')}</DataTable.Title>
        <DataTable.Title numeric>{t('is_synchronized')}</DataTable.Title>
      </DataTable.Header>

      <FlatList
        data={pastSales.slice(
          page * numberOfItemsPerPage,
          (page + 1) * numberOfItemsPerPage
        )}
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
