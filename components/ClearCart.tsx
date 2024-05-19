import {TFunction} from 'i18next';
import React, {memo, useContext, useState} from 'react';
import {MD3Theme, Button} from 'react-native-paper';
import CustomButton from './CustomButton';
import useClearCartStyle from './styles/useClearCartStyle';
import {ShoppingCartContext} from '../contexts/ShoppingCartContext';

type ClearCartProps = {
  t: TFunction<'translation', undefined>;
  theme: MD3Theme;
};

const ClearCart = ({t, theme}: ClearCartProps) => {
  const {styles} = useClearCartStyle(theme);

  const {clearCart} = useContext(ShoppingCartContext);

  const onPress = () => {
    console.log('Clearing shopping cart!');
    clearCart();
  };

  return (
    <CustomButton theme={theme} styles={styles} onPress={onPress}>
      {t('clear_cart')}
    </CustomButton>
  );
};

export default memo(ClearCart);
