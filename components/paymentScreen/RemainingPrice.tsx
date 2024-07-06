import React, {memo} from 'react';
import {useTheme} from 'react-native-paper';
import {useTranslation} from 'react-i18next';
import useRemainingPriceStyle from './styles/useRemainingPriceStyle';
import {Text, View} from 'react-native';
import currency from 'currency.js';
import {currency_format} from '@/globals/pricing';

export type RemainingPriceProps = {
  remainingPrice: number;
};

const RemainingPrice = ({remainingPrice}: RemainingPriceProps) => {
  const theme = useTheme();
  const {t} = useTranslation();

  const {styles} = useRemainingPriceStyle(theme);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{t('remaining_price')}</Text>
      <Text style={styles.amountText}>
        {currency(remainingPrice).format(currency_format)}
      </Text>
    </View>
  );
};

export default memo(RemainingPrice);
