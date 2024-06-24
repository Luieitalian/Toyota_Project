import React, {memo, useContext, useState} from 'react';
import {useTranslation} from 'react-i18next';
import {Button, Dialog, Portal, useTheme} from 'react-native-paper';
import {SaleModel} from '@/models/SaleModel';
import usePastSaleDetailsStyle from './styles/usePastSaleDetailsStyle';
import CustomModal from '@/components/common/CustomModal';
import {FlatList, ListRenderItemInfo, Text, View} from 'react-native';
import {CartProductModel} from '@/models/CartProductModel';
import CartItem from '@/components/common/CartItem';
import currency from 'currency.js';
import {currency_format} from '@/globals/pricing';
import {PastSalesContext} from '@/contexts/PastSalesContext/PastSalesContext';
import {StatusContext} from '@/contexts/StatusContext/StatusContext';

type PastSaleDetailsProps = {
  sale: SaleModel;
  modalVisible: boolean;
  onDismissModal: () => void;
};

const PastSaleDetails = ({
  sale,
  modalVisible,
  onDismissModal,
}: PastSaleDetailsProps) => {
  const {t} = useTranslation();
  const theme = useTheme();

  const {styles} = usePastSaleDetailsStyle(theme);

  const {markSynchronized, markReturned} = useContext(PastSalesContext);
  const {isOnline} = useContext(StatusContext);
  const [dialogVisible, setDialogVisible] = useState<boolean>(false);

  const renderItem = ({item}: ListRenderItemInfo<CartProductModel>) => (
    <CartItem key={item.prod.id} removeable={false} cart_item={item} />
  );

  const onSynchronize = () => {
    if (isOnline) {
      markSynchronized(sale.orderID);
    }
  };

  const onDialog = () => {
    setDialogVisible(true);
  };

  const onDismissDialog = () => {
    setDialogVisible(false);
    markReturned(sale.orderID);
  };

  const onReturnSale = () => {
    onDialog();
  };

  return (
    <CustomModal
      modalVisible={modalVisible}
      overridingModalStyles={styles}
      onDismissModal={onDismissModal}
    >
      <View style={styles.container}>
        <Text style={styles.saleDetailText}>
          {t('sale_order_id', {id: sale.orderID})}
        </Text>
        <Text style={styles.saleDetailText}>
          {t('sale_charge', {
            charge: currency(sale.charge).format(currency_format),
          })}
        </Text>
        <Text style={styles.saleDetailText}>
          {t('sale_date_time', {date_time: sale.date_time})}
        </Text>
        <Text style={styles.saleDetailText}>
          {t('sale_chosen_special_offerID', {
            offer_id: sale.chosenSpecialOfferID
              ? sale.chosenSpecialOfferID
              : t('not_chosen'),
          })}
        </Text>
        <Text style={styles.saleDetailText}>
          {t('sale_synchronized', {
            sync: sale.synchronized ? t('yes') : t('no'),
          })}
        </Text>
        <Text style={styles.saleDetailText}>
          {t('sale_is_returned', {
            returned: sale.isReturned ? t('yes') : t('no'),
          })}
        </Text>
        <Button onPress={onSynchronize} mode="contained">
          {t('synchronize')}
        </Button>
        <Button
          disabled={sale.isReturned}
          onPress={onReturnSale}
          mode="contained"
        >
          {t('return_sale')}
        </Button>
        <Portal>
          <Dialog onDismiss={onDismissDialog} visible={dialogVisible}>
            <Dialog.Content>
              <Text style={styles.dialogContent}>
                {t('sale_returning', {sale: sale})}
              </Text>
            </Dialog.Content>
            <Dialog.Actions>
              <Button onPress={onDismissDialog}>{t('OK')}</Button>
            </Dialog.Actions>
          </Dialog>
        </Portal>
        <FlatList
          contentContainerStyle={styles.flatlist}
          keyboardShouldPersistTaps="handled"
          numColumns={1}
          data={sale.cart}
          renderItem={renderItem}
        />
      </View>
    </CustomModal>
  );
};

export default memo(PastSaleDetails);
