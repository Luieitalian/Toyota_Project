import {TFunction} from 'i18next';
import React, {memo, useContext, useState} from 'react';
import {Pressable, Text, View} from 'react-native';
import {MD3Theme} from 'react-native-paper';
import useLookUpPriceStyle from './styles/useLookUpPriceStyle';

type LookUpPriceProps = {
  t: TFunction<'translation', undefined>;
  theme: MD3Theme;
};

const LookUpPrice = ({t, theme}: LookUpPriceProps) => {
  const {styles} = useLookUpPriceStyle(theme);

  const onPress = () => {
    console.log('look up price');
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
      <Text style={styles.text}>{t('look_up_price')}</Text>
    </Pressable>
  );
};

export default memo(LookUpPrice);
