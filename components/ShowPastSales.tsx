import React, {useContext, useState} from 'react';
import {FlatList, ListRenderItemInfo, Text, View} from 'react-native';
import CustomButton from './CustomButton';
import {useTranslation} from 'react-i18next';
import {Modal, Portal, useTheme} from 'react-native-paper';
import useShowPastSalesStyle from './styles/useShowPastSalesStyle';
import {PastSalesContext} from '../contexts/PastSalesContext';
import Receipt from './Receipt';

const ShowPastSales = () => {
  const {t} = useTranslation();
  const theme = useTheme();

  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const {pastSalesReceipts} = useContext(PastSalesContext);

  const {styles} = useShowPastSalesStyle(theme);

  const onPress = () => {
    console.log('show past sales');
    showModal();
  };

  const showModal = () => {
    setModalVisible(true);
  };

  const hideModal = () => {
    setModalVisible(false);
  };

  const renderItem = (receipt_str: ListRenderItemInfo<string>) => (
    <View style={styles.receiptWrapper}>
      <Receipt receipt_str={receipt_str.item} />
    </View>
  );

  const keyExtractor = (receipt_str: string, idx: number) => {
    return idx.toString();
  };

  const ListEmptyComponent = () => <Text>{t('past_sales_empty')}</Text>;

  return (
    <>
      <CustomButton styles={styles} onPress={onPress}>
        {t('show_past_sales')}
      </CustomButton>
      <Portal>
        <Modal
          visible={modalVisible}
          onDismiss={hideModal}
          contentContainerStyle={styles.modal}
        >
          <FlatList
            numColumns={1}
            ListEmptyComponent={ListEmptyComponent}
            keyExtractor={keyExtractor}
            renderItem={renderItem}
            data={pastSalesReceipts}
          />
        </Modal>
      </Portal>
    </>
  );
};

export default ShowPastSales;
