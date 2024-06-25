import React, {memo, useCallback, useContext} from 'react';
import {Text, View} from 'react-native';
import {IconButton, Surface, useTheme} from 'react-native-paper';
import {CartProductModel} from '@/models/CartProductModel';
import useCartItemStyle from './styles/useCartItemStyle';
import currency from 'currency.js';
import {useTranslation} from 'react-i18next';
import {ShoppingCartContext} from '@/contexts/ShoppingCartContext/ShoppingCartContext';
import {
  currency_format,
  currency_format_wo_symbol,
  taxRate,
} from '@/globals/pricing';
import CustomText from './CustomText';
import useCartPricing from '@/hooks/useCartPricing';

type CartItemProps = {
  cart_item: CartProductModel;
  removeable?: boolean;
};

const CartItem = ({cart_item, removeable = true}: CartItemProps) => {
  const theme = useTheme();
  const {t} = useTranslation();

  const {styles} = useCartItemStyle(theme);
  const {removeOne} = useContext(ShoppingCartContext);

  const {cart} = useContext(ShoppingCartContext);
  const {taxTotal} = useCartPricing(cart);

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
        <CustomText ellipsizeMode="tail" style={styles.name}>
          {cart_item.prod.name}
        </CustomText>
      </View>
      <View style={styles.priceAndRemove}>
        <View style={styles.priceAndTax}>
          <Text style={styles.pricingText}>
            {currency(cart_item.prod.price, currency_format_wo_symbol)
              .multiply(cart_item._cart_amount)
              .format(currency_format)}
          </Text>
          <Text style={styles.taxRateText}>{`%${taxRate} ${t('tax')}`}</Text>
        </View>
        {removeable ? (
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
        ) : null}
      </View>
    </Surface>
  );
};

export default memo(CartItem);
