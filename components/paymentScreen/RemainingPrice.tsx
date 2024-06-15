import React, {memo, useContext, useEffect, useState} from 'react';
import {useTheme} from 'react-native-paper';
import {useTranslation} from 'react-i18next';
import useRemainingPriceStyle from './styles/useRemainingPriceStyle';
import {Text, View} from 'react-native';
import useCartPricing from '@/hooks/useCartPricing';
import {ShoppingCartContext} from '@/contexts/ShoppingCartContext/ShoppingCartContext';
import currency from 'currency.js';

type RemainingPriceProps = {
  remainingPrice: number;
};

const RemainingPrice = ({remainingPrice}: RemainingPriceProps) => {
  const theme = useTheme();
  const {t} = useTranslation();

  const {styles} = useRemainingPriceStyle(theme);

  const {cart} = useContext(ShoppingCartContext);
  const {paymentTotal} = useCartPricing(cart);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{t('remaining_price')}</Text>
      <Text style={styles.amountText}>
        {currency(paymentTotal).format({
          symbol: '₺',
          separator: '.',
          decimal: ',',
        })}
      </Text>
    </View>
  );
};

export default memo(RemainingPrice);
