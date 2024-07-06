import React, {memo, useContext} from 'react';
import {FlatList, ListRenderItemInfo, View} from 'react-native';
import {useTheme} from 'react-native-paper';
import {CartProductModel} from '@/models/CartProductModel';
import CartItem from '@/components/common/CartItem';
import {useTranslation} from 'react-i18next';
import {ShoppingCartContext} from '@/contexts/ShoppingCartContext/ShoppingCartContext';
import useCartProductsStyle from './styles/useCartProductsStyle';
import CartProductsPricing from './CartProductsPricing';

const CartProducts = () => {
  const {t} = useTranslation();
  const theme = useTheme();

  const {styles} = useCartProductsStyle(theme);
  const {cart} = useContext(ShoppingCartContext);

  const renderItem = ({item}: ListRenderItemInfo<CartProductModel>) => (
    <CartItem key={item.prod.id} cart_item={item} />
  );

  return (
    <View style={styles.container}>
      <FlatList
        keyboardShouldPersistTaps="handled"
        numColumns={1}
        data={cart}
        renderItem={renderItem}
      />
      <CartProductsPricing cart={cart} />
    </View>
  );
};

export default memo(CartProducts);
