import {TFunction} from 'i18next';
import React, {memo, useContext, useState} from 'react';
import {Pressable, Text, View} from 'react-native';
import {MD3Theme, Button} from 'react-native-paper';
import usePayStyle from './styles/usePayStyle';
import CustomButton from './CustomButton';

type PayProps = {
  t: TFunction<'translation', undefined>;
  theme: MD3Theme;
};

const Pay = ({t, theme}: PayProps) => {
  const {styles} = usePayStyle(theme);

  const onPress = () => {
    console.log('Pay');
  };

  return (
    <CustomButton theme={theme} styles={styles} onPress={onPress}>
      {t('pay')}
    </CustomButton>
  );
};

export default memo(Pay);
