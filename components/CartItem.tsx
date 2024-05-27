import React, {memo, useCallback, useContext} from 'react';
import {Text, View} from 'react-native';
import {IconButton, Surface, useTheme} from 'react-native-paper';
import {CartProductModel} from '../models/CartProductModel';
import useCartItemStyle from './styles/useCartItemStyle';
import {ShoppingCartContext} from '../contexts/ShoppingCartContext';
import currency from 'currency.js';
import {useTranslation} from 'react-i18next';

type CartItemProps = {
  cart_item: CartProductModel;
};

const CartItem = ({cart_item}: CartItemProps) => {
  const theme = useTheme();
  const {t} = useTranslation();

  const {styles} = useCartItemStyle(theme);
  const {removeOne} = useContext(ShoppingCartContext);

  const onPress = useCallback(() => {
    removeOne(cart_item.prod.id);
  }, []);

  return (
    <Surface elevation={2} style={styles.container}>
      <View style={styles.nameAndAmount}>
        <Text style={styles.amount}>
          {cart_item._cart_amount > 1
            ? t('itemWithCount_other', {count: cart_item._cart_amount})
            : t('itemWithCount_one', {count: cart_item._cart_amount})}
        </Text>
        <Text style={styles.name}>{cart_item.prod.name}</Text>
      </View>
      <View style={styles.priceAndRemove}>
        <Text style={styles.pricingText}>
          {currency(cart_item.prod.price, {
            separator: '.',
            decimal: ',',
          })
            .multiply(cart_item._cart_amount)
            .format({symbol: '₺', separator: '.', decimal: ','})}
        </Text>
        <View>
          <IconButton
            onPress={onPress}
            size={styles.removeButton.width}
            iconColor={styles.removeButton.color}
            containerColor={styles.removeButton.backgroundColor}
            rippleColor={styles.removeButton.color}
            icon="minus-circle"
            mode="contained"
          />
        </View>
      </View>
    </Surface>
  );
};

export default memo(CartItem);
