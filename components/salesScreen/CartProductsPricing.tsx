import React, {memo, useContext} from 'react';
import {Text, View} from 'react-native';
import {useTheme} from 'react-native-paper';
import {CartProductModel} from '@/models/CartProductModel';
import currency from 'currency.js';
import {useTranslation} from 'react-i18next';
import useCartProductsPricingStyle from './styles/useCartProductsPricingStyle';
import {currency_format} from '@/globals/pricing';
import {PriceContext} from '@/contexts/PriceContext/PriceContext';

export type CartProductsPricingProps = {
  cart: CartProductModel[];
};

const CartProductsPricing = ({cart}: CartProductsPricingProps) => {
  const {t} = useTranslation();
  const theme = useTheme();

  const {styles} = useCartProductsPricingStyle(theme);

  const {subTotal, paymentTotal} = useContext(PriceContext);

  const subTotalText = currency(subTotal).format(currency_format);

  const paymentTotalText = currency(paymentTotal).format(currency_format);

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

export default memo(CartProductsPricing);
