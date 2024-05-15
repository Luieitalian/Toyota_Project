import {TFunction} from 'i18next';
import React, {memo, useContext, useState} from 'react';
import {Pressable, Text, View} from 'react-native';
import {MD3Theme} from 'react-native-paper';
import usePickItemsStyle from './styles/usePickItemsStyle';
import useLookUpPriceStyle from './styles/useLookUpPriceStyle';
import useCreditCardSelectStyle from './styles/useCreditCardSelectStyle';

type CreditCardSelectProps = {
  t: TFunction<'translation', undefined>;
  theme: MD3Theme;
};

const CreditCardSelect = ({t, theme}: CreditCardSelectProps) => {
  const {styles} = useCreditCardSelectStyle(theme);

  const onPress = () => {
    console.log('Credt Card Select');
  };

  return (
    <Pressable
      android_ripple={{
        color: theme.colors.onSecondary,
        foreground: true,
      }}
      style={styles.container}
      onPress={onPress}
    >
      <Text style={styles.text}>{t('credit_cart')}</Text>
    </Pressable>
  );
};

export default memo(CreditCardSelect);
