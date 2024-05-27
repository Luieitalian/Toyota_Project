import React, {memo} from 'react';
import {Text, View} from 'react-native';
import {useTheme} from 'react-native-paper';
import useSalesScreenPricingStyle from './styles/useSalesScreenPricingStyle';
import {CartProductModel} from '../models/CartProductModel';
import currency from 'currency.js';
import useCartPricing from '../hooks/useCartPricing';
import {useTranslation} from 'react-i18next';

type SalesScreenPricingProps = {
  cart: CartProductModel[];
};

const SalesScreenPricing = ({cart}: SalesScreenPricingProps) => {
  const {t} = useTranslation();
  const theme = useTheme();

  const {styles} = useSalesScreenPricingStyle(theme);

  const {subTotal, paymentTotal} = useCartPricing(cart);

  const subTotalText = currency(subTotal).format({
    symbol: '₺',
    separator: '.',
    decimal: ',',
  });

  const paymentTotalText = currency(paymentTotal).format({
    symbol: '₺',
    separator: '.',
    decimal: ',',
  });

  return (
    <View style={styles.container}>
      <View style={styles.subTotalContainer}>
        <Text style={styles.subTotalText}>{t('sub_total')}</Text>
        <Text style={styles.subTotalPriceText}>{subTotalText}</Text>
      </View>
      <View style={styles.paymentTotalContainer}>
        <Text style={styles.paymentTotalText}>{t('payment_total')}</Text>
        <Text style={styles.paymentTotalPriceText}>{paymentTotalText}</Text>
      </View>
    </View>
  );
};

export default memo(SalesScreenPricing);
