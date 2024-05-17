import React, {
  memo,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import {FlatList, ListRenderItemInfo, Text, View} from 'react-native';
import {ProductModel} from '../models/ProductModel';
import useProductsStyle from './styles/useProductsStyle';
import {TFunction} from 'i18next';
import {MD3Theme, ActivityIndicator} from 'react-native-paper';
import Product from './Product';
import {ShoppingCartContext} from '../contexts/ShoppingCartContext';
import {ProductsContext} from '../contexts/ProductsContext';

type ProductsProps = {
  t: TFunction<'translation', undefined>;
  theme: MD3Theme;
  category: string | undefined;
  submittedText: string | undefined;
};

const Products = ({t, theme, category, submittedText}: ProductsProps) => {
  const {styles} = useProductsStyle(theme);

  const {addToCart} = useContext(ShoppingCartContext);
  const {products, loadingProducts} = useContext(ProductsContext);
  const [pageOffset, setPageOffset] = useState<number>(2);
  const [productsShown, setProductsShown] = useState<ProductModel[]>([]);

  let initialLoadNumber = 20;

  const filterProducts = () => {
    let filteredProducts: ProductModel[] = products;

    if (submittedText !== undefined) {
      filteredProducts = filteredProducts.filter((prod: ProductModel) =>
        prod.name
          .trim()
          .toLocaleLowerCase('tr')
          .includes(submittedText.trim().toLocaleLowerCase('tr'))
      );
    }
    if (category !== undefined) {
      filteredProducts = filteredProducts.filter(
        (prod: ProductModel) => prod.category === category
      );
    }
    return filteredProducts;
  };

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

  const onEndReached = () => {
    console.log('onEndReached ', pageOffset);
    setPageOffset((offset) => offset + 1);
    setProductsShown(filterProducts().slice(0, pageOffset * initialLoadNumber));
  };

  useEffect(() => {
    setProductsShown(filterProducts().slice(0, initialLoadNumber));
  }, [products]);

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
          initialNumToRender={initialLoadNumber}
          removeClippedSubviews={true}
          data={productsShown}
          onEndReached={onEndReached}
          onEndReachedThreshold={0.2}
          renderItem={renderItem}
          ListEmptyComponent={ListEmptyComponent}
        />
      )}
    </View>
  );
};

export default memo(Products);
