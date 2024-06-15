import React, {memo, useContext, useEffect, useState} from 'react';
import {Text, View} from 'react-native';
import usePaymentInteractionsStyle from './styles/usePaymentInteractionsStyle';
import {useTranslation} from 'react-i18next';
import {useTheme} from 'react-native-paper';
import {ShoppingCartContext} from '@/contexts/ShoppingCartContext/ShoppingCartContext';
import useCartPricing from '@/hooks/useCartPricing';
import RemainingPrice from './RemainingPrice';

const PaymentInteractions = () => {
  const {t} = useTranslation();
  const theme = useTheme();

  const {styles} = usePaymentInteractionsStyle(theme);
  const [remainingPrice, setRemainingPrice] = useState<number>(0);

  const {cart} = useContext(ShoppingCartContext);
  const {paymentTotal} = useCartPricing(cart);

  useEffect(() => {
    setRemainingPrice(paymentTotal);
  }, []);

  return (
    <View style={styles.container}>
      <RemainingPrice remainingPrice={remainingPrice} />
    </View>
  );
};

export default memo(PaymentInteractions);
