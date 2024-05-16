import {TFunction} from 'i18next';
import React, {memo, useContext, useState} from 'react';
import {Pressable, Text, View} from 'react-native';
import {MD3Theme} from 'react-native-paper';
import usePickItemsStyle from './styles/usePickItemsStyle';
import useLookUpPriceStyle from './styles/useLookUpPriceStyle';
import useCreditCardSelectStyle from './styles/useCreditCardSelectStyle';
import CustomButton from './CustomButton';

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
    <CustomButton theme={theme} styles={styles} onPress={onPress}>
      {t('credit_card_select')}
    </CustomButton>
  );
};

export default memo(CreditCardSelect);
