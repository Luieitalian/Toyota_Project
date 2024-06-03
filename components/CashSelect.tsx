import React, {memo, useContext} from 'react';
import {useTheme} from 'react-native-paper';
import useCashSelectStyle from './styles/useCashSelectStyle';
import CustomButton from './CustomButton';
import {useTranslation} from 'react-i18next';
import {ShoppingCartContext} from '../contexts/ShoppingCartContext/ShoppingCartContext';

const CashSelect = () => {
  const theme = useTheme();
  const {t} = useTranslation();
  const {isCash, setIsCash} = useContext(ShoppingCartContext);

  const {styles} = useCashSelectStyle({theme, isCash});

  const onPress = () => {
    console.log('Cash Select');
    setIsCash(true);
  };

  return (
    <CustomButton onPress={onPress} styles={styles}>
      {t('cash_select')}
    </CustomButton>
  );
};

export default memo(CashSelect);
