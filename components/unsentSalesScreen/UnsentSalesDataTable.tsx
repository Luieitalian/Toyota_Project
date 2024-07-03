import React, {memo, useContext, useState} from 'react';
import {useTranslation} from 'react-i18next';
import {useTheme, DataTable, IconButton} from 'react-native-paper';
import {SaleModel} from '@/models/SaleModel';
import {FlatList, ListRenderItemInfo} from 'react-native';
import useUnsentSalesDataTableStyle from './styles/useUnsentSalesDataTableStyle';
import {StatusContext} from '@/contexts/StatusContext/StatusContext';
import {UnsentSalesContext} from '@/contexts/UnsentSalesContext/UnsentSalesContext';
import {PastSalesContext} from '@/contexts/PastSalesContext/PastSalesContext';

export type UnsentSalesDataTableProps = {unsentSales: SaleModel[]};

const UnsentSalesDataTable = ({unsentSales}: UnsentSalesDataTableProps) => {
  const {t} = useTranslation();
  const theme = useTheme();

  const [page, setPage] = useState(0);

  const numberOfItemsPerPage = 20;
  const from = page * numberOfItemsPerPage;
  const to = Math.min((page + 1) * numberOfItemsPerPage, unsentSales.length);

  const {styles} = useUnsentSalesDataTableStyle(theme);
  const {isOnline} = useContext(StatusContext);
  const {removeFromUnsentSales} = useContext(UnsentSalesContext);
  const {markSynchronized} = useContext(PastSalesContext);

  const onSynchronize = (orderID: number) => {
    if (isOnline) {
      removeFromUnsentSales(orderID);
      markSynchronized(orderID);
    }
  };

  const renderItem = ({item}: ListRenderItemInfo<SaleModel>) => (
    <DataTable.Row>
      <DataTable.Cell numeric>{item.orderID}</DataTable.Cell>
      <DataTable.Cell numeric>{item.date_time}</DataTable.Cell>
      <DataTable.Cell numeric>{item.charge}</DataTable.Cell>
      <DataTable.Cell numeric>
        <IconButton
          size={24}
          icon="arrow-up-bold"
          onPress={() => onSynchronize(item.orderID)}
        ></IconButton>
      </DataTable.Cell>
    </DataTable.Row>
  );

  const keyExtractor = (item: SaleModel, index: number) => index.toString();

  return (
    <DataTable style={styles.dataTable}>
      <DataTable.Header>
        <DataTable.Title numeric>{t('order_id')}</DataTable.Title>
        <DataTable.Title numeric>{t('date_time')}</DataTable.Title>
        <DataTable.Title numeric>{t('charge')}</DataTable.Title>
        <DataTable.Title numeric>{t('synchronize')}</DataTable.Title>
      </DataTable.Header>

      <FlatList
        data={unsentSales.slice(
          page * numberOfItemsPerPage,
          (page + 1) * numberOfItemsPerPage
        )}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
      />

      <DataTable.Pagination
        page={page}
        onPageChange={(page) => setPage(page)}
        numberOfPages={Math.ceil(unsentSales.length / numberOfItemsPerPage)}
        label={`${from + 1}-${to} of ${unsentSales.length}`}
        showFastPaginationControls
        numberOfItemsPerPage={10}
        selectPageDropdownLabel={t('row_count')}
      />
    </DataTable>
  );
};

export default memo(UnsentSalesDataTable);
