import React, {memo} from 'react';
import {Text, View} from 'react-native';
import {TFunction} from 'i18next';
import {MD3Theme} from 'react-native-paper';
import useSalesScreenPricingStyle from './styles/useSalesScreenPricingStyle';
import {CartProductModel} from '../models/CartProductModel';
import currency from 'currency.js';

type SalesScreenPricingProps = {
  t: TFunction<'translation', undefined>;
  theme: MD3Theme;
  cart: CartProductModel[];
};

const SalesScreenPricing = ({t, theme, cart}: SalesScreenPricingProps) => {
  const {styles} = useSalesScreenPricingStyle(theme);

  const subTotalMap = cart.map(
    (cart_item: CartProductModel) =>
      currency(cart_item.prod.price, {
        separator: '.',
        decimal: ',',
      }).multiply(cart_item._cart_amount).value
  );

  const subTotal = subTotalMap.reduce((acc, curr) => acc + curr, 0);

  const selectedSpecialOffer = () => 0;

  const paymentTotal = subTotal - selectedSpecialOffer();

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
