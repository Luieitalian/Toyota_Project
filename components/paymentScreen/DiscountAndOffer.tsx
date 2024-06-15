import React, {memo, useContext, useEffect, useState} from 'react';
import {useTheme} from 'react-native-paper';
import {useTranslation} from 'react-i18next';
import {Text, View} from 'react-native';
import useDiscountAndOfferStyle from './styles/useDiscountAndOfferStyle';

type DiscountAndOfferProps = {
  remainingPrice: number;
};

const DiscountAndOffer = ({remainingPrice}: DiscountAndOfferProps) => {
  const theme = useTheme();
  const {t} = useTranslation();

  const {styles} = useDiscountAndOfferStyle(theme);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{remainingPrice}</Text>
    </View>
  );
};

export default memo(DiscountAndOffer);
