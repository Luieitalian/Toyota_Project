import React, {memo, useContext, useEffect, useState} from 'react';
import {useTheme} from 'react-native-paper';
import {useTranslation} from 'react-i18next';
import useRemainingPriceStyle from './styles/useRemainingPriceStyle';
import {Text, View} from 'react-native';

type RemainingPriceProps = {
  remainingPrice: number;
};

const RemainingPrice = ({remainingPrice}: RemainingPriceProps) => {
  const theme = useTheme();
  const {t} = useTranslation();

  const {styles} = useRemainingPriceStyle(theme);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{remainingPrice}</Text>
    </View>
  );
};

export default memo(RemainingPrice);
