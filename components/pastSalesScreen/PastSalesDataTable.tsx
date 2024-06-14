import React, {memo, RefObject, useMemo, useState} from 'react';
import {useTranslation} from 'react-i18next';
import {useTheme, TextInput, DataTable} from 'react-native-paper';
import usePastSalesDataTableStyle from './styles/usePastSalesDataTableStyle';
import {SaleModel} from '@/models/SaleModel';

type PastSalesDataTableProps = {pastSales: SaleModel[]};

const PastSalesDataTable = ({pastSales}: PastSalesDataTableProps) => {
  const {t} = useTranslation();
  const theme = useTheme();

  const {styles} = usePastSalesDataTableStyle(theme);

  return (
    <DataTable style={styles.dataTable}>
      <DataTable.Header>
        <DataTable.Title>{t('number_order')}</DataTable.Title>
        <DataTable.Title>{t('date_time')}</DataTable.Title>
        <DataTable.Title>{t('charge')}</DataTable.Title>
        <DataTable.Title>{t('is_synchronized')}</DataTable.Title>
      </DataTable.Header>

      {pastSales.map((pastSale: SaleModel, idx: number) => (
        <DataTable.Row key={idx}>
          <DataTable.Cell>{idx + 1}</DataTable.Cell>
          <DataTable.Cell>{pastSale.date_time}</DataTable.Cell>
          <DataTable.Cell>{pastSale.charge}</DataTable.Cell>
          <DataTable.Cell>{pastSale.synchronized}</DataTable.Cell>
        </DataTable.Row>
      ))}
    </DataTable>
  );
};

export default memo(PastSalesDataTable);
