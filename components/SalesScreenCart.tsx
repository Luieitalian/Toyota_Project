import React, {memo, useContext} from 'react';
import {FlatList, ListRenderItemInfo, View} from 'react-native';
import {useTheme} from 'react-native-paper';
import useSalesScreenCartStyle from './styles/useSalesScreenCartStyle';
import {ShoppingCartContext} from '../contexts/ShoppingCartContext';
import {CartProductModel} from '../models/CartProductModel';
import CartItem from './CartItem';
import SalesScreenPricing from './SalesScreenPricing';
import {useTranslation} from 'react-i18next';

const SalesScreenCart = () => {
  const {t} = useTranslation();
  const theme = useTheme();

  const {styles} = useSalesScreenCartStyle(theme);
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
      <SalesScreenPricing cart={cart} />
    </View>
  );
};

export default memo(SalesScreenCart);
