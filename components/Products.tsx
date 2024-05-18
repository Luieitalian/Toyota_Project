import React, {
  Dispatch,
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
  category?: string | undefined;
  submittedText?: string | undefined;
  loading: boolean;
  setLoading: Dispatch<React.SetStateAction<boolean>>;
};

const Products = ({
  t,
  theme,
  category,
  submittedText,
  loading,
  setLoading,
}: ProductsProps) => {
  const {styles} = useProductsStyle(theme);

  const {addToCart} = useContext(ShoppingCartContext);
  const {products} = useContext(ProductsContext);

  const [pageOffset, setPageOffset] = useState<number>(1);
  const [productsShown, setProductsShown] = useState<ProductModel[]>(
    products.slice(0, 12)
  );

  const initialLoadNumber = 16;

  const filterProducts = useCallback(() => {
    let filteredProducts: ProductModel[] = products;

    if (submittedText !== undefined) {
      filteredProducts = filteredProducts.filter((prod: ProductModel) =>
        prod.name
          .trim()
          .toLocaleLowerCase('tr')
          .includes(submittedText.trim().toLocaleLowerCase('tr'))
      );
    }
    if (category !== undefined && category !== 'show_all') {
      filteredProducts = filteredProducts.filter(
        (prod: ProductModel) => prod.category === category
      );
    }
    console.log('category: ', category);
    console.log('submittedText: ', submittedText);
    return filteredProducts;
  }, [submittedText, category]);

  const renderItem = ({item}: ListRenderItemInfo<ProductModel>) => (
    <Product addToCart={addToCart} prod={item} t={t} theme={theme} />
  );

  const keyExtractor = (item: ProductModel) => item.id;

  const ListEmptyComponent = () => {
    return (
      <View style={styles.listEmptyView}>
        <Text style={styles.listEmptyViewText}>{t('no_item_in_products')}</Text>
      </View>
    );
  };

  const onEndReached = () => {
    console.log('onEndReached ', pageOffset);
    setPageOffset((o) => o + 1);
  };

  useEffect(() => {
    setPageOffset((o) => o + 1);
  }, [submittedText, category]);

  useEffect(() => {
    setProductsShown(filterProducts().slice(0, pageOffset * initialLoadNumber));
    setLoading(false);
  }, [pageOffset]);

  return (
    <View style={styles.flatlistContainer}>
      {loading ? (
        <>
          <Text style={styles.pleaseWait}>{t('please_wait')}</Text>
          <ActivityIndicator theme={theme} />
        </>
      ) : (
        <FlatList
          columnWrapperStyle={styles.flatlist}
          numColumns={4}
          maxToRenderPerBatch={1}
          updateCellsBatchingPeriod={1000}
          initialNumToRender={3}
          removeClippedSubviews={false}
          data={productsShown}
          onEndReached={onEndReached}
          onEndReachedThreshold={0.2}
          renderItem={renderItem}
          keyExtractor={keyExtractor}
          ListEmptyComponent={ListEmptyComponent}
        />
      )}
    </View>
  );
};

export default memo(Products);
