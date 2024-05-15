import React, {memo, useContext} from 'react';
import {
  FlatList,
  ListRenderItemInfo,
  Text,
  useWindowDimensions,
  View,
} from 'react-native';
import {TFunction} from 'i18next';
import {MD3Theme} from 'react-native-paper';
import useSalesScreenCartStyle from './styles/useSalesScreenCartStyle';
import {ShoppingCartContext} from '../contexts/ShoppingCartContext';
import {CartProductModel} from '../models/CartProductModel';
import CartItem from './CartItem';

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
        contentContainerStyle={styles.flatlist}
        numColumns={1}
        data={cart}
        renderItem={renderItem}
      />
      <View style={styles.totalContainer}>
        <View style={styles.subTotalContainer}>
          <Text style={styles.subTotalText}>Ara Toplam</Text>
          <Text style={styles.subTotalPriceText}>10 TL</Text>
        </View>
        <View style={styles.paymentTotalContainer}>
          <Text style={styles.paymentTotalText}>Genel Toplam</Text>
          <Text style={styles.paymentTotalPriceText}>15 TL</Text>
        </View>
      </View>
    </View>
  );
};

export default memo(SalesScreenCart);
