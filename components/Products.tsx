import React, {memo} from 'react';
import {FlatList, ListRenderItemInfo, View} from 'react-native';
import {ProductModel} from '../models/ProductModel';
import useProductsStyle from './styles/useProductsStyle';
import {TFunction} from 'i18next';
import {MD3Theme} from 'react-native-paper';
import Product from './Product';

type ProductsProps = {
  t: TFunction<'translation', undefined>;
  theme: MD3Theme;
  products: ProductModel[];
};

const Products = ({t, theme, products}: ProductsProps) => {
  const renderItem = ({item}: ListRenderItemInfo<ProductModel>) => (
    <Product key={item.id} prod={item} t={t} theme={theme} />
  );

  const {styles} = useProductsStyle(theme);
  return (
    <View style={styles.flatlistContainer}>
      <FlatList
        columnWrapperStyle={styles.flatlist}
        numColumns={4}
        maxToRenderPerBatch={1}
        updateCellsBatchingPeriod={1000}
        initialNumToRender={10}
        removeClippedSubviews={true}
        data={products}
        renderItem={renderItem}
      />
    </View>
  );
};

export default memo(Products);
