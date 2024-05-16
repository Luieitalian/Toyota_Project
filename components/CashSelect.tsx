import {TFunction} from 'i18next';
import React, {memo} from 'react';
import {Pressable, Text, View} from 'react-native';
import {MD3Theme} from 'react-native-paper';
import useCashSelectStyle from './styles/useCashSelectStyle';
import CustomButton from './CustomButton';

type CashSelectProps = {
  t: TFunction<'translation', undefined>;
  theme: MD3Theme;
};

const CashSelect = ({t, theme}: CashSelectProps) => {
  const {styles} = useCashSelectStyle(theme);

  const onPress = () => {
    console.log('Cash Select');
  };

  return (
    <CustomButton onPress={onPress} styles={styles} theme={theme}>
      {t('cash_select')}
    </CustomButton>
  );
};

export default memo(CashSelect);
