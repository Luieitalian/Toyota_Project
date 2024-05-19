import React, {memo} from 'react';
import {Text, View} from 'react-native';
import {TFunction} from 'i18next';
import {MD3Theme} from 'react-native-paper';
import useSalesScreenPricingStyle from './styles/useSalesScreenPricingStyle';
import {CartProductModel} from '../models/CartProductModel';
import currency from 'currency.js';
import useCartPricing from '../hooks/useCartPricing';

type SalesScreenPricingProps = {
  t: TFunction<'translation', undefined>;
  theme: MD3Theme;
  cart: CartProductModel[];
};

const SalesScreenPricing = ({t, theme, cart}: SalesScreenPricingProps) => {
  const {styles} = useSalesScreenPricingStyle(theme);

  const {subTotal} = useCartPricing(cart);

  const subTotalText = currency(subTotal).format({
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
        <Text style={styles.paymentTotalPriceText}>15 TL</Text>
      </View>
    </View>
  );
};

export default memo(SalesScreenPricing);
