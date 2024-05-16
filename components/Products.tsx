import React, {memo, useCallback, useContext, useMemo} from 'react';
import {FlatList, ListRenderItemInfo, Text, View} from 'react-native';
import {ProductModel} from '../models/ProductModel';
import useProductsStyle from './styles/useProductsStyle';
import {TFunction} from 'i18next';
import {MD3Theme, ActivityIndicator} from 'react-native-paper';
import Product from './Product';
import {ShoppingCartContext} from '../contexts/ShoppingCartContext';

type ProductsProps = {
  t: TFunction<'translation', undefined>;
  theme: MD3Theme;
  loadingProducts: boolean;
  products: ProductModel[];
};

const Products = ({t, theme, loadingProducts, products}: ProductsProps) => {
  const {styles} = useProductsStyle(theme);

  const {addToCart} = useContext(ShoppingCartContext);

  const renderItem = ({item}: ListRenderItemInfo<ProductModel>) => (
    <Product
      addToCart={addToCart}
      key={item.id}
      prod={item}
      t={t}
      theme={theme}
    />
  );

  const ListEmptyComponent = () => {
    return (
      <View style={styles.listEmptyView}>
        <Text style={styles.listEmptyViewText}>{t('no_item_in_products')}</Text>
      </View>
    );
  };

  const getItemLayout = useCallback(
    (data: any, index: number) => ({length: 50, offset: 50 * index, index}),
    []
  );

  return (
    <View style={styles.flatlistContainer}>
      {loadingProducts ? (
        <ActivityIndicator theme={theme} />
      ) : (
        <FlatList
          columnWrapperStyle={styles.flatlist}
          numColumns={4}
          maxToRenderPerBatch={1}
          updateCellsBatchingPeriod={1000}
          initialNumToRender={10}
          removeClippedSubviews={true}
          data={products}
          renderItem={renderItem}
          ListEmptyComponent={ListEmptyComponent}
          getItemLayout={getItemLayout}
        />
      )}
    </View>
  );
};

export default memo(Products);
