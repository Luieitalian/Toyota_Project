import React, {memo, useContext} from 'react';
import {useTheme} from 'react-native-paper';
import CustomButton from './common/CustomButton';
import useClearCartStyle from './styles/useClearCartStyle';
import {useTranslation} from 'react-i18next';
import {ShoppingCartContext} from '@/contexts/ShoppingCartContext/ShoppingCartContext';

const ClearCart = () => {
  const {t} = useTranslation();
  const theme = useTheme();
  const {styles} = useClearCartStyle(theme);

  const {clearCart} = useContext(ShoppingCartContext);

  const onPress = () => {
    console.log('Clearing shopping cart!');
    clearCart();
  };

  return (
    <CustomButton overridingButtonStyles={styles} onPress={onPress}>
      {t('clear_cart')}
    </CustomButton>
  );
};

export default memo(ClearCart);
