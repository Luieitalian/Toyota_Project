import React, {memo} from 'react';
import {useTheme} from 'react-native-paper';
import useCashSelectStyle from './styles/useCashSelectStyle';
import CustomButton from './CustomButton';
import {useTranslation} from 'react-i18next';

const CashSelect = () => {
  const theme = useTheme();
  const {t} = useTranslation();
  const {styles} = useCashSelectStyle(theme);

  const onPress = () => {
    console.log('Cash Select');
  };

  return (
    <CustomButton onPress={onPress} styles={styles}>
      {t('cash_select')}
    </CustomButton>
  );
};

export default memo(CashSelect);
