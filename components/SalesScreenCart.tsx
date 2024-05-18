import React, {memo, useContext} from 'react';
import {FlatList, ListRenderItemInfo, View} from 'react-native';
import {TFunction} from 'i18next';
import {MD3Theme} from 'react-native-paper';
import useSalesScreenCartStyle from './styles/useSalesScreenCartStyle';
import {ShoppingCartContext} from '../contexts/ShoppingCartContext';
import {CartProductModel} from '../models/CartProductModel';
import CartItem from './CartItem';
import SalesScreenPricing from './SalesScreenPricing';

type SalesScreenCartProps = {
  t: TFunction<'translation', undefined>;
  theme: MD3Theme;
};

const SalesScreenCart = ({t, theme}: SalesScreenCartProps) => {
  const {styles} = useSalesScreenCartStyle(theme);
  const {cart} = useContext(ShoppingCartContext);

  const renderItem = ({item}: ListRenderItemInfo<CartProductModel>) => (
    <CartItem key={item.prod.id} cart_item={item} t={t} theme={theme} />
  );

  return (
    <View style={styles.container}>
      <FlatList
        keyboardShouldPersistTaps="handled"
        numColumns={1}
        data={cart}
        renderItem={renderItem}
      />
      <SalesScreenPricing t={t} theme={theme} cart={cart} />
    </View>
  );
};

export default memo(SalesScreenCart);
