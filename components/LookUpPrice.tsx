import {TFunction} from 'i18next';
import React, {memo, useContext, useState} from 'react';
import {Pressable, Text, View} from 'react-native';
import {MD3Theme} from 'react-native-paper';
import useLookUpPriceStyle from './styles/useLookUpPriceStyle';
import CustomButton from './CustomButton';

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
    <CustomButton theme={theme} styles={styles} onPress={onPress}>
      {t('look_up_price')}
    </CustomButton>
  );
};

export default memo(LookUpPrice);
