import React, {memo, useContext} from 'react';
import {useTheme} from 'react-native-paper';
import useCreditCardSelectStyle from './styles/useCreditCardSelectStyle';
import CustomButton from './CustomButton';
import {useTranslation} from 'react-i18next';
import {ShoppingCartContext} from '../contexts/ShoppingCartContext';

const CreditCardSelect = () => {
  const theme = useTheme();
  const {t} = useTranslation();

  const {isCash, setIsCash} = useContext(ShoppingCartContext);

  const {styles} = useCreditCardSelectStyle({theme, isCash});

  const onPress = () => {
    console.log('Credi card Select');
    setIsCash(false);
  };

  return (
    <CustomButton styles={styles} onPress={onPress}>
      {t('credit_card_select')}
    </CustomButton>
  );
};

export default memo(CreditCardSelect);
