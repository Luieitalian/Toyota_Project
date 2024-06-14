import React, {memo, useContext, useMemo, useRef, useState} from 'react';
import usePayStyle from './styles/usePayStyle';
import CustomButton from '../common/CustomButton';
import {useTranslation} from 'react-i18next';
import {Modal, Portal, useTheme} from 'react-native-paper';
import {ScrollView} from 'react-native';
import Receipt from '../common/Receipt';
import {UnsentCartsContext} from '@/contexts/UnsentCartsContext/UnsentCartsContext';
import {StatusContext} from '@/contexts/StatusContext/StatusContext';
import currency from 'currency.js';
import {CartProductModel} from '@/models/CartProductModel';
import useCartPricing from '@/hooks/useCartPricing';
import {PastSalesContext} from '@/contexts/PastSalesContext/PastSalesContext';
import {ShoppingCartContext} from '@/contexts/ShoppingCartContext/ShoppingCartContext';

const receipt = require('receipt');
import CustomModal from '../common/CustomModal';
import {SaleModel} from '@/models/SaleModel';

receipt.config.currency = '₺';
receipt.config.ruler = '-';

const Pay = () => {
  const {t} = useTranslation();
  const theme = useTheme();

  const today = useRef(new Date());
  const [modalVisible, setModalVisible] = useState<boolean>(false);

  const {styles} = usePayStyle(theme);

  const {cart, clearCart, isCash} = useContext(ShoppingCartContext);
  const {subTotal, paymentTotal, discountTotal} = useCartPricing(cart);

  const {setUnsentCartReceipts} = useContext(UnsentCartsContext);
  const {isOnline} = useContext(StatusContext);
  const {setPastSales} = useContext(PastSalesContext);

  const showModal = () => {
    setModalVisible(true);
  };

  const hideModal = () => {
    clearCart();
    setModalVisible(false);
  };

  const productLines = cart.map((cart_item: CartProductModel, idx: number) => {
    return {
      item: cart_item.prod.name,
      qty: cart_item._cart_amount,
      cost: currency(cart_item.prod.price).value,
    };
  });

  const receipt_str = useMemo(() => {
    return receipt.create([
      {type: 'empty'},
      {type: 'empty'},
      {
        type: 'text',
        value: ['HızlıPOS', 'hizlipos@magaza.com', 'www.hizlipos.com'],
        align: 'center',
      },
      {type: 'empty'},
      {type: 'empty'},
      {
        type: 'properties',
        lines: [
          {name: 'Order Number', value: '1004850027'},
          {
            name: 'Date',
            value: `${today.current.toLocaleDateString('tr-TR')} ${today.current.toLocaleTimeString('tr-TR')}`,
          },
        ],
      },
      {type: 'empty'},
      {type: 'empty'},
      {
        type: 'table',
        lines: productLines,
      },
      {type: 'empty'},
      {type: 'empty'},
      {
        type: 'text',
        align: 'center',
        value: `${isCash ? 'Cash' : 'Credit Card'} is selected.`,
      },
      {type: 'empty'},
      {type: 'empty'},
      {
        type: 'properties',
        lines: [
          {name: 'Subtotal', value: currency(subTotal).value},
          {name: 'Discount', value: currency(discountTotal).value},
          {name: 'Payment Total', value: currency(paymentTotal).value},
        ],
      },
      {type: 'empty'},
      {type: 'empty'},
      {
        type: 'text',
        value: 'Thank you for shopping, have a great day!',
      },
    ]);
  }, [productLines]);

  const onPress = () => {
    if (cart.length !== 0) {
      const newSale = {
        charge: currency(paymentTotal).value,
        date_time: `${today.current.toLocaleDateString('tr-TR')} ${today.current.toLocaleTimeString('tr-TR')}`,
        orderID: Math.random() * 10000000,
      };
      setPastSales((pastSales: SaleModel[]) => [...pastSales, newSale]);

      if (!isOnline) {
        setUnsentCartReceipts((receipts: string[]) => {
          return [...receipts, receipt_str];
        });
      }
      showModal();
    }
  };

  return (
    <>
      <CustomButton overridingButtonStyles={styles} onPress={onPress}>
        {t('pay')}
      </CustomButton>
      <CustomModal
        modalVisible={modalVisible}
        onDismissModal={hideModal}
        overridingModalStyles={styles}
      >
        <ScrollView
          contentContainerStyle={{
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Receipt receipt_str={receipt_str} />
        </ScrollView>
      </CustomModal>
    </>
  );
};

export default memo(Pay);
