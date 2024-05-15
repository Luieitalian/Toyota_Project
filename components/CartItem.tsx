import React, {memo, useContext, useEffect} from 'react';
import {Text, View} from 'react-native';
import {TFunction} from 'i18next';
import {MD3Theme} from 'react-native-paper';
import {CartProductModel} from '../models/CartProductModel';
import useCartItemStyle from './styles/useCartItemStyle';
import {ShoppingCartContext} from '../contexts/ShoppingCartContext';
import currency from 'currency.js';

type CartItemProps = {
  t: TFunction<'translation', undefined>;
  theme: MD3Theme;
  cart_item: CartProductModel;
};

const CartItem = ({t, theme, cart_item}: CartItemProps) => {
  const {styles} = useCartItemStyle(theme);

  return (
    <View style={styles.container}>
      <View style={styles.nameAndAmount}>
        <Text style={styles.amount}>
          {cart_item._cart_amount > 1
            ? t('itemWithCount_other', {count: cart_item._cart_amount})
            : t('itemWithCount_one', {count: cart_item._cart_amount})}
        </Text>
        <Text style={styles.name}>{cart_item.prod.name}</Text>
      </View>
      <View>
        <Text style={styles.pricingText}>
          {'₺ ' +
            currency(cart_item.prod.price, {
              separator: '.',
              decimal: ',',
            }).multiply(cart_item._cart_amount)}
        </Text>
      </View>
    </View>
  );
};

export default memo(CartItem);
