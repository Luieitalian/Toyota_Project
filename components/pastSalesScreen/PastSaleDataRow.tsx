import React, {memo, useState} from 'react';
import {useTranslation} from 'react-i18next';
import {useTheme, DataTable, Icon} from 'react-native-paper';
import PastSaleDetails from './PastSaleDetails';
import usePastSaleDataRowStyle from './styles/usePastSaleDataRowStyle';
import {SaleModel} from '@/models/SaleModel';

export type PastSaleDataRowProps = {item: SaleModel};

const PastSaleDataRow = ({item}: PastSaleDataRowProps) => {
  const {t} = useTranslation();
  const theme = useTheme();

  const [modalVisible, setModalVisible] = useState<boolean>(false);

  const {styles} = usePastSaleDataRowStyle(theme);

  const onPress = () => {
    setModalVisible(true);
  };

  const onDismissModal = () => {
    setModalVisible(false);
  };

  return (
    <>
      <DataTable.Row onPress={onPress}>
        <DataTable.Cell numeric>{item.orderID}</DataTable.Cell>
        <DataTable.Cell numeric>{item.date_time}</DataTable.Cell>
        <DataTable.Cell numeric>{item.charge}</DataTable.Cell>
        <DataTable.Cell numeric>
          {item.synchronized ? (
            <Icon size={24} source="check-bold" />
          ) : (
            <Icon size={24} source="close-thick" />
          )}
        </DataTable.Cell>
      </DataTable.Row>
      <PastSaleDetails
        sale={item}
        modalVisible={modalVisible}
        onDismissModal={onDismissModal}
      />
    </>
  );
};

export default memo(PastSaleDataRow);
